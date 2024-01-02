import React, { useState } from "react";
import "./UserHeader.css";
import logo from "../../../../assets/logos/medi-logo.png";
import logout from "../../../../assets/logos/Logout.png";
import reset from "../../../../assets/logos/Reset.png";
function UserHeader({ children }) {
  return (
    <>
      <div className="user-header">
        <div className="logo-coloured">
          <img src={logo} className="user-logo" />
        </div>
        <div className="logs">
          <img src={reset} className="log-res" />
          <img src={logout} className="log-res" />
        </div>
      </div>
    </>
  );
}

export default UserHeader;
