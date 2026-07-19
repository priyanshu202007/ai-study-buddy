import {
  FaHome,
  FaFileUpload,
  FaStickyNote,
  FaFileAlt,
  FaQuestionCircle,
  FaLayerGroup,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <h2 className="logo">
          📚 AI Study Buddy
        </h2>

        <ul>

          <li>
            <FaHome />
            Dashboard
          </li>

          <li>
            <FaFileUpload />
            Upload PDF
          </li>

          <li>
            <FaStickyNote />
            Notes
          </li>

          <li>
            <FaFileAlt />
            Summary
          </li>

          <li>
            <FaQuestionCircle />
            Quiz
          </li>

          <li>
            <FaLayerGroup />
            Flashcards
          </li>

          <li>
            <FaRobot />
            Ask AI
          </li>

        </ul>

      </div>

      <div className="sidebar-footer">

        <p>🚀 Build in AI Hackathon</p>

        <small>Version 2.0</small>

      </div>

    </aside>
  );
}

export default Sidebar;