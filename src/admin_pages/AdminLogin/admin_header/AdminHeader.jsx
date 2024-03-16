import React from "react";
import "./adminHeader.css";
import medilogo from "../../../assets/logos/medi-logo.png";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import { useNavigate } from "react-router-dom";
import logout from "../../../assets/logos/Logout.png"
function AdminHeader() {
    const navigate = useNavigate()
    const handleLogout=()=>{
        sessionStorage.removeItem('Token')
        sessionStorage.removeItem("isLoggedIn");
        navigate('/admin-login')
    }

  return (
    <>
      <div className="admin-header fixed-top   " >
        <div>
          <img className="admin-logo" src={medilogo} alt="" />
        </div>
        <div id="logout-btn">
          <button
            onClick={() => handleLogout()}
          >
          <img src={logout}/>
          </button>
        </div>
      </div>
{/* 
      <div className="show-dashboard">
        <AdminDashboard></AdminDashboard>
      </div> */}
    </>
  );
}

export default AdminHeader;
