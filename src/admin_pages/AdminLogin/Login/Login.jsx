import "./Login.css";
import React, { useState, useEffect } from "react";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logos/logo.png";
import Notification from "../../../Notification/Notification";
import axios from "axios";
// import { BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
import { useNavigate } from "react-router-dom";

function Login(handleLogin) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorNotification, setErrorNotification] = useState({
    open: false,
  });

  const navigate = useNavigate();

  const removeToken = (() => {
    sessionStorage.removeItem("Token");
    localStorage.removeItem("Token");
  })();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${ADMIN_BASE_URL}/adminLogin/login_admin`,
        {
          login_field: username,
          password: password,
        }
      );
      // console.log(response);
      if (response && response.data.token) {
        sessionStorage.setItem("Token", JSON.stringify(response.data));
        // handleLogin();
        navigate(`/admin-dashboard`);
        setErrorNotification({
          open: true,
          message: "Login Successful",
        });
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorNotification({
        open: true,
        message: error.response.data.message || "Invalid credentials",
      });
      setErrorMessage("invalid username and password");
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
      <Notification
        open={errorNotification.open}
        handleClose={handleCloseNotification}
        alertMessage={errorNotification.message}
        alertSeverity="error"
      />
      <div className="login-container">
        <div className="logo-section">
          <a href="/">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="login-content"> ADMIN PANEL</p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="login-form"
          autoComplete="on"
        >
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
          </div>
          {/* <div>
            <a href="/admin_register" className="admin-reg-link">
              Register Admin?
            </a>
          </div> */}
          <div className="btn-login">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
        <div className="design-content">
          <p>Design & Developed By CorusView</p>
        </div>
      </div>
    </>
  );
}

export default Login;
