import React from "react";
import { Span, TableRow, TableHeader } from "../shared/";
import { headersData } from "./headersData";
import "./headers.css";
export const Headers = ({ orderData }) => {
  return (
    <table className="table">
      <thead>
        <TableRow style={{ width: "100%" }}>
          {headersData?.map((header, i) => (
            <TableHeader className={`${header === "ID" ? "index" : ""}`} key={i}>
              <Span
                divclassname='span-container'
                style={{
                  cursor: "pointer",
                  paddingLeft: "5px",
                }}
                onClick={orderData}
                className={`${header === "ID" ?
                  "span-special" :
                  header === 'Impacto Anomalías'
                    || header === 'Ahorro Potencial'
                    ? "span-header-anomalia"
                    : "span-header "}`}
                label={header}
              />
            </TableHeader>
          ))}
        </TableRow>
      </thead>
    </table>
  );
};
