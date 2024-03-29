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
import CandidateOrganisedForm from "../CandidateChildPages/EditProgramsForm/SeminarOrganised/CandidateOrganisedForm";

import { ApiDataProvider } from "..//..//../context/CandidateContext";
function CandidateSidebar() {
  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageUpload = (event) => {
    // Handle image upload logic here
    const uploadedFile = event.target.files[0];
    // Perform necessary validations and set the uploaded image
    setUploadedImage(URL.createObjectURL(uploadedFile));
  };

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

  // const renderComponent = () => {
  //   switch (screen) {
  //     // case 0:
  //     //   return (<ApiDataProvider>
  //     //     <EditPersonalDetails />;
  //     //   </ApiDataProvider>)
  //     //   break;
  //     case 1:
  //       return (<ApiDataProvider>
  //       <EditQualificationForm />
  //       </ApiDataProvider>);
  //       break;
  //     case 2:
  //       return (<ApiDataProvider>
  //         <EditExperience />
  //         </ApiDataProvider>);
  //       break;
  //     case 3:
  //       return <EditResearchForm />;
  //       break;
  //     case 4:
  //       return <EditProgramsForm />;
  //       break;
  //     case 5:
  //       return <EditReference />;
  //       break;
  //     // default:
  //     //   return <EditPersonalDetails />;
  //     //   break;
  //   }
  // };
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(true); // Close sidebar if it's open on mobile
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
        <div className={`col-md-2 set-col-2 ${isOpen ? "isClose" : ""}`}>
          <div className="set-sidebar">
            <div>
              <nav>
                <ul className="set-menu" style={{ listStyle: "none" }}>
                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faIdCardClip}
                    />
                    <Link to="/candidate-dashboard/personal-details" onClick={handleLinkClick}>
                      <span> &nbsp;Personal Details</span>
                    </Link>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBuildingColumns}
                    />
                    <Link to="/candidate-dashboard/personal-qualification" onClick={handleLinkClick}>
                      {/* <span> &nbsp; Academic Professional Qualifications</span> */}
                      <span> &nbsp;Academic Qualifications</span>
                      
                    </Link>
                  </li>
                  {/* <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBriefcase}
                    />
                    <Link to="/candidate-dashboard/personal-experience">
                      <span> &nbsp; Experience</span>
                    </Link>
                  </li> */}

                  <div className="dropdown show">
                    <a
                      className="btn dropdown-toggle set-a"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{paddingLeft:"0"}}
                    >
                 <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faBriefcase}
                    />
                      <span>&nbsp;&nbsp; &nbsp;Experience</span>
                    </a>

                    <div
                      className="dropdown-menu master-dd"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link
                        to="/candidate-dashboard/candidate-experience"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Experience Data</span>
                      </Link>
                      <Link
                        to="/candidate-dashboard/candidate-totalexperience"
                        className="dropdown-item "
                        onClick={handleLinkClick}
                      >
                        <span>Total Experience</span>
                      </Link>
                 
                    </div>
                  </div>
                  {/* <li>
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faSearch}
                    />
                    <Link to="/candidate-dashboard/personal-research">
                      <span>&nbsp; Research Work</span>
                    </Link>
                  </li> */}


                  <div className="dropdown show">
                    <a
                      className="btn dropdown-toggle set-a"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{paddingLeft:"0"}}
                    >                     
                    <FontAwesomeIcon
                      className="set-menu-icon"
                      icon={faSearch}
                    />  
                      <span>&nbsp;&nbsp; &nbsp;Research Work</span>
                    </a>

                    <div
                      className="dropdown-menu master-dd"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link
                        to="/candidate-dashboard/candidate-research"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Research</span>
                      </Link>                   
                      <Link
                        to="/candidate-dashboard/candidate-journalPublication"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Journal Publication</span>
                      </Link>                   
                      <Link
                        to="/candidate-dashboard/candidate-confrencePublication"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Confrence Publication</span>
                      </Link>                   
                      <Link
                        to="/candidate-dashboard/candidate-patents"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Patents</span>
                      </Link>                   
                      <Link
                        to="/candidate-dashboard/candidate-copyrights"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Copyrights</span>
                      </Link>                     
                    </div>
                  </div>



                  {/* <li>
                    <FontAwesomeIcon className="set-menu-icon" icon={faUsers} />
                    <Link to="/candidate-dashboard/personal-programs ">
                      <span>
                        Seminars/Short Term Courses/Summer Schools/Winter
                        Schools
                      </span>
                    </Link>
                  </li> */}

                  <div className="dropdown show">
                    <a
                      className="btn dropdown-toggle set-a"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{paddingLeft:"0",paddingBottom:"1em"}}
                    >                  
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faUsers}
                      />
                      <span>&nbsp;&nbsp;&nbsp;Seminars</span>
                    </a>

                    <div
                      className="dropdown-menu master-dd"
                      aria-labelledby="dropdownMenuLink"                      
                    >
                      <Link
                        to="/candidate-dashboard/candidate-organised"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Seminar Organised</span>
                      </Link>
                      <Link
                        to="/candidate-dashboard/candidate-attend"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Seminar Attends</span>
                      </Link>
                      <Link
                        to="/candidate-dashboard/candidate-otherInfo"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Seminar Other Information</span>
                      </Link>
                      <Link
                        to="/candidate-dashboard/candidate-otheractivites"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span>Seminar Other Activites</span>
                      </Link>
                    </div>
                  </div>

                  <li>
                    <FontAwesomeIcon className="set-menu-icon" icon={faFile} />
                    <Link to="/candidate-dashboard/personal-reference" onClick={handleLinkClick}>
                      <span> &nbsp; Reference/ Resume</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/candidate-dashboard/current-opening"
                      style={{ textDecoration: "underline" }}
                      onClick={handleLinkClick}
                    >
                      Current Openings
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="col-md-10">{renderComponent()}</div> */}
      </div>
      {/* --------------------sidebar end------------------------------ */}
      {/* <Footers></Footers> */}
    </>
  );
}

export default CandidateSidebar;
