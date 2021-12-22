import React from "react";
import "./Widget.css";

export const Widget = ({ children }) => {
  return (
    <div className="widget">
      {children}
    </div>
  );
};
