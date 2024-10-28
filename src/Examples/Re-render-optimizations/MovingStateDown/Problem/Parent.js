import React, { useState } from "react";
import { ModalDialog } from "./ModelDialog";
import { ExpensiveComponent } from "./ExpensiveComponent";

export const Parent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ExpensiveComponent />
    </>
  );
};
