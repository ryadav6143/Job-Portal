import React from "react";
import "./UserLogout.css";

function UserLogout({ handleLogout }) {
  return (
    <>
      <div id="logout-btn">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div>{/* After Login Dashboard */}</div>
    </>
  );
}

export default UserLogout;
