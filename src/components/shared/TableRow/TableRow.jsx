import React from "react";
import "./TableRow.css";

export const TableRow = ({ children, props }) => {
  return <tr {...props}>{children}</tr>;
};
