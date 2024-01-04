import React, { useEffect, useState } from "react";
import "./UserHeader.css";
import logo from "../../../../assets/logos/medi-logo.png";
import logout from "../../../../assets/logos/Logout.png";
import reset from "../../../../assets/logos/Reset.png";
import EditPersonalDetails from "../EditProfileForm/EditPersonalDetails/EditPersonalDetails";
import pdicon from "../../../../assets/logos/pdicon.png";
import { Link } from 'react-router-dom';
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
import EditQualificationForm from "../EditProfileForm/EditQualificationForm/EditQualificationForm";
import EditExperience from "../EditProfileForm/EditExperienceForm/EditExperience";
import EditResearchForm from "../EditProfileForm/EditResearchForm/EditResearchForm";
import EditProgramsForm from "../EditProfileForm/EditProgramsForm/EditProgramsForm";
import EditReference from "../EditProfileForm/EditReference/EditReference";



function UserHeader() {

  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  
  const handleReset = () => {
    const form = document.getElementById("myForm");

    if (form) {
      form.reset();
    }
  };




  useEffect(()=> {
    if(window.innerWidth < 768){
      setIsOpen(false)
      setIsMobile(true)
    }
  },[])

  const handleSideBar = () => {
    if(isOpen){
      setIsOpen(false)
    }else {
      setIsOpen(true)
    }
  }

  const renderComponent = ()=> {
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
          return  <EditProgramsForm />;
          break;
          case 5:
            return  <EditReference />;
            break;
      default:
        return  <EditPersonalDetails />;
        break;
    }
  }
  
  return (
    <>
     
        {/* ---------------header start------------ */}
        <div className="user-header">
          <div className="logo-coloured">
            <img src={logo} className="user-logo" />
          </div>
          <div className="logs">
            <button onClick={handleReset} type="reset">
              <img src={reset} className="log-res" />
            </button>
            <button>
            <img src={logout} className="log-res" />
            </button>
            
          </div>
        </div>
        {/* ---------header end----------- */}
        {isMobile && <Button className="sidebar-btn"  onClick={()=> handleSideBar()}>☰ </Button>}

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
                      <a onClick={()=> setScreen(0)}>
                        &nbsp; Personal Details
                       
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faBuildingColumns}
                      />
                      <a onClick={()=> setScreen(1)}>
                        &nbsp; Academic Professional Qualifications
                       
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faBriefcase}
                      />
                      <a onClick={()=> setScreen(2)}>&nbsp; Experience</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faSearch}
                      />
                      <a onClick={()=> setScreen(3)}>&nbsp; Research Work</a>
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faUsers}
                      />
                      <a onClick={()=> setScreen(4)}>
                        &nbsp; Seminars/Short Term Courses/Summer Schools/Winter
                        Schools
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="set-menu-icon"
                        icon={faFile}
                      />
                      <a onClick={()=> setScreen(5)}>&nbsp; Reference/ Resume</a>
                    </li>
                    <li>
                      <a href="/current-opening" style={{textDecoration:"underline"}}>Current Openings</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-10" >
            {renderComponent()}
          </div>
        </div>
{/* --------------------sidebar end------------------------------ */}
        
     
    </>
  );
}
export default UserHeader;
