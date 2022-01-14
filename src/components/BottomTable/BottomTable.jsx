import React,{useEffect, useState} from "react";
import { IncidentsRow } from "../shared/IncidentsRow/IncidentsRow";

import { info3 } from "../../data";

export const BottomTable = () => {
  const incidentsArray = ["Comunicacion","PasarelaClima","Alumbrado","Clima","Banderola","Rotulos","ConsumoClima","Confort"];
  const [data, setData] = useState([]);

  useEffect(() => {
    let falseCount, trueCount;
    const data={};
    let percent =0;
    incidentsArray.map((incident) => {
      falseCount = 0;
      trueCount = 0;
      info3.map((info)=>{
        if(info[incident]==="true"){
          trueCount+=1;
        }else if(info[incident]==="false"){
          falseCount+=1;
        }
      })
      percent= (falseCount/(falseCount+trueCount)).toFixed(1);
      data[incident]={false:falseCount, true:trueCount, percent:percent};
    })
     setData(data);
  },[]);
  
  return (
    <>
      <IncidentsRow 
        className="total-incidencias"
        comunication={data.Comunicacion ? data.Comunicacion : "no data"}
        pasarelaClima={data.PasarelaClima ? data.PasarelaClima : "no data"}
        alumbrado={data.Alumbrado ? data.Alumbrado : "no data"}
        clima={data.Clima ? data.Clima : "no data"}
        banderola={data.Banderola ? data.Banderola : "no data"}
        rotulo={data.Rotulos ? data.Rotulos : "no data"}
        consumoClima={data.ConsumoClima ? data.ConsumoClima : "no data"}
        confort={data.Confort ? data.Confort : "no data"}
      />
    </>
  )
}