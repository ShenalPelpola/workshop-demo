import React, { useState} from "react";

export const ModelDialogWithButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              X
            </button>
            <h2>This is a Modal</h2>
            <p>You can place any content here.</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};
