import React from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import Academictable from "./Academictable";
import NonAcademictable from "./NonAcademictable";
import "./CurrentOpening.css";

function CurrentOpening() {
  return (
    <>
      <Header></Header>
      <div>
        <div className="cop-heading">
          <p>
            <span>CURRENT OPENING</span>
          </p>
        </div>
        <Academictable></Academictable>
        <NonAcademictable></NonAcademictable>
      </div>
      <Footers></Footers>
    </>
  );
}

export default CurrentOpening;
