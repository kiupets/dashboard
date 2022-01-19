import React from "react";
import { Span, TableRow, TableHeader } from "../shared/";
import { headersData } from "./headersData";
import "./headers.css";
export const Headers = ({ orderData }) => {
  return (
    <div className="div-container">
      <table className="table">
        <thead>
          <TableRow style={{ width: "100%" }}>
            {headersData?.map((header, i) => (
              <TableHeader key={i}>
                <Span
                  style={{
                    cursor: "pointer",
                    paddingLeft: "18px",
                  }}
                  onClick={orderData}
                  className={`span-header  ${header === "ID" ? "index" : ""}`}
                  label={header}
                />
              </TableHeader>
            ))}
          </TableRow>
        </thead>
      </table>
    </div>
  );
};
