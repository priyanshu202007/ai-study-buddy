import {
  FaStickyNote,
  FaFileAlt,
  FaQuestionCircle,
  FaLayerGroup,
} from "react-icons/fa";

function FeatureButtons({
  generateNotes,
  generateSummary,
  generateQuiz,
  generateFlashcards,
  loading,
}) {
  return (
    <div className="feature-buttons">

      <button
        className="btn"
        onClick={generateNotes}
        disabled={loading}
      >
        <FaStickyNote />
        {loading === "notes" ? " Generating..." : " Generate Notes"}
      </button>

      <button
        className="btn"
        onClick={generateSummary}
        disabled={loading}
      >
        <FaFileAlt />
        {loading === "summary" ? " Generating..." : " Generate Summary"}
      </button>

      <button
        className="btn"
        onClick={generateQuiz}
        disabled={loading}
      >
        <FaQuestionCircle />
        {loading === "quiz" ? " Generating..." : " Generate Quiz"}
      </button>

      <button
        className="btn"
        onClick={generateFlashcards}
        disabled={loading}
      >
        <FaLayerGroup />
        {loading === "flashcards"
          ? " Generating..."
          : " Generate Flashcards"}
      </button>

    </div>
  );
}

export default FeatureButtons;