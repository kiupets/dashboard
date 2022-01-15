import React, { useEffect, useState } from "react";
import { Dots } from "@dexma/ui-components";
import { IncidentsRow } from "../shared/IncidentsRow/IncidentsRow";
import { api } from "../../api/api";

export const BottomTable = () => {
  const incidentsArray = [
    "Comunicacion",
    "PasarelaClima",
    "Alumbrado",
    "Clima",
    "Banderola",
    "Rotulos",
    "ConsumoClima",
    "Confort",
  ];
  const [tableInfo, setTableInfo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getDataTable().then((res) => setTableInfo(res));
  }, []);

  useEffect(() => {
    tableInfo.length !== 0 &&
   setData(sortInfo(incidentsArray, tableInfo))
  }, [tableInfo]);

  
  const sortInfo = (array1, array2) => {
    let falseCount, trueCount;
    const sortData = {};
    let percent = 0;
    array1.map((incident) => {
      falseCount = 0;
      trueCount = 0;
      array2.map((info) => {
        if (info[incident] === true) {
          trueCount += 1;
        } else if (info[incident] === false) {
          falseCount += 1;
        }
      });
      percent =
        falseCount === 0 && trueCount === 0
          ? 0
          : (falseCount / (falseCount + trueCount)).toFixed(1);
      sortData[incident] = {
        false: falseCount,
        true: trueCount,
        percent: percent,
      };
    });
    return sortData;
  };


  return (
    <>
      <IncidentsRow
        className="total-incidencias"
        comunication={
          data.Comunicacion ? data.Comunicacion : <Dots steps={3} size={2} />
        }
        pasarelaClima={
          data.PasarelaClima ? data.PasarelaClima : <Dots steps={3} size={2} />
        }
        alumbrado={
          data.Alumbrado ? data.Alumbrado : <Dots steps={3} size={2} />
        }
        clima={data.Clima ? data.Clima : <Dots steps={3} size={2} />}
        banderola={
          data.Banderola ? data.Banderola : <Dots steps={3} size={2} />
        }
        rotulo={data.Rotulos ? data.Rotulos : <Dots steps={3} size={2} />}
        consumoClima={
          data.ConsumoClima ? data.ConsumoClima : <Dots steps={3} size={2} />
        }
        confort={data.Confort ? data.Confort : <Dots steps={3} size={2} />}
      />
    </>
  );
};
