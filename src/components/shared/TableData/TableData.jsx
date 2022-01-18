import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, colSpan, ...props }) => {
  return <td colspan={colSpan} {...props} className={`table-data ${className}`}>{children}</td>;
};


