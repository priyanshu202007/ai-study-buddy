import { useState } from "react";
import axios from "axios";

import "./VivaBox.css";

import VivaHeader from "./VivaHeader";
import ChatMessage from "./ChatMessage";
import ScoreCard from "./ScoreCard";
import VivaInput from "./VivaInput";

function VivaBox({ uploadedFilename }) {
  const TOTAL_QUESTIONS = 5;

  const [messages, setMessages] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");

  const addMessage = (sender, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender,
        text,
      },
    ]);
  };

  const startViva = async () => {
    if (!uploadedFilename) {
      alert("Please upload a PDF first.");
      return;
    }

    setMessages([]);
    setQuestionNumber(1);
    setScore(null);
    setFeedback("");

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/viva/start",
        {
          filename: uploadedFilename,
        }
      );

      addMessage("ai", res.data.question);
    } catch (err) {
      console.error(err);
      alert("Unable to start Viva");
    }

    setLoading(false);
  };

  const submitAnswer = async () => {
    if (!answer.trim()) return;

    const studentAnswer = answer;

    addMessage("student", studentAnswer);

    setAnswer("");

    const history = messages
      .map(
        (m) =>
          `${m.sender === "ai" ? "AI" : "Student"}: ${m.text}`
      )
      .join("\n");

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/viva/continue",
        {
          filename: uploadedFilename,
          history,
          answer: studentAnswer,
        }
      );

      setScore(res.data.score);
      setFeedback(res.data.feedback);

      addMessage("ai", res.data.next_question);

      if (questionNumber < TOTAL_QUESTIONS) {
        setQuestionNumber((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
      alert("Unable to continue Viva");
    }

    setLoading(false);
  };

  return (
    <div className="viva-container">

      <VivaHeader
        currentQuestion={questionNumber}
        totalQuestions={TOTAL_QUESTIONS}
      />

      {messages.length === 0 && (
        <button
          className="viva-button"
          onClick={startViva}
        >
          🚀 Start Viva
        </button>
      )}

      <div className="chat-container">

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

      </div>

      <ScoreCard
        score={score}
        feedback={feedback}
      />

      {messages.length > 0 && (
        <VivaInput
          answer={answer}
          setAnswer={setAnswer}
          submitAnswer={submitAnswer}
          loading={loading}
        />
      )}

    </div>
  );
}

export default VivaBox;