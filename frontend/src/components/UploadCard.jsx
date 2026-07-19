import { FaCloudUploadAlt } from "react-icons/fa";

function UploadCard({
  file,
  setFile,
  uploadFile,
  uploadedFilename,
  loading,
}) {
  return (
    <div className="upload-card">

      <div className="upload-icon">
        <FaCloudUploadAlt size={60} />
      </div>

      <h2>Upload Your PDF</h2>

      <p>
        Choose your study material and let AI create
        Notes, Summary, Quiz and Flashcards instantly.
      </p>

      <input
        type="file"
        accept=".pdf"
        disabled={loading}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="btn"
        onClick={uploadFile}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>

      {file && (
        <p className="selected-file">
          📄 {file.name}
        </p>
      )}

      {uploadedFilename && (
        <p className="success-file">
          ✅ Uploaded Successfully
        </p>
      )}

    </div>
  );
}

export default UploadCard;