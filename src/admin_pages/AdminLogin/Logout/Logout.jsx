import React from "react";
import "./Logout.css";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

function Logout({ handleLogout }) {
  return (
    <>
      <div id="logout-btn">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div>
     <AdminDashboard></AdminDashboard>
      </div>
    </>
  );
}

export default Logout;
