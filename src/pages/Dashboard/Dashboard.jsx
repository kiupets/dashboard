import React from "react";
import Central from "../Central/Central";
import Inferior from "../Inferior/Inferior";
import Top from "../Top/Top";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Top />
      <Central />
      <Inferior />
    </div>
  );
};

export default Dashboard;
