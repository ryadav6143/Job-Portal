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
    { month: 'January', interviews: 10, candidates: 20 , visitors:15},
    { month: 'February', interviews: 5, candidates: 6 , visitors:25},
    { month: 'March', interviews: 5, candidates: 10 , visitors:5},
    { month: 'April', interviews: 50, candidates: 12 , visitors:10},
    { month: 'May', interviews: 70, candidates: 8 , visitors:12},
    { month: 'June', interviews: 40, candidates:  9 , visitors:8},
    { month: 'July', interviews: 20, candidates: 25 , visitors:36},
    { month: 'August', interviews: 5, candidates: 15 , visitors:16},
    { month: 'September', interviews: 54, candidates: 18 , visitors:46},
    { month: 'October', interviews: 4, candidates: 9 , visitors:6},
    { month: 'November', interviews: 0, candidates: 85 , visitors:46},
    { month: 'December', interviews: 40, candidates: 5 , visitors:6},
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
        <LineChart width={1200} height={350} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeWidth={4} stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="interviews" name="First Interviews"
            stroke="rgba(0, 0, 255, 0.8)" strokeWidth={4}
            filter="url(#glow)" />

          <Line type="monotone" dataKey="candidates"
            name="Candidates Applied" stroke="rgba(128, 0, 0, 0.8)"
            strokeWidth={4}
            filter="url(#glow)" />

          <Line type="monotone" dataKey="visitors"
            name="Total Visitors" stroke="green"
            strokeWidth={4}
            filter="url(#glow)" />


          <defs>
            <filter id="glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </LineChart>
      </div>

    </>
  );
}

export default Dashboard;
