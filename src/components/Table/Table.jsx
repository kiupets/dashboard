import React from "react";
import { index, info } from "../../data";
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared/";
import { BottomTable } from "../BottomTable/BottomTable";
import "./Table.css";

export const Table = () => {
  return (
    <div style={{ padding: '30px' }}>
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
          {info.map((item,i) => (
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
          <BottomTable />
        </tbody>
      </table>
    </div>

  );
};
