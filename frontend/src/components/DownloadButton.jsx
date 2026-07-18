function DownloadButton({ content, filename }) {
  const downloadContent = () => {
    if (!content) {
      alert("There is no content to download yet.");
      return;
    }

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={downloadContent}>
      ⬇️ Download
    </button>
  );
}

export default DownloadButton;