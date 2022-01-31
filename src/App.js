import React, { useState, useEffect } from "react";
import { api } from "./api/api";
import "./App.css";
import { TableContext } from "./context/TableContext";
import { Bottom } from "./pages/bottom/Bottom";
import { Top } from "./pages/Top/Top";

function App() {
  const [data, setData] = useState({
    incidents: null,
    uncommunicated_stores: null,
    perc_stores_without_incidents: null,
    table: [
      {
        ID: "-",
        Ciudad: "-",
        Tipologia: "-",
        Comunicacion: "",
        Pasarela_Clima: "",
        Alumbrado: "",
        Clima: "",
        Banderola: "",
        Rotulo: "",
        Consumo_Clima: "",
        Confort: "",
      },
    ],
  });
  useEffect(() => {
    api.getDataTable().then((res) => setData(res));
  }, []);
  const tableInfo = data;

  return (
    <TableContext.Provider value={tableInfo}>
      <div className="App">
        <Top data={data} />
        <div className="line"> </div>
        <Bottom data={data} />
      </div>
    </TableContext.Provider>
  );
}

export default App;
