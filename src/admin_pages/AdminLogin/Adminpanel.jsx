import React, { useState, useEffect } from "react";
import Logout from "./Logout/Logout";
import Login from "./Login/Login";

import "./Adminpanel.css";

function Adminpanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check login status on component mount
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };
  return (
    <div className="admin-container1">
      <div className="admin-data">
        {!isLoggedIn ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <Logout handleLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default Adminpanel;
