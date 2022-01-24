import React from "react";
import "./TableData.css";

export const TableData = ({ children, className, ...props }) => {
  return (
    <td
      {...props}
<<<<<<< HEAD
      className={`${className === "table-cell" ? className : `table-data ${className ? className : ''}`
        }`}


=======
      className={`${
        className === "table-cell"
          ? className
          : `table-data ${className ? className : ""}`
      }`}
>>>>>>> f9c9cb3dddba31495ab18f950ff3fed550d27d15
    >
      {children}
    </td>
  );
};
