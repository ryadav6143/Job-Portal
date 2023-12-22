import React from "react";
import "./InterviewSchedule.css";
import logo1 from "../../assets/logos/academic.png";
import logo2 from "../../assets/logos/administration.png";
import logo3 from "../../assets/logos/research.png";
import logo4 from "../../assets/logos/technical.png";
import ScheduledAcademics from "./ScheduledAcademics/ScheduledAcademics";

function InterviewSchedule() {
  return (
    <>
      <div>
        <div className="is-background">
          <div className="data">
            <p>INTERVIEW SCHEDULE</p>
            <p className="sub-heading">
              “ Be your true self, grow and make a difference.”
            </p>
          </div>
        </div>
        <div className="is-header ">
          <div className="row">
            <div className="col-md-3">
              <a href="">
                <img className="is-header-logo" src={logo1} />
                ACADEMICS
              </a>
            </div>
            <div className="col-md-3">
              <a href="">
                <img className="is-header-logo" src={logo3} />
                RESEARCH
              </a>
            </div>
            <div className="col-md-3">
              <a href="">
                <img className="is-header-logo" src={logo2} />
                ADMINISTRATION
              </a>
            </div>
            <div className="col-md-3">
              <a href="">
                <img className="is-header-logo" src={logo4} />
                TECHNICAL
              </a>
            </div>
          </div>
        </div>
        <ScheduledAcademics></ScheduledAcademics>
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
          <p>Contact Number:- 73131-11500, 73131-11501 (Monday to Saturday) 9 am to 5 pm</p>
          <p>Facilities:- Residential, Medical, Transport, Pre-Primary School and Creche facilities available on campus</p>
          <p>Salary Shall not be constraint for deserving condidates.</p>
        </div>
      </div>
    </>
  );
}

export default InterviewSchedule;
