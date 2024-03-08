import React from "react";
import logo from "../../assets/logos/medi-logo.png";
import user from "../../assets/logos/user.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let rbndata = '"Admission Open 2024-2025"';
  return (
    <>
      <div className="ribbon-top">
        <marquee className="marquee" behavior="scroll" direction="left">
          {rbndata}
        </marquee>
      </div>
      <div className="my-header">
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
              style={{ paddingLeft: "6px", paddingRight: "6px" }}
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
                  <Link
                    // to="/job-profile"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                    Job Profiles
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{ marginLeft: "25px" }}
                  >
                    <li>
                      <Link to="/academics-jobs" className="dropdown-item">
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link to="/administrative-jobs" className="dropdown-item">
                        Administrative
                      </Link>
                    </li>
                    <li>
                      <Link to="/research-jobs" className="dropdown-item">
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link to="/technical-jobs" className="dropdown-item">
                        Technical
                      </Link>
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
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/candidate-login" className="nav-link user-link">
                    <img src={user} id="userlogo" alt="medi-logo" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
