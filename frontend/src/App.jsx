import { useState } from "react";
import axios from "axios";
import DownloadButton from "./components/DownloadButton";
import NotesSearch from "./components/NotesSearch";
function App() {
  const [file, setFile] = useState(null);
  const [uploadedFilename, setUploadedFilename] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  // ---------------- Upload PDF ----------------

  const uploadFile = async () => {
    if (!file) {
      alert("Please choose a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setResponse("Uploading...");

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

      setResponse(
        "✅ Upload Successful!\n\n" +
          JSON.stringify(res.data, null, 2)
      );
    } catch (err) {
      console.error(err);

      if (err.response) {
        setResponse(
          "❌ Server Error\n\n" +
            JSON.stringify(err.response.data, null, 2)
        );
      } else if (err.request) {
        setResponse(
          "❌ No response received from backend.\nCheck if FastAPI is running."
        );
      } else {
        setResponse("❌ " + err.message);
      }
    }
  };

  // ---------------- Generate Notes ----------------

  const generateNotes = async () => {
    if (!uploadedFilename) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setResponse("Generating Notes...");

      const res = await axios.get(
        `http://127.0.0.1:8000/notes/${uploadedFilename}`
      );

      setResponse(res.data.notes);
    } catch (err) {
      console.error(err);
      setResponse("❌ Failed to generate notes.");
    }
  };

  // ---------------- Generate Summary ----------------

  const generateSummary = async () => {
    if (!uploadedFilename) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setResponse("Generating Summary...");

      const res = await axios.get(
        `http://127.0.0.1:8000/summary/${uploadedFilename}`
      );

      setResponse(res.data.summary);
    } catch (err) {
      console.error(err);
      setResponse("❌ Failed to generate summary.");
    }
  };

  // ---------------- Generate Quiz ----------------

  const generateQuiz = async () => {
    if (!uploadedFilename) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setResponse("Generating Quiz...");

      const res = await axios.get(
        `http://127.0.0.1:8000/quiz/${uploadedFilename}`
      );

      setResponse(res.data.quiz);
    } catch (err) {
      console.error(err);
      setResponse("❌ Failed to generate quiz.");
    }
  };

  // ---------------- Generate Flashcards ----------------

  const generateFlashcards = async () => {
    if (!uploadedFilename) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setResponse("Generating Flashcards...");

      const res = await axios.get(
        `http://127.0.0.1:8000/flashcards/${uploadedFilename}`
      );

      setResponse(res.data.flashcards);
    } catch (err) {
      console.error(err);
      setResponse("❌ Failed to generate flashcards.");
    }
  };

  // ---------------- Ask AI ----------------

  const askAI = async () => {
    if (!uploadedFilename) {
      alert("Upload a PDF first.");
      return;
    }

    if (!question) {
      alert("Type a question.");
      return;
    }

    try {
      setResponse("Thinking...");

      const res = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          filename: uploadedFilename,
          question: question,
        }
      );

      setResponse(res.data.answer);
    } catch (err) {
      console.error(err);
      setResponse("❌ Failed to get AI response.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>📚 AI Study Buddy</h1>

      <h2>Upload PDF</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={uploadFile}>Upload</button>

      <hr />

      <button onClick={generateNotes}>Generate Notes</button>

      <button
        onClick={generateQuiz}
        style={{ marginLeft: "10px" }}
      >
        Generate Quiz
      </button>

      <button
        onClick={generateSummary}
        style={{ marginLeft: "10px" }}
      >
        Generate Summary
      </button>

      <button
        onClick={generateFlashcards}
        style={{ marginLeft: "10px" }}
      >
        Generate Flashcards
      </button>

      <hr />

      <h2>Ask AI</h2>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "70%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button onClick={askAI}>Ask</button>

      <hr />

      <pre
        style={{
          textAlign: "left",
          border: "1px solid gray",
          padding: "15px",
          minHeight: "220px",
          whiteSpace: "pre-wrap",
          overflowX: "auto",
        }}
      >
        {response}
      </pre>

      <br />

      <DownloadButton
        content={response}
        filename="AI_Study_Material.txt"
      />

      <NotesSearch content={response} />
    </div>
  );
}

export default App;