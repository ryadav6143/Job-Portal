import React, { useState, useEffect } from "react";
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
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(document.querySelector(".graphChart").clientWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    { week: "Week 1", interviews: 10, candidates: 20, visitors: 15 },
    { week: "Week 2", interviews: 5, candidates: 6, visitors: 25 },
    { week: "Week 3", interviews: 5, candidates: 10, visitors: 5 },
    { week: "Week 4", interviews: 50, candidates: 1, visitors: 10 },
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

      <div
        className="graphChart"
        style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}
      >
        <h2>Interviews and Candidates</h2>
        <LineChart width={containerWidth} height={350} data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <CartesianGrid strokeWidth={4} stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="interviews"
            name="First Interviews"
            stroke="rgba(0, 0, 255, 0.8)"
            strokeWidth={4}
            filter="url(#glow)"
          />

          <Line
            type="monotone"
            dataKey="candidates"
            name="Candidates Applied"
            stroke="rgba(128, 0, 0, 0.8)"
            strokeWidth={4}
            filter="url(#glow)"
          />

          <Line
            type="monotone"
            dataKey="visitors"
            name="Total Visitors"
            stroke="green"
            strokeWidth={4}
            filter="url(#glow)"
          />

          <defs>
            <filter
              id="glow"
              x="-5000%"
              y="-5000%"
              width="10000%"
              height="10000%"
            >
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
