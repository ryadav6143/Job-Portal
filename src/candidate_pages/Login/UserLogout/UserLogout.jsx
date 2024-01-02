import React from "react";
import UserDashboard from "../UserDashboard/UserDashboard"
import "./UserLogout.css";

function UserLogout({ handleLogout }) {
  return (
    <>
      <div id="logout-btn">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div><UserDashboard></UserDashboard></div>
    </>
  );
}

export default UserLogout;
