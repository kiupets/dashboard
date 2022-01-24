import React from "react";
import { DropDownItems } from "../";
import "./DropDownTags.css";

export const DropDownTags = ({ tags }) => {
  const dropDownItems = tags.map((toast) => {
    return (
      <DropDownItems key={toast.id}>
        <div>{toast.label}</div>
      </DropDownItems>
    );
  });

  return <div className="dropdown">{dropDownItems}</div>;
};
