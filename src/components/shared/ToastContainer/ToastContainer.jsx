import React, { useState, useEffect } from "react";
import { Dots } from "@dexma/ui-components";
import { Toast, Span } from "../";
import { DropDownTags } from "../DropDownTags/DropDownTags";

import "./ToastContainer.css";
import { api } from "../../../api/api";

export const ToastContainer = () => {
  const [toasts, setToast] = useState([]);

  useEffect(() => {
    api.getLocationTags().then(({ location_tags }) => setToast(location_tags));
  }, []);
  const [toggle, setToggle] = useState(false);
  const widgetLabels = toasts
    .slice(0, 5)
    .map((toast) => <Toast key={toast.id} label={toast.label} />);
  const dropdownLabels = toasts.slice(5);

  console.log(widgetLabels);
  const handleToggle = (e) => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      e.target.classList.contains("dots") ||
      e.target.classList.contains("StyledDots__StyledDot-hRONXn gFhRXc")
        ? setToggle(!toggle)
        : setToggle(false);
    });
  }, [toggle]);

  return (
    <div className="toast-widget">
      <div className="toast-container">
        {widgetLabels.length > 0 && widgetLabels}
        {widgetLabels.length > 5 && (
          <div onClick={handleToggle}>
            <div className="dots">
              <Dots steps={3} size={2} />
              {toggle ? <DropDownTags tags={dropdownLabels} /> : null}
            </div>
          </div>
        )}{" "}
      </div>

      {widgetLabels.length > 0 ? (
        <Span label="Tags seleccionadas" className="toast-span" />
      ) : (
        <Span  label="Tags no seleccionadas" className="toast-span" />
      )}
    </div>
  );
};
