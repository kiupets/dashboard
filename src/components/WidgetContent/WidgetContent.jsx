import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { ToastContainer, WidgetLabels, Widget } from "../shared";
import { widgetData } from "../../utils/WidgetData";

export const WidgetContent = () => {
  const [locations, setLocations] = useState("");
  const [loading, setloading] = useState(true);
  const [storesComunication, setStoresComunication] = useState(0);
  const [storeIncidents, setStoreIncidents] = useState(0);
  const [storesWithoutIncidents, setStoresWithoutIncidents] = useState(0);
  useEffect(() => {
    api.getDataTable().then((res) => {
      setStoresComunication(res.uncommunicated_stores);
      setStoreIncidents(res.incidents);
      setStoresWithoutIncidents(res.perc_stores_without_incidents);
    });
  }, []);

  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => setLocations(total_locations))
      .then(setloading(false));
  }, []);


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
              ? storesComunication
              : widget.string === "Stores con incidencias"
              ? `%${storesWithoutIncidents}`
              : storeIncidents
          }
          {...widget}
        />
      )}
    </Widget>
  ));

  return <>{widgets}</>;
};
