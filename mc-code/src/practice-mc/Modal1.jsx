// const [isOpen, setIsOpen] = useState(false);
// <button onClick={() => setIsOpen(true)}>Open Modal</button>
// <Modal2 isOpen={isOpen} onClose={() => setIsOpen(false)}>
//    <h3>Hello Modal</h3>
//    <p>This is modal content</p>
// </Modal2>
import React from "react";

const Modal1 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal1;
// ------------------------
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
}

.modal-content {
  position: relative;
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 6px;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 8px;
  cursor: pointer;
  font-size: 18px;
}