import React from "react";
import "./TableHeader.css";
const TableHeader = ({ children, header }) => (
  <th className={`${header?.id === 1 ? "index" : "info"}`}>{children}</th>
);

export default TableHeader;
