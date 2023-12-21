import React from "react";
import logo from "../../assets/logos/medi-logo.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="ribbon-top">
        <marquee className="marquee" behavior="scroll" direction="left">
          "Admission Open 2024-2025"
        </marquee>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginTop: "-16px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="medi-logo" alt="medi-logo" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/current-opening"
                  className="nav-link active"
                  aria-current="page"
                >
                  Current Opening
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Job Profiles
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ marginTop: "31px", marginLeft: "29px" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Academic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Administrative
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Research{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Technical
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/interview-schedule" className="nav-link">
                  Interview Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq-section" className="nav-link">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/drop-cv" className="nav-link">
                  Drop CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
