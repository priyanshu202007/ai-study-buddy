function VivaHeader({ currentQuestion, totalQuestions }) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="viva-header">

      <h2>🎤 AI Viva Mode</h2>

      <p>
        Question {currentQuestion} / {totalQuestions}
      </p>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`
          }}
        ></div>

      </div>

    </div>
  );
}

export default VivaHeader;