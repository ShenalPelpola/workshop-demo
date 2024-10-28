import React from "react";
import { Paragraph } from "./Paragraph";

export const Parent = ({ ExpensiveComponent }) => {
  const [scrollY, setScrollY] = React.useState(0);

  const handleOnScroll = (e) => {
    console.log("Scrolling");
    setScrollY(e.target.scrollTop);
  };

  return (
    <div className="paragraph-container" onScroll={handleOnScroll}>
      {ExpensiveComponent}
      Scroll Y: {scrollY}
      <Paragraph />
    </div>
  );
};
