import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "./api/api";
import "./App.css";
import { Bottom } from "./pages/bottom/Bottom";
import { Top } from "./pages/Top/Top";
import { SET_TABLE, SET_LOCATIONS } from "./redux/tableSlice/TableSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.getDataTable().then((res) => dispatch(SET_TABLE(res)));
  }, []);

  useEffect(() => {
    api
      .getLocations()
      .then(({ total_locations }) => dispatch(SET_LOCATIONS(total_locations)));
  }, []);

  return (
    <div className="App">
      <Top />
      <div className="line"> </div>
      <Bottom />
    </div>
  );
}

export default App;
