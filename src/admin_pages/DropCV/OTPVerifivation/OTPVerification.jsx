import React, { useState } from "react";
import "./OTPVerification.css";
import { useNavigate } from "react-router-dom";
import apiService from "../../../Services/ApiServices";
import Notification from "../../../Notification/Notification";

function OTPVerification({ transferAllData, otpData }) {
  console.log("AllData", transferAllData);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false); // State to manage Notification visibility
  const [notificationMessage, setNotificationMessage] = useState(""); // State to manage Notification message
  const [notificationSeverity, setNotificationSeverity] = useState("info"); // State to manage Notification severity


  const { contact_1 } = otpData;
  let digit = contact_1 ? contact_1.slice(-2) : "";
  const verifyOtp = async () => {
    try {
      console.log("Contact 1:", otp, otpData);

      const response = await apiService.verifyEmailOTP({
        ...otpData,
        // inputOTP: parseInt(otp),

        inputOTP: otp,
      });

      if (response && response.data) {
        // setIsOtpVerified(response.data);
        // isOtpVerified = response.data;
        // console.log("otp", response.data, isOtpVerified);

        // // alert(`OTP Verified !,${isOtpVerified}`);
        // setNotificationMessage(`OTP Verified! ${isOtpVerified}`);
        // setNotificationSeverity("success");
        // setNotificationOpen(true);
        setIsOtpVerified(response.data);
        console.log("otp", response.data, isOtpVerified);
  
        setNotificationMessage(`OTP Verified! ${response.data}`);
        setNotificationSeverity("success");
        setNotificationOpen(true);
      }
      // else {
      //   setVerificationError("Invalid OTP. Please try again.");
      //   setIsOtpVerified(false);
      //   alert("Incorrect OTP. Please try again.");
      // }
      else {
        // If response is either falsy or response.data is falsy, it means OTP verification failed
        setVerificationError("Invalid OTP. Please try again.");
        setIsOtpVerified(false);
  
        setNotificationMessage("Incorrect OTP. Please try again.");
        setNotificationSeverity("error");
        setNotificationOpen(true);
      }
    } catch (error) {
      console.error("Error during OTP verification", error);
      setVerificationError("An error occurred during OTP verification.");
      // setIsOtpVerified(false);
      // alert("An error occurred during OTP verification. Please try again.");
      setNotificationMessage("An error occurred during OTP verification. Please try again.");
      setNotificationSeverity("error");
      setNotificationOpen(true);
    
    }
  };

  const resendOTP = async () => {
    try {
      const response = await apiService.generateOTP({
        ...otpData,
      });

      console.log("API Response:", response);
      // alert("OTP Resent Successfully!");
      setNotificationMessage("OTP Resent Successfully!");
      setNotificationSeverity("success");
      setNotificationOpen(true);
    } catch (error) {
      console.error("Error during OTP generation", error);
      // alert("Failed to resend OTP. Please try again.");
      setNotificationMessage("Failed to resend OTP. Please try again.");
      setNotificationSeverity("error");
      setNotificationOpen(true);
    }
  };


  const submitsuccess = async () => {
    console.log("at-submit", isOtpVerified);

    if (transferAllData.UserDetails) {
      if (isOtpVerified) {
        try {
          const response = await apiService.submitApplyNowData(
            transferAllData.UserDetails
          );

          if (response) {
            console.log("Form data and file successfully posted to the API");
          } else {
            console.error("Failed to post form data and file to the API");
          }
          navigate("/submit");
        } catch (error) {
          console.error("Failed to post form data and file to the API", error);
        }
      } else {
        // alert("Please verify OTP first!");
        setNotificationMessage("Please verify OTP first!");
        setNotificationSeverity("warning");
        setNotificationOpen(true);
      }
    } else {
      if (isOtpVerified) {
        try {
          const response = await apiService.submitCandidateData(
            transferAllData
          );

          if (response) {
            console.log("Form data and file successfully posted to the API");
          } else {
            console.error("Failed to post form data and file to the API");
          }
          navigate("/submit");
        } catch (error) {
          console.error("Failed to post form data and file to the API", error);
        }
      } else {
        // alert("Please verify OTP first!");
        setNotificationMessage("Please verify OTP first!");
        setNotificationSeverity("warning");
        setNotificationOpen(true);
      }
    }
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };
  return (
    <>
      <div className="vrf-main-container">
        <div className="vrf-page">
          <p className="vrf-heading">Verification</p>
          <div className="sub-vrf-page">
            <p className="vrf-subheading">OTP Verification</p>
            <p style={{ color: "rgba(0, 0, 0, 0.666)", marginTop: "-17px" }}>
              {`Enter OTP sent to xxxxxxxx${digit}`}
            </p>
            <div className="otp-form">
              <form action="" method="post">
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
              </form>
            </div>
            <button onClick={verifyOtp} type="button" id="verify-otp-btn">
              Verify OTP
            </button>
            &nbsp;
            <button onClick={resendOTP} type="button" id="resend-btn">
              Resend OTP
            </button>
          </div>
        </div>
        <button onClick={submitsuccess} type="submit" id="otp-submit-btn">
          Submit
        </button>
      </div>
      <Notification
        open={notificationOpen}
        handleClose={handleCloseNotification}
        alertMessage={notificationMessage}
        alertSeverity={notificationSeverity}
      />
    </>
  );
}

export default OTPVerification;
