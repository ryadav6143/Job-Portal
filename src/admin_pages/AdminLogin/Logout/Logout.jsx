import React from "react";
import "./Logout.css";
import CurrentOpening from "../../CurrentOpening/CurrentOpening";

function Logout({ handleLogout }) {
  return (
    <>
      <div id="logout-btn">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div>
      <CurrentOpening></CurrentOpening>
      </div>
    </>
  );
}

export default Logout;
