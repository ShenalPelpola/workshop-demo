import React from "react";
import { ModelDialogWithButton } from "./ModelDialogWithButton";
import { ExpensiveComponent } from "./ExpensiveComponent";

export const Parent = () => {

  return (
    <>
      <ModelDialogWithButton />
      <ExpensiveComponent />
    </>
  );
};
