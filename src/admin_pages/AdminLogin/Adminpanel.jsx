import React, { useState } from "react";
import Logout from "./Logout/Logout";
import Login from "./Login/Login";

import "./Adminpanel.css";

function Adminpanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
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
