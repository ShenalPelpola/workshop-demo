import React, { useState, useCallback } from "react";
import { Child, MemorizedChild } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Bruce");

  // const handleClick = () => {
  //   console.log("Button clicked");
  // };

    const handleClick = useCallback(() => {
      console.log("Button clicked");
    }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName("Clark")}>Name - {name}</button>
      {/* <Child name={name} /> */}
      <MemorizedChild name={name} handleClick={handleClick} />
    </>
  );
};
