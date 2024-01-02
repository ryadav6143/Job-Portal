import React from "react";
import "./OTPVerification.css";
import { useNavigate } from "react-router-dom";

function OTPVerification() {
  const navigate = useNavigate();
  const submitsuccess = () => {
    navigate("/success");
  };
  return (
    <>
      <div className="vrf-main-container">
        <div className="vrf-page">
          <p className="vrf-heading">Verification</p>
          <div className="sub-vrf-page">
            <p className="vrf-subheading">OTP Verification</p>
            <p style={{ color: "rgba(0, 0, 0, 0.666)", marginTop: "-17px" }}>
              Enter OTP sent to xxxxxxxx90
            </p>
            <div className="otp-form">
              <form action="" method="post">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  required
                />
              </form>
            </div>
            <button type="submit" id="resend-btn">
              Resend OTP
            </button>
          </div>
        </div>
        <button onClick={submitsuccess} type="submit" id="otp-submit-btn">
          Submit
        </button>
      </div>
    </>
  );
}

export default OTPVerification;
