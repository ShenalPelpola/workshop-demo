import React from "react";

const performHeavyComputation = () => {
  let total = 0;

  for (let i = 0; i < 100000000; i++) {
    total += Math.sqrt(i);
  }

  return Math.random() * total;
};

export const ExpensiveComponent = () => {
  const result = performHeavyComputation();

  return (
    <div>
      This is an expensive component. Result of heavy computation:{" "}
      {result.toFixed(2)}
    </div>
  );
};

export const MemorizedExpensiveComponent = React.memo(ExpensiveComponent);
