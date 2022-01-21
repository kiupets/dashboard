import React from "react";
import { Loading, Span } from "..";
import "./WidgetLabels.css";
export const WidgetLabels = ({
  totalLoc,
  number,
  string,
  icon,
  clase,
  loading,
}) => {
  return (
    <div className="widget-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="icon-number">
          <Span
            className={clase ? clase : ""}
            style={{ marginRight: "10px" }}
            label={icon ? icon : ""}
          />
          <Span
            className={clase ? clase : ""}
            style={{ fontSize: "72px" }}
            label={totalLoc}
          />
          <Span style={{ visibility: "hidden" }} label={icon} />
        </div>
      )}
      <Span
        className={clase ? clase : ""}
        style={{ fontSize: "16px" }}
        label={string}
      />
    </div>
  );
};
