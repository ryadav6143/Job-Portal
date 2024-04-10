import React, { useState } from "react";
import "./CandidateLogin.css";
import { useNavigate } from "react-router-dom";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logos/logo.png";
import candidatesService from "../../candidateService";
import Notification from "../../../Notification/Notification";

function CandidateLogin({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorNotification, setErrorNotification] = useState({
    open: false,
  });

  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await candidatesService.loginCandidate({
        login_field: username,
        password: password,
      });
      if (response && response.data && response.data.token) {
        navigate(`/candidate-dashboard/personal-details`);
        sessionStorage.setItem("Token", JSON.stringify(response.data));
        setErrorNotification({
          open: true,
          message: "Login Successful",
        });
        candidatesService.setAccessToken(response.data);
      } else {
        // If response does not contain token (invalid credentials)
        setErrorMessage("Invalid credentials");
        setErrorNotification({
          open: true,
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.status === 400) {
        // If status code is 400 (Bad Request), it indicates invalid credentials
        setErrorMessage(error.response.data.message || "Invalid credentials");
        setErrorNotification({
          open: true,
          message: error.response.data.message || "Invalid credentials",
        });
      } else {
        // If any other error occurs, display a generic error message
        setErrorMessage("An error occurred during login");
        setErrorNotification({
          open: true,
          message: "Invalid credentials",
        });
      }
    }
  };
  
  


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseNotification = () => {
    setErrorNotification({ ...errorNotification, open: false });
  };

  return (
    <>
      <div className="login-container">
        <div className="logo-section">
          <a href="/">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="login-content">USER LOGIN PANEL</p>
        </div>

        <form onSubmit={handleFormSubmit} className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="password-input"
            />

            <span className="password-toggle" onClick={handleTogglePassword}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
            <a className="forgot-pass" href="/forgetpassword">
              Forgotten Password?
            </a>
          </div>

          <div className="btn-login">
            <button type="submit" className="login-button">
              Login
            </button>
            <Notification
              open={errorNotification.open}
              handleClose={handleCloseNotification}
              alertMessage={errorNotification.message}
              alertSeverity="error"
            />
          </div>
        </form>
        <div className="design-content">
          <p>Design & Developed By Corus View</p>
        </div>
      </div>
    </>
  );
}

export default CandidateLogin;
