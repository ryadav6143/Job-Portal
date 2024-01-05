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
            <p>INTERVIEW SCHEDULE</p>
            <p className="sub-heading">
              “ Be your true self, grow and make a difference.”
            </p>
          </div>
        </div>
        <div className="is-header pc">
          <div className="row header-item">
            <div className="col-md-3">
              <a className="a1 a11" onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo1}
                  alt="Academics Logo"
                />
                ACADEMICS
              </a>
            </div>
            <div className="col-md-3">
              <a className="a1" onClick={() => showComponent("Component2")}>
                <img
                  className="is-header-logo"
                  src={logo3}
                  alt="Research Logo"
                />
                RESEARCH
              </a>
            </div>
            <div className="col-md-3">
              <a onClick={() => showComponent("Component3")}>
                <img
                  className="is-header-logo"
                  src={logo2}
                  alt="Administration Logo"
                />
                ADMINISTRATION
              </a>
            </div>
            <div className="col-md-3">
              <a className="a1" onClick={() => showComponent("Component4")}>
                <img
                  className="is-header-logo"
                  src={logo4}
                  alt="Technical Logo"
                />
                TECHNICAL
              </a>
            </div>
          </div>
        </div>
        <div className="for-mobile">
          <ul>
            <li>
              <a onClick={() => showComponent("Component1")}>
                <img
                  className="is-header-logo"
                  src={logo1}
                  alt="Academics Logo"
                />
                ACADEMICS
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component2")}>
                <img
                  className="is-header-logo"
                  src={logo3}
                  alt="Research Logo"
                />
                RESEARCH
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component3")}>
                <img
                  className="is-header-logo"
                  src={logo2}
                  alt="Administration Logo"
                />
                ADMINISTRATION
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component4")}>
                <img
                  className="is-header-logo"
                  src={logo4}
                  alt="Technical Logo"
                />
                TECHNICAL
              </a>
            </li>
          </ul>
        </div>
        <div>{componentToShow}</div>
        <div className="notes">
          <p>
            NOTE:- Kindly bring 2 passport size photographs, original
            Certificates, work experience certificates, salary slips along with
            your resume.
          </p>
          <p>Reporting Time:- 9:00 AM to 9:30 </p>
          <p>
            AMVenue:-Medi-Caps University A.B. Road, Pigdamber, Rau Indore
            453331
          </p>
          <p>
            Contact Number:- 73131-11500, 73131-11501 (Monday to Saturday) 9 am
            to 5 pm
          </p>
          <p>
            Facilities:- Residential, Medical, Transport, Pre-Primary School and
            Creche facilities available on campus
          </p>
          <p>Salary Shall not be constraint for deserving condidates.</p>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default InterviewSchedule;
