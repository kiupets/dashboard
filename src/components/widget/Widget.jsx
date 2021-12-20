import React from "react";
import { Span } from "../shared";
import "./widget.css";

export const Widget = ({ string, number, icon }) => {
  return (
    <div className="widget">
      <div className="items">
        <div className="icon-number">
          <Span style={{marginRight:"10px"}}label={icon ? icon : "prueba"} />
          <Span style={{ fontSize: "72px" }} label={number} />
          <Span style={{ visibility: "hidden" }} label={icon} />
        </div>
        <Span label={string} />
      </div>
    </div>
  );
};
