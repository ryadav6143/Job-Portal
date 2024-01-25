import React, { useState } from "react";
import "./OTPVerification.css";
import { useNavigate } from "react-router-dom";
import apiService from "../../../Services/ApiServices";

function OTPVerification({ transferAllData, otpData }) {
  console.log("AllData", transferAllData);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  let isOtpVerified = false

  const { contact_1 } = otpData;
  let digit = contact_1 ? contact_1.slice(-2) : "";
  const verifyOtp = async () => {
    try {
      console.log("Contact 1:", otp, otpData);
  
      const response = await apiService.verifyContactOTP({...otpData,input_otp: parseInt(otp),});
  
      if (response) {
        // setIsOtpVerified(response.data);
        isOtpVerified=response.data
        console.log("otp",response.data,isOtpVerified )
        
        alert(`OTP Verified !,${isOtpVerified}`);
      } 
      // else {
      //   setVerificationError("Invalid OTP. Please try again.");
      //   setIsOtpVerified(false);
      //   alert("Incorrect OTP. Please try again.");
      // }
    } catch (error) {
      console.error("Error during OTP verification", error);
      setVerificationError("An error occurred during OTP verification.");
      // setIsOtpVerified(false);
      alert("An error occurred during OTP verification. Please try again.");
    }
  };
  
  const resendOTP = async () => {
    try {
      const response = await apiService.generateOTP({
        ...otpData,

      });

      console.log("API Response:", response);
      alert("OTP Resent Successfully!");
    } catch (error) {
      console.error("Error during OTP generation", error);
      alert("Failed to resend OTP. Please try again.");
    }
  };
  const submitsuccess = async () => {
    console.log("at-submit",isOtpVerified)
    console.log("at-check",transferAllData.UserDetails)

    if(transferAllData.UserDetails){
      if (isOtpVerified) {
        try {
          const response = await apiService.submitApplyNowData(transferAllData.UserDetails);
  
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
        alert("Please verify OTP first!");
      }
    }
   
else{
  if (isOtpVerified) {
    try {
      const response = await apiService.submitCandidateData(transferAllData);

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
    alert("Please verify OTP first!");
  }

}

    
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
              </button>&nbsp;
            <button onClick={resendOTP} type="button" id="resend-btn">
              Resend OTP
            </button>
          </div>
        </div>
        <button onClick={submitsuccess} type="submit" id="otp-submit-btn" >
          Submit
        </button>
      </div>
    </>
  );
}

export default OTPVerification;
