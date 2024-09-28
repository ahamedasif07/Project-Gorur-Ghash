import React from "react";

const Section = ({ children }) => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div>{children}</div>
    </div>
  );
};

export default Section;
