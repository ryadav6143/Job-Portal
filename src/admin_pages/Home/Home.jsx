import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./Home.css";
import disktype from "../../assets/logos/bullet.png";
import logo1 from "../../assets/logos/academic.png";
import logo2 from "../../assets/logos/research.png";
import logo3 from "../../assets/logos/administration.png";
import ChinmayArondekar from "../../assets/images/Chinmay Arondekar.jfif";
import Hemantpal from "../../assets/images/Hemant pal.jfif";
import rubybhat from "../../assets/images/Ruby Bhat.jfif";
import mohsinali from "../../assets/images/Mohsin Ali.jpg";
import medicircular from "../../assets/logos/medi-circular-logo.png";
import women from "../../assets/images/women.png";
import men from "../../assets/images/men.png";
import mask from "../../assets/images/mask.png";
import mask2 from "../../assets/images/mask2.png";
import mask3 from "../../assets/images/mask3.png";

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
          <p>
            PERKS OF JOINING <br />{" "}
            <span>
              {" "}
              MEDI-CAPS <br /> UNIVERSITY{" "}
            </span>
          </p>
        </div>
        <div className="lists">
          <ul>
            <li>
              <img src={disktype} id="disktype" />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li className="side-left">
              <img src={disktype} id="disktype" />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              <img src={disktype} id="disktype" />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li className="side-left">
              <img src={disktype} id="disktype" />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
          </ul>
        </div>
      </div>
      <div className="staff-section">
        <div className="medi-heading">
          <p>
            A DAY IN LIFE OF <br />
            <span>MEDI-CAPS STAFF</span>
          </p>
        </div>
        <div className="medi-staff">
        <div className="row-1">
          <div>
            <p>
              THE <br /> HEADLINE
            </p>
            <button type="button">+</button>
          </div>
          <div>
    
          </div>
          <div>
            <p>
              THE <br /> HEADLINE
            </p>
            <button type="button">+</button>
          </div>
        </div>
        <div className="row-2">
          <div>
            <p>
              THE <br /> HEADLINE
            </p>
            <button type="button">+</button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="row-3">
        <div></div>
      </div>
      </div>

      <div className="purpose">
        <div className="purpose-headings">
          <p>OUR PEOPLE WITH PURPOSE</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="purpose-data">
          <div className="circular-logo">
            <img src={medicircular} />
          </div>
          <div className="big-img">
            <img src={men} />
          </div>
          <div className="mask3">
            <img src={mask3} />
          </div>
          <div className="purpose-quotes">
            <p>"Self-belief and hard work will always earn you success."</p>
          </div>
          <div className="women">
            <img src={women} />
          </div>
          <div className="purpose-quotes">
            <p>"Self-belief and hard work will always earn you success."</p>
          </div>
          <div className="big-img">
            <img src={mask} />
          </div>
          <div className="women">
            <img src={women} />
          </div>
          <div className="mask3">
            <img src={mask3} />
          </div>
          <div className="purpose-quotes quote-small">
            <p>“Where can I get some”</p>
          </div>
          <div className="women">
            <img src={women} />
          </div>
          <div className="big-img">
            <img src={mask2} />
          </div>
          <div className="circular-logo">
            <img src={medicircular} />
          </div>
          <div className="big-img">
            <img src={men} />
          </div>
          <div className="purpose-quotes quote-small">
            <p>“Where can I get some”</p>
          </div>
          <div className="women">
            <img src={women} />
          </div>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Home;
