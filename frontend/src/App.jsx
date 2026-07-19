import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import FeatureButtons from "./components/FeatureButtons";
import ResponseCard from "./components/ResponseCard";
import ChatBox from "./components/ChatBox";
import VivaBox from "./components/VivaBox";

// Create a unique user ID for each browser
const userId = "demo123";


function App() {

  const [file, setFile] = useState(null);

  const [uploadedFilename, setUploadedFilename] = useState("");

  const [question, setQuestion] = useState("");

  const [notes, setNotes] = useState("");

  const [summary, setSummary] = useState("");

  const [quiz, setQuiz] = useState("");

  const [flashcards, setFlashcards] = useState("");

  const [chatAnswer, setChatAnswer] = useState("");

  const [loading, setLoading] = useState("");

  const uploadFile = async () => {

    if (!file) {
      toast.warning("Please choose a PDF first.");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    setLoading("upload");

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadedFilename(res.data.filename);

      toast.success("PDF Uploaded Successfully!");

    } catch (err) {

      console.error(err);

      toast.error(
        err.response?.data?.detail ||
        err.message ||
        "Upload Failed"
      );

    } finally {

      setLoading("");

    }

  };

  const generateNotes = async () => {

    if (!uploadedFilename) {
      toast.warning("Please upload a PDF first.");
      return;
    }

    setLoading("notes");

    try {

      const res = await axios.get(
        `http://127.0.0.1:8000/notes/${uploadedFilename}`
      );

      setNotes(res.data.notes);

    } catch {

      toast.error("Failed to generate notes.");

    } finally {

      setLoading("");

    }

  };
    const generateSummary = async () => {

    if (!uploadedFilename) {
      toast.warning("Please upload a PDF first.");
      return;
    }

    setLoading("summary");

    try {

      const res = await axios.get(
        `http://127.0.0.1:8000/summary/${uploadedFilename}`
      );

      setSummary(res.data.summary);

    } catch (err) {

      console.error(err);

      toast.error("Failed to generate summary.");

    } finally {

      setLoading("");

    }

  };

  const generateQuiz = async () => {

    if (!uploadedFilename) {
      toast.warning("Please upload a PDF first.");
      return;
    }

    setLoading("quiz");

    try {

      const res = await axios.get(
        `http://127.0.0.1:8000/quiz/${uploadedFilename}`
      );

      setQuiz(res.data.quiz);

    } catch (err) {

      console.error(err);

      toast.error("Failed to generate quiz.");

    } finally {

      setLoading("");

    }

  };

  const generateFlashcards = async () => {

    if (!uploadedFilename) {
      toast.warning("Please upload a PDF first.");
      return;
    }

    setLoading("flashcards");

    try {

      const res = await axios.get(
        `http://127.0.0.1:8000/flashcards/${uploadedFilename}`
      );

      setFlashcards(res.data.flashcards);

    } catch (err) {

      console.error(err);

      toast.error("Failed to generate flashcards.");

    } finally {

      setLoading("");

    }

  };

  const askAI = async () => {

    if (!uploadedFilename) {
      toast.warning("Please upload a PDF first.");
      return;
    }

    if (!question.trim()) {
      toast.warning("Please enter a question.");
      return;
    }

    setLoading("chat");

    try {

    const res = await axios.post(
  "http://127.0.0.1:8000/chat",
  {
    filename: uploadedFilename,
    question: question,
    user_id: userId,
  }
);

      setChatAnswer(res.data.answer);

    } catch (err) {

      console.error(err);

      toast.error("Failed to get AI response.");

    } finally {

      setLoading("");

    }

  };
    return (

    <div className="app">

      <Sidebar />

      <main className="main-content">

        <Hero />

        <UploadCard
          file={file}
          setFile={setFile}
          uploadFile={uploadFile}
          uploadedFilename={uploadedFilename}
          loading={loading === "upload"}
        />

        <FeatureButtons
          generateNotes={generateNotes}
          generateSummary={generateSummary}
          generateQuiz={generateQuiz}
          generateFlashcards={generateFlashcards}
          loading={loading}
        />

        <ResponseCard response={notes} />

        <ResponseCard response={summary} />

        <ResponseCard response={quiz} />

        <ResponseCard response={flashcards} />

        <ChatBox
          question={question}
          setQuestion={setQuestion}
          askAI={askAI}
          loading={loading === "chat"}
        />

        <ResponseCard response={chatAnswer} />

        <VivaBox
          uploadedFilename={uploadedFilename}
        />

      </main>

    </div>

  );
  }

export default App;