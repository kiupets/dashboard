import React from "react";
import "./Span.css";

export const Span = (props) => {
  return (
    <div className="span-container">
      <span {...props}>{props.label}</span>
    </div>
  )
};
