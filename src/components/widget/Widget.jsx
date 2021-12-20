import React from "react";
import { Span } from "../shared";
import "./widget.css";

export const Widget = ({ children }) => {
  return (
    <div className="widget">
      {children}
    </div>
  );
};
