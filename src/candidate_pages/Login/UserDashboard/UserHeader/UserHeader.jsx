import React, { useState } from "react";
import "./UserHeader.css";
import logo from "../../../../assets/logos/medi-logo.png";
import logout from "../../../../assets/logos/Logout.png";
import reset from "../../../../assets/logos/Reset.png";
import EditPersonalDetails from "../EditProfileForm/EditPersonalDetails/EditPersonalDetails";
import pdicon from "../../../../assets/logos/pdicon.png";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCardClip,
  faBuildingColumns,
  faBriefcase,
  faSearch,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";




function UserHeader() {
  
  return (
    <>
     
        {/* ---------------header start------------ */}
        <div className="user-header">
          <div className="logo-coloured">
            <img src={logo} className="user-logo" />
          </div>
          <div className="logs">
            <button type="reset">
              <img src={reset} className="log-res" />
            </button>
            <img src={logout} className="log-res" />
          </div>
        </div>
        {/* ---------header end----------- */}

        <div className="row1">
          <div className="col-md-2">
            <div className="set-sidebar">
              <div>
                <nav>
                  <ul className="set-menu" style={{ listStyle: "none" }}>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faIdCardClip}
                      />
                      <a href="/editpersonaldetails">
                        &nbsp; Personal Details
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faBuildingColumns}
                      />
                      <a href="/editqualification">
                        &nbsp; Academic Professional Qualifications
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faBriefcase}
                      />
                      <a href="/editexperience">&nbsp; Experience</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faSearch}
                      />
                      <a href="/editresearch">&nbsp; Research Work</a>
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faUsers}
                      />
                      <a href="/editprogram">
                        &nbsp; Seminars/Short Term Courses/Summer Schools/Winter
                        Schools
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faFile}
                      />
                      <a href="/editreference">&nbsp; Reference/ Resume</a>
                    </li>
                    <li>
                      <a href="/current-opening">Current Openings</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <EditPersonalDetails></EditPersonalDetails>
          
          </div>
        </div>
     
    </>
  );
}
export default UserHeader;
