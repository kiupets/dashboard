import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, ...props }) => {
  return (
    <td
      {...props}
      className={`${className === "table-cell" ? className : `table-data ${className ? className : ''}`
        }`}


    >
      {children}
    </td>
  );
};
