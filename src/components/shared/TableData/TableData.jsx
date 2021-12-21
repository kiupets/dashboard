import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, colspan }) => {
  return <td colspan={colspan} className={`table-data ${className}`}>{children}</td>;
};

//  default TableData;
