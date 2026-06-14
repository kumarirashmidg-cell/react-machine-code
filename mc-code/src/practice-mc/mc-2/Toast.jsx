import React, { useState } from "react";

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const showNotification = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="container">
      <button className="btn" onClick={showNotification}>
        Show Toast
      </button>

      {showToast && <div className="toast">Successfully Saved!</div>}
    </div>
  );
};

export default Toast;
// --------------
.container {
  padding: 40px;
  text-align: center;
  font-family: Arial;
}

.btn {
  padding: 10px 15px;
  border: 1px solid black;
  background: lightgray;
  cursor: pointer;
}

.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;

  background: black;
  color: white;
  padding: 12px 20px;

  border-radius: 5px;
  font-size: 14px;
}