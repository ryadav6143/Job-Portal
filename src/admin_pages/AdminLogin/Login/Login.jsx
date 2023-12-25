import "./Login.css";
import React, { useState } from "react";
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../../assets/logos/logo.png"


function Login({ handleLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      handleLogin();
    } else {
      alert("Invalid credentials");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  // Declare handleTogglePassword function
  const handleTogglePassword = () => {
    // Update the state to toggle showPassword
    setShowPassword(!showPassword);
  };
  return (
    <>
    <div className="login-container">
      <div className="logo-section">
      <img className="logo-img" src={logo} />
      </div>
      <div style={{textAlign:"center"}}>
      <p className="login-content"> ADMIN PANEL</p>
      </div>
      
      
      <form onSubmit={handleFormSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name=""
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name=""
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
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
      </form>
      <div className="design-content">
        <p>Design & Developed By Corus View</p>
      </div>
    </div>
  </>
  )
}

export default Login