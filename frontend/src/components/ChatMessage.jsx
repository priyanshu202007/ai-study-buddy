function ChatMessage({ sender, text }) {
  const isAI = sender === "ai";

  return (
    <div className={isAI ? "ai-message" : "student-message"}>
      <div className="avatar">
        {isAI ? "🤖" : "👨‍🎓"}
      </div>

      <div className="message">
        <pre>{text}</pre>
      </div>
    </div>
  );
}

export default ChatMessage;