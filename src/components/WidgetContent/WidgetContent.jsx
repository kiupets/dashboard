import React, { useState, useEffect } from "react";
import { ToastContainer, WidgetLabels } from "../shared";
import { Widget } from "../";
import { widgetData } from "./WidgetData";
import { api } from "../../api/api";
import data from '../../data.json'


const keys = data.map(item => Object.keys(item)).map(item => item[0])
const items = data.map((item, i) => item[keys[i]])

export const WidgetContent = () => {
  const [locations, setLocations] = useState("");
  const [loading, setloading] = useState(true);
  const [storeCom, setStoreCom] = useState(43);
  const [storeInci, setStoreInci] = useState(32);
  const [incidencias, setIncidencias] = useState(0);

  const stSinComTotal = items.map(item => item['Comunicación'] ? 0 : 1).reduce((a, b) => a + b, 0);


  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => setLocations(total_locations)).then(setloading(false))
  }, []);

  useEffect(() => {
    setStoreCom(stSinComTotal)
  }, [storeCom]);

  const widgets = widgetData.map((widget) => (
    <Widget key={widget.number}>
      {widget.toast ? (
        <ToastContainer />
      ) : (
        <WidgetLabels
          loading={loading}
          totalLoc={
            widget.string === "Localizaciones"
              ? locations
              : widget.string === "Stores sin comunicación"
                ? storeCom
                : widget.string === "Stores con incidencias"
                  ? storeInci
                  : incidencias
          }
          {...widget}
        />
      )}
    </Widget>
  ));

  return <>{widgets}</>;
};
