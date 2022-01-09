import React, { useState, useEffect } from "react";
import { ToastContainer, WidgetLabels } from "../shared";
import { Widget } from "../";
import { widgetData } from "./WidgetData";
import { api } from "../../api/api";
import data from '../../data.json'

export const WidgetContent = () => {
  const [locations, setLocations] = useState("");
  const [loading, setloading] = useState(true);
  const [storeCom, setStoreCom] = useState(43);
  const [storeInci, setStoreInci] = useState(32);
  const [incidencias, setIncidencias] = useState(0);

  const stSinComTotal = data.map(item => item['Comunicación'] === 'red' ? 1 : 0).reduce((a, b) => a + b, 0);


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
        <ToastContainer label="prueba" />
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
