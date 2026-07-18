import { useState } from "react";

function NotesSearch({ content }) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!content) {
    return null;
  }

  const searchWords = searchTerm
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const lines = content.split("\n");

  const filteredLines = searchWords.length === 0
    ? lines
    : lines.filter((line) =>
        searchWords.some((word) =>
          line.toLowerCase().includes(word)
        )
      );

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🔍 Search in Generated Content</h3>

      <input
        type="text"
        placeholder="Search notes, summary, quiz..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "70%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <p>
        {searchTerm
          ? `${filteredLines.length} matching line(s)`
          : "Type something to search"}
      </p>

      {searchTerm && (
        <pre
          style={{
            textAlign: "left",
            border: "1px solid gray",
            padding: "15px",
            whiteSpace: "pre-wrap",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {filteredLines.length > 0
            ? filteredLines.join("\n")
            : "No matching content found."}
        </pre>
      )}
    </div>
  );
}

export default NotesSearch;