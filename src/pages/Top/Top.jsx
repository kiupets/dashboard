import React, { useState, useEffect, useContext } from "react";
import { Widget } from "../../components/widget/Widget";
import { WidgetLabels } from "../../components/widgetLabels/WidgetLabels";
import { Dot } from "../../components/shared";
import { Dots } from "@dexma/ui-components";
import { api } from "../../api/api";
import "./top.css";
import { Context } from "../../context/tableContext";

export const Top = () => {
  const { state } = useContext(Context);
  const { data } = state
  const { incidents, perc_stores_without_incidents, uncommunicated_stores } = data

  const [locations, setLocations] = useState(null);
  const [storesComunication, setStoresComunication] = useState(null);
  const [storeIncidents, setStoreIncidents] = useState(null);
  const [storesWithoutIncidents, setStoresWithoutIncidents] = useState(null);

  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => setLocations(total_locations))
  }, []);

  useEffect(() => {

    setStoresComunication(uncommunicated_stores);
    setStoreIncidents(incidents);
    setStoresWithoutIncidents(perc_stores_without_incidents);

  }, [uncommunicated_stores, incidents, perc_stores_without_incidents]);

  return (
    <div className="top">
      <Widget>
        <div className="widget-left">
          {
            locations !== null || undefined ? <span className="widget-number">{locations}</span>
              :
              <Dots steps={3} size={6} />
          }
          <span className="widget-label">Localizaciones</span>
        </div>
      </Widget>
      <Widget>
        <WidgetLabels />
      </Widget>
      <Widget>
        <div className="store-with-dot">
          {
            storesComunication !== null || undefined
              ?
              <div className="top-label">
                <Dot style={{ backgroundColor: "#F25A5A", width: "16px", height: "16px", borderRadius: "50%" }} />
                <span className="widget-number">{storesComunication}</span>
              </div>
              :
              <Dots steps={3} size={6} />
          }
          <span className="widget-label">Store sin comunicación</span>
        </div>
      </Widget>
      <Widget>
        <div className="store-with-dot">
          {
            storeIncidents !== null || undefined ?
              <div className="top-label">
                <Dot style={{ backgroundColor: "#F25A5A", width: "16px", height: "16px", borderRadius: "50%" }} />
                <span className="widget-number">{storeIncidents}</span>
              </div>
              :
              <Dots steps={3} size={6} />
          }
          <span className="widget-label">Incidencias</span>
        </div>
      </Widget>
      <Widget>
        <div className="widget-left">
          {storesWithoutIncidents !== null || undefined ?
            <span className="widget-number">{`${storesWithoutIncidents}%`}</span>
            :
            <Dots steps={3} size={6} />
          }
          <span className="widget-label">Store con incidencias</span>
        </div>
      </Widget>
    </div>
  );
};