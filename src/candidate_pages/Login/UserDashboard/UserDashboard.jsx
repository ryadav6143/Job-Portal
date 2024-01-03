import React from "react";
import UserHeader from "./UserHeader/UserHeader"
import "./UserDashboard.css";
import Footers from "../../../components/Footer/Footers";

function UserDashboard() {
  return (
    <>
      <UserHeader></UserHeader>
      <div>
        {/* <h1>User Dashboard</h1> */}
      </div>
      <Footers></Footers>
    </>
  );
}

export default UserDashboard;
