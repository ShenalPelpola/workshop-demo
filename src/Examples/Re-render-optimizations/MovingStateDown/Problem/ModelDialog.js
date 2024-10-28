import React from "react";

export const ModalDialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>This is a Modal</h2>
        <p>You can place any content here.</p>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};
