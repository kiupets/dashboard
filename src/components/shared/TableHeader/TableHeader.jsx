import React from "react";
import "./TableHeader.css";
export const TableHeader = ({ children, header }) => (
  <th className={`${header?.id === 1 ? "index" : "info"}`}>{children}</th>
);

