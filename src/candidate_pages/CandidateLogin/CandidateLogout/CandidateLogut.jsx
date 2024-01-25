import React from "react";
import "./CandidateLogut.css";
import medilogo from "../../../assets/logos/medi-logo.png";
import CandidateDashboard from "../CandidateDashboard/CandidateDashboard";
import logout from "../../../assets/logos/Logout.png"
import reset from "../../../assets/logos/Reset.png"
function CandidateLogut({ handleLogout }) {

  const handleReset = () => {
    const form = document.getElementById("myForm");

    if (form) {
      form.reset();
    }
  };
function CandidateLogut({ handleLogout}) {
  return (
    <>
      <div className="admin-header">
        <div>
          <img className="admin-logo" src={medilogo} alt="" />
        </div>

        <div>
         
        </div>
        <div id="candidate-logout">
        <button  onClick={handleReset} type="reset">
            <img src={reset}/>
          </button>
          <button
            onClick={() => {
              handleLogout();            
            }}
          >
           <img  src={logout}/>

          </button>


        </div>
      </div>

      <div className="show-dashboard">
        <CandidateDashboard></CandidateDashboard>
      </div>
    </>
  );
}}

export default CandidateLogut;
