import React, { useState } from "react";
import { index, info, info2 } from "../../data";
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared/";
import "./Table.css";
// import data from './data.json'
const sortBy = (key) => (a, b) => {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
};
// console.log(data.sort(sortBy("Ciudad")))

export const Table = () => {
  // const
  return (
    <div style={{ padding: '30px' }}>

      <table className="table">
        <thead>
          <TableRow style={{ width: "100%" }}>
            {index.map((header, i) => (
              <TableHeader key={i}>
                <Span
                  onClick={() => { console.log('clicked') }}
                  className={`span-header ${header?.id ? "index" : ""}`}
                  label={header.name}
                />
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {info.map((item, i) => (
            <TableRow key={i}>
              <TableData className="table-index">
                <Span
                  className="span-index"
                  style={{ textDecoration: "underline", cursor: "pointer", width: '90px' }}
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
                <Dot style={{ backgroundColor: "#00CC87" }} />
              </TableData>
              <TableData>
                <Dot style={{ backgroundColor: "#00CC87" }} />
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

          {info2.map((item, i) => (
            <TableRow key={i} className="table-row">
              <TableData
                colspan="3"
                className="table-index2"
                style={{ width: "100%" }}
              >
                <Span
                  className=""
                  style={{ cursor: "pointer" }}
                  label={item.name}
                />
              </TableData>

              <TableData
                className={item?.dot1 ? item.dot1 : ""}
                style={{ width: "100%" }}
              >
                <Span
                  className=""
                  style={{ cursor: "pointer" }}
                  label={item.number}
                />
              </TableData>
              <TableData className={item?.dot2 ? item.dot2 : ""}>
                <Span
                  className="span-info"
                  style={{ fontWeight: "bold" }}
                  label={item.id}
                />
              </TableData>
              <TableData
                className={item?.dot1 ? item.dot1 : ""}
                style={{ width: "100%" }}
              >
                <Span style={{ cursor: "pointer" }} label={item.number} />
              </TableData>
              <TableData className={item?.dot3 ? item.dot3 : ""}>
                <Span
                  className="span-info"
                  style={{ fontWeight: "bold" }}
                  label={item.number}
                />
              </TableData>
              <TableData
                className={item?.dot1 ? item.dot1 : ""}
                style={{ width: "100%" }}
              >
                <Span
                  className=""
                  style={{ cursor: "pointer" }}
                  label={item.number4}
                />
              </TableData>
              <TableData className={item?.dot3 ? item.dot3 : ""}>
                <Span
                  className="span-info"
                  style={{ fontWeight: "bold" }}
                  label={item.id}
                />
              </TableData>
              <TableData
                className={item?.dot3 ? item.dot3 : ""}
                style={{ width: "100%" }}
              >
                <Span
                  className=""
                  style={{ cursor: "pointer" }}
                  label={item.number4}
                />
              </TableData>
              <TableData className={item?.dot2 ? item.dot2 : ""}>
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
    </div>

  );
};
