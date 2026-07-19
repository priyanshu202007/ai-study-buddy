import { FaPaperPlane } from "react-icons/fa";

function ChatBox({
  question,
  setQuestion,
  askAI,
  loading,
}) {
  return (
    <div className="chat-box">

      <h2>🤖 Ask AI</h2>

      <p>
        Ask anything related to your uploaded PDF.
      </p>

      <input
        type="text"
        placeholder="Example: Explain Binary Search Tree..."
        value={question}
        disabled={loading}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        className="btn"
        onClick={askAI}
        disabled={loading}
      >
        <FaPaperPlane />
        {loading ? " Asking..." : " Ask AI"}
      </button>

    </div>
  );
}

export default ChatBox;