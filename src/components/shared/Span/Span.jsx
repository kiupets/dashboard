import React from "react";
import "./Span.css";

export const Span = (props) => {
  return (
    <div className={props.divclassname}>
      <span {...props}>{props.label}</span>
    </div>
  )
};
