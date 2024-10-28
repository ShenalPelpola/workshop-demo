import { useRef, memo, useEffect } from "react";

export const Child = ({ name, person, handleClick }) => {
  const numberOfRenders = useRef(0);

  useEffect(() => {
    numberOfRenders.current++;
  });

  return (
    <>
      <h1>Child re-render count: {numberOfRenders.current}</h1>
      <div>
        Hello {name}
      </div>
    </>
  );
};

export const MemorizedChild = memo(Child);
