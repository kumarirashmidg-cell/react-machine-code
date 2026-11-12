import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(10);

  return (
    <>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <button
        className="step-button"
        onClick={() => setProgress(progress + 10)}
      >
        STEP
      </button>
    </>
  );
};

export default ProgressBar;
//-------------
.progress-container {
  width: 100%;
  height: 20px;
  background-color: #fef3c7;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: black;
  transition: width 0.3s ease;
}

.step-button {
  margin-top: 15px;
  padding: 8px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

