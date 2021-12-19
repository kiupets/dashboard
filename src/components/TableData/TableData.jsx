import React from "react";
import "./TableData.css";

const TableData = ({ children, className }) => {
  return <td className={`table-data ${className}`}>{children}</td>;
};

export default TableData;
