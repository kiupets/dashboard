import React from "react";
import { DropDownItems } from "../DropDownItems/DropDownItems";
import "./DropDownTags.css";

export const DropDownTags = ({ tags }) => {
  const dropDownItems = tags.map((toast) => {
    return (
      <DropDownItems key={toast.id}>
        <div>{toast}</div>
      </DropDownItems>
    );
  });

  return <div className="dropdown">{dropDownItems}</div>;
};