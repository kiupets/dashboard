import React from "react";
import "./widget.css";

export const Widget = ({ children }) => {
  return (
    <div className="widget">
      {children}
    </div>
  );
};
