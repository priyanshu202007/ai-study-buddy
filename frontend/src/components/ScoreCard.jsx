function ScoreCard({ score, feedback }) {
  if (score === null || score === undefined) return null;

  return (
    <div className="score-card">

      <h3>⭐ AI Evaluation</h3>

      <div className="score-number">
        {score} / 10
      </div>

      <div className="feedback-box">
        {feedback}
      </div>

    </div>
  );
}

export default ScoreCard;