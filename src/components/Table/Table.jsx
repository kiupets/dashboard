import React from "react";
import { Span, TableRow, Dot, TableData } from "../shared/";
import { colorScale } from "../../utils/colorScale";
import "./Table.css";

export const Table = ({ data }) => {

  return (
    <>
      {data.map((item, i) => (
        <TableRow key={i}>
          <TableData >
            <Span className="span-index" style={{padingLeft:"16px"}} label={item["ID"]} />
          </TableData>

          <TableData className="">
            <Span className="span-info" label={item.Ciudad} />
          </TableData>

          <TableData>
            <Span className="span-info" label={item.Tipologia} />
          </TableData>

          <TableData>
            {item.Comunicación !== "-" ? (
              <Dot
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
                className="dot-container"
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
              <Span
                className="span-info"
                label={`${item.Impacto_Anomalías}€`}
              />
            ) : (
              <Span
                className="span-no-data"
                label={item.Impacto_Anomalías}
              />
            )}
          </TableData>

          <TableData
            style={{
              backgroundColor: colorScale(item.Detected_Score),
              border: "1px solid white",
            }}
          >
            {item.Detected_Score !== "-" ? (
              <Span className="span-info" label={item.Detected_Score} />
            ) : (
              <Span className="span-no-data" label={item.Detected_Score} />
            )}
          </TableData>

          <TableData>
            {item.Ahorro_Potencial !== "-" ? (
              <Span
                className="span-info"
                label={`${item.Ahorro_Potencial}€`}
              />
            ) : (
              <Span
                className="span-no-data"
                label={`${item.Ahorro_Potencial}`}
              />
            )}
          </TableData>
        </TableRow>
      ))}

    </>
  );
};
