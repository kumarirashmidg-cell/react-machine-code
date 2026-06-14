import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(10);
  return (
    <>
      <div className="w-full h-5 bg-amber-100 border border-black rounded-4xl overflow-hidden">
        <div
          className="w-full h-full bg-black"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <button className="btn" onClick={() => setProgress(progress + 10)}>
        STEP
      </button>
    </>
  );
};

export default ProgressBar;
