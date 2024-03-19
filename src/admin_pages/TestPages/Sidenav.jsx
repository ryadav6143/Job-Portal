import React, { useState } from "react";
import "./Sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CandidateHeader from "../../candidate_pages/CandidateLogin/CandidateHeader/CandidateHeader";

import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
const Sidenav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <CandidateHeader></CandidateHeader>
      <div id="wrapper" className={isToggled ? "toggled" : ""}>
        <aside id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="active">
              <Link to="/current-opening">
                <i className="fa fa-home side-icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                Home
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-plug side-icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                Plugins
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user side-icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                Users
              </a>
            </li>
          </ul>
        </aside>

        <div id="navbar-wrapper">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a
                  href="#"
                  className="navbar-brand"
                  id="sidebar-toggle"
                  onClick={handleToggle}
                >
                  <i className="fa fa-bars">=</i>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <section id="content-wrapper">
        <Outlet />
        </section>
      </div>
   
    </>
  );
};

export default Sidenav;
