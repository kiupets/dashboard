import React from "react";
import "./Dot.css";
export const Dot = (props) => {
  return (
    <div className="dot-container">
      <div {...props}></div>
    </div>
  );
};
