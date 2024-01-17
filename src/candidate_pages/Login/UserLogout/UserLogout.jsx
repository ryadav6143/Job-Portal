import React from "react";
import "./UserLogout.css";
import medilogo from "../../../assets/logos/medi-logo.png";
import UserDashboard from "../UserDashboard/UserDashboard";
function UserLogout({handleLogout}) {
  return (
    <>
      <div className="admin-header">
        <div>
          <img className="admin-logo" src={medilogo} alt="" />
        </div>
        <div id="logout-btn">
          <button
            onClick={() => {
              handleLogout();
              localStorage.setItem("isLoggedIn", false);
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>

      <div className="show-dashboard">
        <UserDashboard></UserDashboard>
      </div>
    </>
  );
}

export default UserLogout;
