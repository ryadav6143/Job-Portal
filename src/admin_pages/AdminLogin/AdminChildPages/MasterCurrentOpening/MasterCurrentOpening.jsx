import React, { useState, useEffect } from "react";
import { Outlet, Link, } from "react-router-dom";
import "./MasterCurrentOpening.css";


// import AddOpenings from "./AddOpeningForm/AddOpenings";
// import MasterTable from "./MasterCurrentOpeningChild/MasterTable";

function MasterCurrentOpening() {
 
  const [selectedComponent, setSelectedComponent] = useState();
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  

  return (
    <>
      {/* {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )} */}

      {isButtonVisible && (
        <div className="new-opening-btn">
          <button>
            {/* <a onClick={() => showComponent("Component1")}>Add New Openings</a> */}
            <Link className="new-opening-btn-link" to="/admin-dashboard/current-openings/add-openings">
              {" "}
              Add New Openings
            </Link>
          </button>
        </div>
      )}
      <div className="center-container">
      <Outlet />  

      </div>
    </>
  );
}

export default MasterCurrentOpening;
