import React, { useState } from "react";
import "./AdminDashboard.css";
// import { LineChart } from "@mui/x-charts/LineChart";
import calanderlogo from "../.../../../../assets/logos/calendar-white.png";
import Applylogo from "../.../../../../assets/logos/apply-white.png";
import Userlogo from "../.../../../../assets/logos/user-white.png";
import messagelogo from "../.../../../../assets/logos/email-white.png";
function Dashboard() {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="details">
          <div className="detail-card">
            <div className="info">
              <img src={calanderlogo} alt="" />
            </div>
            <div className="info">
              <p>Interviews</p>
              <p>86</p>
            </div>
          </div>
          <div className="detail-card">
            <div className="info">
              <img src={Applylogo} alt="" />
            </div>
            <div className="info">
              <p>Apply</p>
              <p>75</p>
            </div>
          </div>
          <div className="detail-card">
            <div className="info">
              <img src={Userlogo} alt="" />
            </div>
            <div className="info">
              <p>Profiles</p>
              <p>116</p>
            </div>
          </div>
          <div className="detail-card">
            <div className="info">
              <img src={messagelogo} alt="" />
            </div>
            <div className="info">
              <p>Visitors</p>
              <p>110</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
