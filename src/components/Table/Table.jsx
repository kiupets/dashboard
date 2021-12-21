import React from "react";
import { index, info, info2 } from "../../data";
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared/";
import "./Table.css";

export const Table = () => {
  return (
    <table className="table">
      <thead>
        <TableRow style={{ width: "100%" }}>
          {index.map((header, i) => (
            <TableHeader key={i}>
              <Span
                className={`span-header ${header?.id ? "index" : ""}`}
                label={header.name}
              />
            </TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {info.map((item) => (
          <TableRow key={item.id}>
            <TableData className="table-index">
              <Span
                className="span-index"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                label={item.id}
              />
            </TableData>
            <TableData className="table-index">
              <Span className="span-info" label={item.ciudad} />
            </TableData>
            <TableData>
              <Span className="span-info" label={item.tipo} />
            </TableData>
            <TableData>
              {item.color ? (
                <Dot style={{ backgroundColor: `${item.color}` }} />
              ) : (
                <Span className="span-no-data" label="-" />
              )}
            </TableData>
            <TableData>
              {item.color ? (
                <Dot style={{ backgroundColor: `${item.color}` }} />
              ) : (
                <Span className="span-no-data" label="-" />
              )}
            </TableData>
            <TableData>
              {item.color ? (
                <Dot style={{ backgroundColor: `${item.color}` }} />
              ) : (
                <Span className="span-no-data" label="-" />
              )}
            </TableData>

            <TableData>
              <Dot style={{ backgroundColor: "#00CC87" }} />
            </TableData>
            <TableData>
              <Dot style={{ backgroundColor: "#00CC87" }} />
            </TableData>
            <TableData>
              <Dot style={{ backgroundColor: "#00CC87" }} />
            </TableData>
            <TableData>
              <Span className="span-no-data" label="-" />
            </TableData>
            <TableData>
              <Span className="span-info" label={item.id} />
            </TableData>
            <TableData>
              <Span className="span-info" label={`${item.id}€`} />
            </TableData>
            <TableData className={item?.dot ? item.dot : ""}>
              <Span
                className="span-info"
                style={{ fontWeight: "bold" }}
                label={item.id}
              />
            </TableData>
            <TableData>
              <Span className="span-info" label={`${item.id}€`} />
            </TableData>
          </TableRow>
        ))}

        {info2.map((item) => (
          <TableRow className="table-row">
            <TableData colspan="3" className="table-index2" style={{ width: "100%" }}>
              <Span
                className=""
                style={{ cursor: "pointer", }}
                label={item.name}
              />
            </TableData>
            {/* <TableData
              className="table-index"
              style={{ width: "100%" }}
            ></TableData>
            <TableData
              className="table-index"
              style={{ width: "100%" }}
            ></TableData> */}
            <TableData className="table-index" style={{ width: "100%" }}>
              <Span
                className=""
                style={{ cursor: "pointer" }}
                label={item.number}
              />
            </TableData>
            <TableData className={item?.dot ? item.dot : ""}>
              <Span
                className="span-info"
                style={{ fontWeight: "bold" }}
                label={item.id}
              />
            </TableData>
            <TableData className={item?.dot ? item.dot1 : ""} style={{ width: "100%" }}>

              <Span
                style={{ cursor: "pointer" }}
                label={item.number}
              />
            </TableData>
            <TableData className={item?.dot ? item.dot : ""}>
              <Span
                className="span-info"
                style={{ fontWeight: "bold" }}
                label={item.number}
              />
            </TableData>
            <TableData className="table-index" style={{ width: "100%" }}>
              <Span
                className=""
                style={{ cursor: "pointer" }}
                label={item.number4}
              />
            </TableData>
            <TableData className={item?.dot ? item.dot : ""}>
              <Span
                className="span-info"
                style={{ fontWeight: "bold" }}
                label={item.id}
              />
            </TableData>
            <TableData className="table-index" style={{ width: "100%" }}>
              <Span
                className=""
                style={{ cursor: "pointer" }}
                label={item.number4}
              />
            </TableData>
            <TableData className={item?.dot1 ? item.dot1 : ""}>
              <Span
                className="span-info"
                style={{ fontWeight: "bold" }}
                label={item.number2}
              />
            </TableData>
          </TableRow>
        ))}
      </tbody>

      <tbody></tbody>
    </table>
  );
};
