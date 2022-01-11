import React, { useState } from "react";
import { info2 } from "../../data";
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared";
import * as R from 'ramda'
import data from '../../data.json'

import "./Table.css";

const keys = data.map(item => Object.keys(item)).map(item => item[0])
const items = data.map((item, i) => item[keys[i]])
const headers = Object.keys(items[0])

export const Table = () => {

  const [dataSort, setDataSort] = useState(items)
  const orderData = (e) => {
    console.log(e.target.innerText)
    const key = e.target.innerText
    setDataSort(R.sortBy(R.prop(key), dataSort))
  }

  return (
    <div style={{ padding: '30px' }}>

      <table className="table">
        <thead>
          <TableRow style={{ width: "100%" }}>
            {headers.map((header, i) => (
              <TableHeader key={i}>
                <Span
                  style={{ cursor: "pointer" }}
                  onClick={orderData}
                  className={`span-header ${header === 'id' ? "index" : ""}`}
                  label={header}
                />
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {dataSort.map((item, i) => (
            <TableRow key={i}>
              <TableData className="table-index">
                <Span
                  className="span-index"
                  style={{ textDecoration: "underline", cursor: "pointer", width: '90px' }}
                  label={item['id']}
                />
              </TableData>

              <TableData className="table-index">
                <Span className="span-info" label={item.ciudad} />
              </TableData>

              <TableData>
                <Span className="span-info" label={item['Tipologia']} />
              </TableData>

              <TableData>
                {item['Comunicación'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Comunicación'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Pasarela Clima'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Pasarela Clima'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Alumbrado'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Alumbrado'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Clima'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Clima'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Banderola'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Banderola'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Rotulos'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Rotulos'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item['Consumo Clima'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Consumo Clima'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label={item['Consumo Clima']} />
                )}
              </TableData>
              <TableData>
                {item['Confort'] !== '-' ? (
                  <Dot style={{ backgroundColor: `${item['Confort'] ? '#00CC87' : '#F25A5A'}` }} />
                ) : (
                  <Span className="span-no-data" label={item.Confort} />
                )}
              </TableData>
              <TableData>
                {item['Anomalías'] !== '-' ?
                  <Span className="span-info" label={item['Anomalías']} />
                  : <Span className="span-no-data" label={item['Anomalías']} />
                }
              </TableData>
              <TableData>
                {item['Impacto Anomalías'] !== '-' ?
                  <Span className="span-info" label={item['Impacto Anomalías']} />
                  : <Span className="span-no-data" label={item['Impacto Anomalías']} />
                }
              </TableData>
              <TableData>
                {item['Detected Score'] !== '-' ?
                  <Span
                    style={{ fontWeight: "bold" }}
                    className="span-info" label={item['Detected Score']} />
                  : <Span className="span-no-data" label={item['Detected Score']} />
                }
              </TableData>
              <TableData>
                {item['Ahorro Potencial'] !== '-' ?
                  <Span className="span-info" label={item['Ahorro Potencial']} />
                  : <Span className="span-no-data" label={item['Ahorro Potencial']} />
                }
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
