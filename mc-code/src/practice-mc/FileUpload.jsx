import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      setError("Only image files allowed");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setError("");
  };

  const removeUpload = () => {
    setFile(null);
    setPreview("");
    setError("");
  };

  return (
    <div className="container">
      <input type="file" onChange={handleChange} className="file-input" />

      {error && <p className="error">{error}</p>}

      {file && (
        <div>
          <p>{file.name}</p>
          <p>{file.size} bytes</p>

          <img src={preview} alt="upload" className="preview-img" />

          <button className="remove-btn" onClick={removeUpload}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
// ----------------------------
.file-input {
  border: 1px solid #ccc;
  padding: 6px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 5px;
}
.preview-img {
  max-width: 200px;
  display: block;
  margin-top: 5px;
}
.remove-btn {
  margin-top: 5px;
  padding: 4px 8px;
  cursor: pointer;
}
