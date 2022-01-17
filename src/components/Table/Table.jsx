import React, { useState, useEffect } from "react";
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared/";
import { BottomTable } from "../BottomTable/BottomTable";
import * as R from "ramda";
import { colorScale } from '../../utils/colorScale';
import "./Table.css";

export const Table = ({ data }) => {

  const keysData = R.keys(data[0]);
  const headers = R.map(R.replace(/_/g, " "), keysData);
  const items = R.values(data);

  const [dataSort, setDataSort] = useState(items);

  const orderData = (e) => {
    const key = e.target.innerText;
    key === "Ciudad" || key === "Tipologia"
      ? setDataSort(R.sort(R.ascend(R.prop(key)), dataSort))
      : setDataSort(R.sort(R.descend(R.prop(key.replace(" ", "_"))), dataSort));
  };

  return (
    <div style={{ padding: "30px" }}>
      <table className="table">
        <thead>
          <TableRow style={{ width: "100%" }}>
            {headers?.map((header, i) => (
              <TableHeader key={i}>
                <Span
                  style={{ cursor: "pointer" }}
                  onClick={orderData}
                  className={`span-header ${header === "ID" ? "index" : ""}`}
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
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    width: "90px",
                  }}
                  label={item["ID"]}
                />
              </TableData>

              <TableData className="table-index">
                <Span className="span-info" label={item.Ciudad} />
              </TableData>

              <TableData>
                <Span className="span-info" label={item.Tipologia} />
              </TableData>

              <TableData>
                {item.Comunicación !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Comunicación ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item.Tipologia !== "Completa" ? (
                  <Span className="span-no-data" label="-" />
                ) : (
                  <Dot
                    style={{
                      backgroundColor: `${item.Pasarela_Clima ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                )}
              </TableData>
              <TableData>
                {item["Alumbrado"] !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Alumbrado ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item["Clima"] !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Clima ? "#00CC87" : "#F25A5A"}`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item.Banderola !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Banderola ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item.Rotulos !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Rotulos ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label="-" />
                )}
              </TableData>
              <TableData>
                {item.Consumo_Clima !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Consumo_Clima ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label={item.Consumo_Clima} />
                )}
              </TableData>
              <TableData>
                {item["Confort"] !== "-" ? (
                  <Dot
                    style={{
                      backgroundColor: `${item.Confort ? "#00CC87" : "#F25A5A"
                        }`,
                    }}
                  />
                ) : (
                  <Span className="span-no-data" label={item.Confort} />
                )}
              </TableData>
              <TableData>
                {item["Anomalías"] !== "-" ? (
                  <Span className="span-info" label={item.Anomalías} />
                ) : (
                  <Span className="span-no-data" label={item.Anomalías} />
                )}
              </TableData>
              <TableData>
                {item.Impacto_Anomalías !== "-" ? (
                  <Span className="span-info" label={`${item.Impacto_Anomalías}€`} />
                ) : (
                  <Span
                    className="span-no-data"
                    label={item.Impacto_Anomalías}
                  />
                )}
              </TableData>
              <TableData style={{ backgroundColor: colorScale(item.Detected_Score) }}>
                {item.Detected_Score !== "-" ? (
                  <Span className="span-info" label={item.Detected_Score} />
                ) : (
                  <Span
                    className="span-no-data"
                    label={item.Detected_Score}
                  />
                )}
              </TableData>
              <TableData>
                {item.Ahorro_Potencial !== "-" ? (
                  <Span className="span-info" label={`${item.Ahorro_Potencial}€`} />
                ) : (
                  <Span
                    className="span-no-data"
                    label={`${item.Ahorro_Potencial}`}
                  />
                )}
              </TableData>
            </TableRow>
          ))}
          {/* <BottomTable /> */}
        </tbody>
      </table>
    </div >
  );
};
