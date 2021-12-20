import React from "react";
import "./Span.css";

const Span = (props) => {

  return <span {...props}>{props.label}</span>;
};

export default Span;
