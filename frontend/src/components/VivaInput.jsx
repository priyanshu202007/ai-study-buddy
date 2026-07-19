function VivaInput({
  answer,
  setAnswer,
  submitAnswer,
  loading
}) {
  return (
    <div className="answer-section">

      <textarea
        rows="4"
        value={answer}
        placeholder="Type your answer..."
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        className="submit-button"
        disabled={loading}
        onClick={submitAnswer}
      >
        {loading ? "🤖 Evaluating..." : "Submit Answer"}
      </button>

    </div>
  );
}

export default VivaInput;