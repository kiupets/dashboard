import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "./api/api";
import "./App.css";
import { DashboardContainer } from "./components/GridContainer/DashboardContainer";
import {
  SET_TABLE,
  SET_LOCATIONS,
  SET_TAGS,
  SET_TABLE_EMPTY,
} from "./redux/tableSlice/TableSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .getLocationTags()
      .then(({ location_tags }) => dispatch(SET_TAGS(location_tags)))
      .catch(() => SET_TAGS([]));
  }, [dispatch]);

  useEffect(() => {
    api.getDataTable().then((res) => {
      console.log(res);
      if (res?.table.length !== 0) {
        dispatch(SET_TABLE(res));
      } else {
        dispatch(SET_TABLE_EMPTY());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => dispatch(SET_LOCATIONS(total_locations)));
  }, [dispatch]);

  return (
    <div className="App">
      <DashboardContainer />
    </div>
  );
}

export default App;
