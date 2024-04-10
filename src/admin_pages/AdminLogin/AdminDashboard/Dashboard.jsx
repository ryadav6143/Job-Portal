import React, { useState } from "react";
import "./AdminDashboard.css";
// import { LineChart } from "@mui/x-charts/LineChart";
import calanderlogo from "../.../../../../assets/logos/calendar-white.png";
import Applylogo from "../.../../../../assets/logos/apply-white.png";
import Userlogo from "../.../../../../assets/logos/user-white.png";
import messagelogo from "../.../../../../assets/logos/email-white.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function Dashboard() {
  const data = [
    { week: "Week 1", interviews: 10, candidates: 20 },
    { week: "Week 2", interviews: 15, candidates: 18 },
    { week: "Week 3", interviews: 20, candidates: 25 },
    { week: "Week 4", interviews: 18, candidates: 30 },
  ];

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
      <div className="graphChart">
        <h2>Interviews and Candidates</h2>
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="interviews"
            name="First Interviews"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="candidates"
            name="Candidates Applied"
            stroke="#82ca9d"
          />
        </LineChart>
      </div>
    </>
  );
}

export default Dashboard;
