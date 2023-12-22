import React from "react";
import "./OTPVerification.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OTPVerification() {
  return (
    <>
      <div className="vrf-main-container">
        <div className="vrf-page">
          <p className="vrf-heading">Verifivation</p>
          <div className="sub-vrf-page">
            <p className="vrf-subheading">OTP Verification</p>
            <p style={{ color: "rgba(0, 0, 0, 0.666)", marginTop: "-17px" }}>
              Enter OTP sent to xxxxxxxx90
            </p>
            <div className="otp-form">
              <form action="">
                <input type="text" placeholder="Enter OTP" />
              </form>
            </div>
            <button type="button" id="resend-btn">
              Resend OTP
            </button>
          </div>
        </div>
        <button type="button" id="otp-submit-btn">Submit</button>
      </div>
    </>
  );
}

export default OTPVerification;
