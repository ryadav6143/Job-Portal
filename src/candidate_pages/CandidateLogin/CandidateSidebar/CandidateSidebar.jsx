import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CandidateSidebar.css";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCardClip,
  faBuildingColumns,
  faBriefcase,
  faSearch,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

function CandidateSidebar() {
  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const [uploadedImage, setUploadedImage] = useState(null);
  // const handleImageUpload = (event) => {
  //   // Handle image upload logic here
  //   const uploadedFile = event.target.files[0];
  //   // Perform necessary validations and set the uploaded image
  //   setUploadedImage(URL.createObjectURL(uploadedFile));
  // };

  useEffect(() => {
    // Update isOpen state only if the window width is less than 768
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Close sidebar by default on mobile
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIsMobile();

    // Event listener to check window width and update isOpen state
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Clean up the event listener
    };
  }, []);

  const handleSideBar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };



  return (
    <>
      <div className="toggle-div">
        {isMobile && (
          <Button className="sidebar-btn" onClick={() => handleSideBar()}>
            ☰
          </Button>
        )}
      </div>

      {/* ------------sidebar start----------------- */}
      <div className="row1">
        <div className={`col-md-2 ${isOpen ? "isClose" : ""}`}>
          <div className="set-sidebar">
            <div>
              <nav>
                <ul className="set-menu" style={{ listStyle: "none" }}>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faIdCardClip}
                    />
                    <Link to="/candidate-dashboard/personal-details">&nbsp;Personal Details</Link>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBuildingColumns}
                    />
                    <Link to="/candidate-dashboard/personal-qualification" >
                      &nbsp; Academic Professional Qualifications
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBriefcase}
                    />
                    <Link to="/candidate-dashboard/personal-experience" >&nbsp; Experience</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faSearch}
                    />
                    <Link to="/candidate-dashboard/personal-research">&nbsp; Research Work</Link>
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon className="set-menu-icon" icon={faUsers} />

                    <Link to="/candidate-dashboard/personal-programs "> Seminars/Short Term Courses/Summer Schools/Winter
                      Schools </Link>
                    {/* <a onClick={() => setScreen(4)}>
                      &nbsp; Seminars/Short Term Courses/Summer Schools/Winter
                      Schools
                    </a> */}
                  </li>
                  <li>
                    <FontAwesomeIcon className="set-menu-icon" icon={faFile} />
                    <Link to="/candidate-dashboard/personal-reference">&nbsp; Reference/ Resume</Link>
                  </li>
                  <li>
                    <a
                      href="/current-opening"
                      style={{ textDecoration: "underline" }}
                    >
                      Current Openings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    
      </div>
      {/* --------------------sidebar end------------------------------ */}
   
    </>
  );
}

export default CandidateSidebar;
