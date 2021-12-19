import React from "react";
import { index, info } from "../../../data";
import TableData from "../../TableData/TableData";
import Dot from "../Dot/Dot";
import Span from "../Span/Span";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <TableRow>
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
              <Span className="span-index" label={item.id} />
            </TableData>
            <TableData className="table-index">
              <Span className="span-info" label={item.ciudad} />
            </TableData>
            <TableData>
              {item.color ? (
                <Dot style={{ backgroundColor: `${item.color}` }} />
              ) : (
                <Span className="span-no-data" label="-" />
              )}
            </TableData>
            <TableData>
              <Span className="span-info" label={item.tipo} />
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
              {/* <Dot style={{ backgroundColor: "#F25A5A" }} /> */}
            </TableData>
            <TableData>
              <Dot style={{ backgroundColor: "#00CC87" }} />
            </TableData>
            <TableData>
              <Dot style={{ backgroundColor: "#F25A5A" }} />
            </TableData>
            <TableData className={item.dot}>
              <Span label={25} />
              {/* <Dot style={{ backgroundColor: "#F25A5A" }} /> */}
            </TableData>
          </TableRow>
        ))}
      </tbody>

      <tbody></tbody>
    </table>
  );
};

export default Table;
