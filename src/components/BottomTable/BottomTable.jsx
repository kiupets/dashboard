import React, { useEffect, useState } from "react";
import { Dots } from "@dexma/ui-components";
import { IncidentsRow } from "../shared/IncidentsRow/IncidentsRow";
import { sortInfo } from "../../utils/sortInfo";
import './BottomTable.css'

export const BottomTable = ({ tableInfo }) => {
  const [data, setData] = useState([]);
  const [incidentsArray] = useState([
    "Comunicacion",
    "PasarelaClima",
    "Alumbrado",
    "Clima",
    "Banderola",
    "Rotulos",
    "ConsumoClima",
    "Confort",
  ]);

  useEffect(() => {
    tableInfo.length !== 0 && setData(sortInfo(incidentsArray, tableInfo));
  }, [tableInfo,incidentsArray]);

  return (
    <div className='bottom-table'>
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
    </div>
  );
};
