import React, { useState, useEffect } from "react";

const Toast = ({ type, message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast ${type}`} role="status">
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default Toast;

// -------------------------
import React, { useState } from "react";
import Toast from "./Toast";

const App = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <div className="app">
      <h2>Toast Notification</h2>

      <button onClick={() => showToast("success", "Operation successful!")}>
        Show Success Toast
      </button>

      <button onClick={() => showToast("error", "Something went wrong!")}>
        Show Error Toast
      </button>

      <button onClick={() => showToast("info", "Here is some information!")}>
        Show Info Toast
      </button>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default App;
// ---------------
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 280px;
  padding: 15px;
  border-radius: 6px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slideIn 0.3s ease;
}

.success {
  background-color: green;
}

.error {
  background-color: red;
}

.info {
  background-color: blue;
}

