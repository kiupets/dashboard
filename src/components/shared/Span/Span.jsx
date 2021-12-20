import React from "react";
import "./Span.css";

export const Span = (props) => {
  return <span {...props}>{props.label}</span>;
};

