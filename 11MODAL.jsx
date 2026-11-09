import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const portalRef = document.getElementById("portal-root");
  if (!isOpen) return null;
  return createPortal(
    <div className="modal">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          ❌
        </button>
        {children}
      </div>
    </div>,
    portalRef,
  );
};

export default Modal;

import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>React Portal Example</h2>

      <button onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Hello!</h2>
        <p>This is my reusable React Modal.</p>
        <button onClick={closeModal}>Okay</button>
      </Modal>
    </div>
  );
};

export default App;

.modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.6;
    z-index: 20;
}
.modal-content{
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    z-index: 30;
    border: 1px solid black;
}
.close-btn{
    margin-bottom: 5px;
}