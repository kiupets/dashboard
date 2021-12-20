import React from "react";
import "./TableRow";

export const TableRow = ({ children, props }) => {
  return <tr {...props}>{children}</tr>;
};
