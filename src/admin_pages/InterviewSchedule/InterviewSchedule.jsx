import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./InterviewSchedule.css";
import logo1 from "../../assets/logos/academic.png";
import logo2 from "../../assets/logos/administration.png";
import logo3 from "../../assets/logos/research.png";
import logo4 from "../../assets/logos/technical.png";
import ScheduledAcademics from "./ScheduledAcademics/ScheduledAcademics";
import ScheduledAdministration from "./ScheduledAdministration/ScheduledAdministration";
import ScheduledResearch from "./ScheduledResearch/ScheduledResearch";
import ScheduledTechnical from "./ScheduledTechnical/ScheduledTechnical";

function InterviewSchedule() {
  // ...........................Notes Data...................................
  let note =
    "Kindly bring 2 passport size photographs, original" +
    "Certificates, work experience certificates, salary slips along with" +
    "your resume.";
  let repTime = "9:00 AM to 9:30 ";
  let venue = "Medi-Caps University A.B. Road, Pigdamber, Rau Indore 453331";
  let contactNo = "73131-11500, 73131-11501 (Monday to Saturday) 9 am to 5 pm";
  let facalities =
    "Residential, Medical, Transport, Pre-Primary School and Creche facilities available on campus.";
  // ...........................Notes Data...................................
  const [selectedComponent, setSelectedComponent] = useState();
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    case "Component1":
      componentToShow = <ScheduledAcademics />;
      break; 
    case "Component2":
      componentToShow = <ScheduledResearch />;
      break;
    case "Component3":
      componentToShow = <ScheduledAdministration />;
      break;
    case "Component4":
      componentToShow = <ScheduledTechnical />;
      break;
    default:
      componentToShow = <ScheduledAcademics />;
      break;
  }

  return (
    <>
      <Header></Header>
      <div>
        <div className="is-background">
          <div className="data">
            <p>
              <span>INTERVIEW SCHEDULE</span>
            </p>
            <p className="sub-heading">
              “ Be your true self, grow and make a difference.”
            </p>
          </div>
        </div>
        <div className="is-header pc">
          <div className="row header-item">
            <div className="col-md-3">
              <button className="a1 a11" onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo1}
                  alt="Academics Logo"
                />
                
                ACADEMICS
              </button>
            </div>
            <div className="col-md-3">
              <button className="a1" onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo3}
                  alt="Research Logo"
                />
                RESEARCH
              </button>
            </div>
            <div className="col-md-3">
              <button onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo2}
                  alt="Administration Logo"
                />
                ADMINISTRATION
              </button>
            </div>
            <div className="col-md-3">
              <button className="a1" onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo4}
                  alt="Technical Logo"
                />
                TECHNICAL
              </button>
            </div>
          </div>
        </div>
        <div className="for-mobile">
          <ul>
            <li>
              <button onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo1}
                  alt="Academics Logo"
                />
                ACADEMICS
              </button>
            </li>
            <li>
              <button onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo3}
                  alt="Research Logo"
                />
                
                RESEARCH
              </button>
            </li>
            <li>
              <button onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo2}
                  alt="Administration Logo"
                />
                ADMINISTRATION
              </button>
            </li>
            <li>
              <button onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo4}
                  alt="Technical Logo"
                />
                TECHNICAL
              </button>
            </li> 
          </ul>
        </div>
        <div>{componentToShow}</div>
        <div className="notes">
          <p>
            NOTE :- <span> {note}</span>
          </p>
          <p>
            Reporting Time :- <span>{repTime}</span>
          </p>
          <p>
            AMVenue :- <span>{venue}</span>
          </p>
          <p>
            Contact Number :- <span>{contactNo}</span>
          </p>
          <p>
            Facilities :- <span>{facalities}</span>{" "}
          </p>
          <p>Salary Shall not be constraint for deserving condidates.</p>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default InterviewSchedule;
