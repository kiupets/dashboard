import React from "react";
import { TableRow, TableData, Span } from "..";

export const IncidentsRow = ({ 
    comunication,
    pasarelaClima,
    alumbrado,
    clima,
    banderola,
    rotulo,
    consumoClima,
    confort
  }) => {
    return (
    <>
      <TableRow className="table-row">
        <TableData
          colspan="3"
          className="table-index2"
        >
          <Span
            style={{ cursor: "pointer" }}
            label="Total Incidencias"
          />
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          {comunication.false}
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{pasarelaClima.false}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{alumbrado.false}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{clima.false}</p>
        </TableData>
        <TableData
        style={{ width: "100%" }}
        >
          <p>{banderola.false}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{rotulo.false}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{consumoClima.false}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{confort.false}</p>
        </TableData>
      </TableRow>
      <TableRow className="table-row">
        <TableData
          colspan="3"
          className="table-index2"
          style={{ width: "100%" }}
        >
          <Span
            style={{ cursor: "pointer" }}
            label="Total Store"
          />
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{comunication.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{pasarelaClima.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{alumbrado.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{clima.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{banderola.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{rotulo.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{consumoClima.true}</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{confort.true}</p>
        </TableData>
      </TableRow>
      <TableRow className="table-row">
        <TableData
          colspan="3"
          className="table-index2"
          style={{ width: "100%"}}
        >
          <Span
            style={{ cursor: "pointer" }}
            label="% Incidents"
          />
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{comunication.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{pasarelaClima.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{alumbrado.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{clima.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{banderola.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{rotulo.percent}%</p>
        </TableData>
        <TableData
          style={{ width: "100%" }}
        >
          <p>{consumoClima.percent}%</p>
        </TableData>
        <TableData>
          <p>{confort.percent}%</p>
        </TableData>
      </TableRow>
    </>
  )
}