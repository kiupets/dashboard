import React from "react";
import "./TableData.css";

export const TableData = ({ children, className }) => {
  return <td className={`table-data ${className}`}>{children}</td>;
};

//  default TableData;
