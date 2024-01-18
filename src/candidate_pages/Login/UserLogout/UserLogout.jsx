import React from "react";
import UserDashboard from "../UserDashboard/UserDashboard";
import "./UserLogout.css";
import medilogo from "../../../assets/logos/medi-logo.png";
import logout from "../../../assets/logos/Logout.png";
import reset from "../../../assets/logos/Reset.png";
import { useNavigate } from "react-router-dom";
function UserLogout({}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the stored username and password in localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("user");

    // Navigate to the login page
    navigate("/user-login",{replace:true});
  };
  const handleReset = () => {
    const form = document.getElementById("myForm");

    if (form) {
      form.reset();
    }
  };
  return (
    <>
      <div className="admin-header">
        <div>
          <img className="admin-logo" src={medilogo} alt="" />
        </div>
    
        <div className="logs">
          <button onClick={handleReset} type="reset">
            <img src={reset} className="log-res" />
          </button>
          <button onClick={handleLogout}>
            <img src={logout} className="log-res" />
          </button>
        </div>
      </div>

      <div><UserDashboard></UserDashboard></div>
    </>
  );
}

export default UserLogout;
