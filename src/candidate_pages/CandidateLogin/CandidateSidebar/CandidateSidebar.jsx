import React, { useEffect, useState } from "react";
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
import EditPersonalDetails from "../CandidateChildPages/EditPersonalDetails/EditPersonalDetails";
import EditQualificationForm from "../CandidateChildPages/EditQualificationForm/EditQualificationForm";
import EditExperience from "../CandidateChildPages/EditExperienceForm/EditExperience";
import EditResearchForm from "../CandidateChildPages/EditResearchForm/EditResearchForm";
import EditProgramsForm from "../CandidateChildPages/EditProgramsForm/EditProgramsForm";
import EditReference from "../CandidateChildPages/EditReference/EditReference";
import Footers from "../../../components/Footer/Footers";

function CandidateSidebar() {
  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  



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

  const renderComponent = () => {
    switch (screen) {
      case 0:
        return <EditPersonalDetails />;
        break;
      case 1:
        return <EditQualificationForm />;
        break;
      case 2:
        return <EditExperience />;
        break;
      case 3:
        return <EditResearchForm />;
        break;
      case 4:
        return <EditProgramsForm />;
        break;
      case 5:
        return <EditReference />;
        break;
      default:
        return <EditPersonalDetails />;
        break;
    }
  };

  return (
    <>
      {isMobile && (
        <Button className="sidebar-btn" onClick={() => handleSideBar()}>
          ☰{" "}
        </Button>
      )}

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
                    <a onClick={() => setScreen(0)}>&nbsp; Personal Details</a>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBuildingColumns}
                    />
                    <a onClick={() => setScreen(1)}>
                      &nbsp; Academic Professional Qualifications
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBriefcase}
                    />
                    <a onClick={() => setScreen(2)}>&nbsp; Experience</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faSearch}
                    />
                    <a onClick={() => setScreen(3)}>&nbsp; Research Work</a>
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon className="set-menu-icon" icon={faUsers} />
                    <a onClick={() => setScreen(4)}>
                      &nbsp; Seminars/Short Term Courses/Summer Schools/Winter
                      Schools
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon className="set-menu-icon" icon={faFile} />
                    <a onClick={() => setScreen(5)}>&nbsp; Reference/ Resume</a>
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
        <div className="col-md-10">{renderComponent()}</div>
      </div>
      {/* --------------------sidebar end------------------------------ */}
      <Footers></Footers>
    </>
  );
}

export default CandidateSidebar;
