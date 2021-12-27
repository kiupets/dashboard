import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, colspan }) => {
  return <td style={{ width: '108px' }} colSpan={colspan} className={`table-data ${className}`}>{children}</td>;
};

//  default TableData;
