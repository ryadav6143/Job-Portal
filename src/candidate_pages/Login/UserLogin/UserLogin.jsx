import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logos/medi-logo.png";

function UserLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
  };
  return (
    <>
      <div className="login-container">
        <div className="logo-section">
          <img className="logo-img" src={logo} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="login-content"> LOGIN TO PORTFOLIO</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="password-input"
            />
            <div>
              <a className="reset-pass" type="submit">
                Forget Password?
              </a>
            </div>
            <span className="password-toggle1" onClick={handleTogglePassword}>
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
  );
}

export default UserLogin;
