import React, { useState } from "react";
import "./CandidateLogin.css";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logos/logo.png";
import candidatesService from "../../candidateService";

function CandidateLogin({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await candidatesService.loginCandidate({
        login_field: username,
        password: password,
      });
      console.log("resposne", response);
      if (response.data.token) {
        handleLogin();
        
        localStorage.setItem("Token", JSON.stringify(response.data));

        // sessionStorage.setItem("Token", response.data);
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("invalid username and password");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-container">
        <div className="logo-section">
          <img className="logo-img" src={logo} alt="Logo" />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="login-content">USER LOGIN PANEL</p>
        </div>
        {/* 
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )} */}

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
          </div>

          <div className="btn-login">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <a href="/forgetpassword">Forgotten Password?</a>
        </form>
        <div className="design-content">
          <p>Design & Developed By Corus View</p>
        </div>
      </div>


      {/* <form onSubmit={handleFormSubmit} className="login-form">
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

<div>
  <a href="/forgetpassword">Forgotten Password</a>
</div>

          <div className="btn-login">

            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form> */}
      {/* <div className="design-content">
          <p>Design & Developed By Corus View</p>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default CandidateLogin;
