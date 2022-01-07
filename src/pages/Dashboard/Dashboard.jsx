import React from "react";
import Central from "../Central/Central";
import Top from "../Top/Top";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Top />
      <Central />
    </div>
  );
};

export default Dashboard;
