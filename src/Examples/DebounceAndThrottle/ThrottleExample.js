import React, { useState, useEffect } from "react";
import { useThrottle } from "./useThrottle";

export const ThrottledMouseTracker = () => {
  const [count, setCount] = useState(0);

  // Using the custom useThrottle hook to throttle the mouse coordinates with a 100ms delay
  const throttledCount = useThrottle(count, 1000);

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (event) => {
      setCount(prveCount => prveCount + 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ height: "100vh", textAlign: "center", paddingTop: "20%" }}>
      <h2>Mouse Tracker without Throttling</h2>
      <p>
        Count: {count}
      </p>
      <h2>Mouse Tracker with Throttling</h2>
      <p>
       Throttled Count: {throttledCount}
      </p>
    </div>
  );
};
