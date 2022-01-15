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
        >
          {comunication.false}
        </TableData>
        <TableData
        >
          <p>{pasarelaClima.false}</p>
        </TableData>
        <TableData
        >
          <p>{alumbrado.false}</p>
        </TableData>
        <TableData         
        >
          <p>{clima.false}</p>
        </TableData>
        <TableData       
        >
          <p>{banderola.false}</p>
        </TableData>
        <TableData
        >
          <p>{rotulo.false}</p>
        </TableData>
        <TableData         
        >
          <p>{consumoClima.false}</p>
        </TableData>
        <TableData         
        >
          <p>{confort.false}</p>
        </TableData>
      </TableRow>
      <TableRow className="table-row">
        <TableData
          colspan="3"
          className="table-index2"         
        >
          <Span
            style={{ cursor: "pointer" }}
            label="Total Store"
          />
        </TableData>
        <TableData         
        >
          <p>{comunication.true}</p>
        </TableData>
        <TableData         
        >
          <p>{pasarelaClima.true}</p>
        </TableData>
        <TableData         
        >
          <p>{alumbrado.true}</p>
        </TableData>
        <TableData         
        >
          <p>{clima.true}</p>
        </TableData>
        <TableData         
        >
          <p>{banderola.true}</p>
        </TableData>
        <TableData         
        >
          <p>{rotulo.true}</p>
        </TableData>
        <TableData         
        >
          <p>{consumoClima.true}</p>
        </TableData>
        <TableData         
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
        style={{  backgroundColor:`rgba(255, 99, 71, ${comunication?.percent})`,color:"black"}}
        >
          <p>{comunication.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${pasarelaClima?.percent})`,color:"black"}}
        >
          <p>{pasarelaClima.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${alumbrado?.percent})`,color:"black"}}
        >
          <p>{alumbrado.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${clima?.percent})`,color:"black"}}
        >
          <p>{clima.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${banderola?.percent})`,color:"black"}}
        >
          <p>{banderola.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${rotulo?.percent})`,color:"black"}}
        >
          <p>{rotulo.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${consumoClima?.percent})`,color:"black"}}
        >
          <p>{consumoClima.percent}%</p>
        </TableData>
        <TableData
        style={{  backgroundColor:`rgba(255, 99, 71, ${confort?.percent})`,color:"black"}}
        >
          <p>{confort.percent}%</p>
        </TableData>
      </TableRow>
    </>
  )
}