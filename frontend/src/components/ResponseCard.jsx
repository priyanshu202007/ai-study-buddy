import { FaRobot } from "react-icons/fa";

function ResponseCard({ response }) {

  return (

    <div className="response-card">

      <h2>
        <FaRobot />
        AI Response
      </h2>

      {
        response ?

        <pre>{response}</pre>

        :

        <div className="empty-response">

          <h3>
            👋 Welcome to AI Study Buddy
          </h3>

          <p>

            Upload your study PDF.

            Then generate Notes,

            Summary,

            Quiz,

            Flashcards

            or ask AI.

          </p>

        </div>

      }

    </div>

  );

}

export default ResponseCard;