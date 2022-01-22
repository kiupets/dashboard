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
  confort,
}) => {
  return (
    <>
      <TableRow >
        <TableData className="table-index2">
          <Span style={{ cursor: "pointer" }} label="Total Incidencias" />
        </TableData>
        <TableData className="table-cell">{comunication.false}</TableData>
        <TableData className="table-cell">
          <Span className='span-info' label={pasarelaClima.false} />
        </TableData>
        <TableData >
          <Span label={alumbrado.false} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={clima.false} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={banderola.false} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={rotulo.false} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span className="span-info" label={consumoClima.false} />
        </TableData>
        <TableData className="table-cell">
          <Span label={confort.false} className='span-info' />
        </TableData>
      </TableRow>
      <TableRow className="table-row">
        <TableData className="table-index2">
          <Span style={{ cursor: "pointer" }} label="Total Store" />
        </TableData>
        <TableData className="table-cell">
          <Span label={comunication.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={pasarelaClima.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={alumbrado.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={clima.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={banderola.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={rotulo.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={consumoClima.true} className='span-info' />
        </TableData>
        <TableData className="table-cell">
          <Span label={confort.true} className='span-info' />
        </TableData>
      </TableRow>
      <TableRow className="table-row">
        <TableData className="table-index2">
          <Span style={{ cursor: "pointer" }} label="% Incidents" />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${comunication?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${comunication.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${pasarelaClima?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${pasarelaClima.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${alumbrado?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${alumbrado.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${clima?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${clima.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${banderola?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${banderola.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${rotulo?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${rotulo.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${consumoClima?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${consumoClima.percent}%`} className='span-info' />
        </TableData>
        <TableData
          style={{
            backgroundColor: `rgba(255, 99, 71, ${confort?.percent})`,
            color: "black",
          }}
        >
          <Span label={`${confort.percent}%`} className='span-info' />
        </TableData>
      </TableRow>
    </>
  );
};
