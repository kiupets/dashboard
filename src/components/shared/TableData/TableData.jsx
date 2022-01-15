import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, colspan,...props }) => {
  return <td  {...props} colSpan={colspan} className={`table-data ${className}`}>{children}</td>;
};

//  default TableData;
