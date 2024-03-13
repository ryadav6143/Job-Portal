import React from "react";
import "./Candidateco.css"
import Academictable from "../../../../admin_pages/CurrentOpening/Academictable";
import NonAcademictable from "../../../../admin_pages/CurrentOpening/NonAcademictable";
function CandidateCurrentopening() {
  return (
    <>
      <div>
        <Academictable></Academictable>
        <NonAcademictable></NonAcademictable>
      </div>
    </>
  );
}

export default CandidateCurrentopening;
