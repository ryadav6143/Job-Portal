import React from "react";
import "./Submitsuccess.css";

import logo from "../../../assets/logos/success.png";

function Submitsuccess() {
  
  return (
    <div className="success-main-container">
      <div className="success-page">
        <p className="success-heading">Verification</p>
        <div className="success-sub-container">
          <p className="success-subheading">Submit Successfully</p>
          <div className="success-logo"> 
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitsuccess;
