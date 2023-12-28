import React from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./Home.css";
import disktype from "../../assets/logos/bullet.png";
import logo1 from "../../assets/logos/academic.png";
import logo2 from "../../assets/logos/research.png";
import logo3 from "../../assets/logos/administration.png";
function Home() {
  return (
    <>
      <Header></Header>
      <div className="home-page">
        <div className="medi-home-heading">
          <p id="uni-name">MEDI-CAPS CARRER</p>
          <p>CONNECT THE DOTS OF YOUR CARRER</p>
          <button type="button" id="join-medi-btn">
            <a href=""> JOIN MEDI-CAPS</a>
          </button>
        </div>
      </div>
      <div className="subs">
        <p>MEDI-CAPS UNIVERSITY INVITE PEOPLE FROM </p>
        <p>ERUDITION & INDUSTRY </p>
        <p>FOR THE POSITIONS</p>
      </div>

      <div className="cards">
        <div className="card">
          <img src={logo1} />
          <p>ACADEMICS</p>
          <a href="">View Vacancies</a>
        </div>
        <div className="card">
          <img src={logo2} />
          <p>UAS</p>
          <p>(UNIVERSITY ADMINISTRATIVE SERVICES)</p>
          <a href="">View Vacancies</a>
        </div>
        <div className="card">
          <img src={logo2} />
          <p>RESEARCH</p>
          <a href="">View Vacancies</a>
        </div>
        <div className="card">
          <img src={logo3} />
          <p>ADMINISTRATION</p>
          <a href="">View Vacancies</a>
        </div>
        <div className="card">
          <img src={logo3} />
          <p>TECHNICAL</p>
          <a href="">View Vacancies</a>
        </div>
      </div>
      <div className="perks">
        <div className="perks-heading">
          <p>PERKS OF JOINING <br /> <span> MEDI-CAPS <br /> UNIVERSITY </span></p>
        </div>
        <div className="lists">
          <ul>
            <li>
              <img src={disktype} id="disktype" />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              <img src={disktype} id="disktype" />
               when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              <img src={disktype} id="disktype" />
               when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              <img src={disktype} id="disktype" />
               when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
          </ul>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Home;
