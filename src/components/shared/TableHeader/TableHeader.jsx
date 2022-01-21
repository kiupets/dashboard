import React from "react";
import "./TableHeader.css";
export const TableHeader = ({ children, className }) => (
  <th className={`${className !== "" ? "index" : "info"}`}>{children}</th>
);
