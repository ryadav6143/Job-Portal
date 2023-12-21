import React from "react";
import "./Footers.css";
import whitelogo from "../../assets/logos/med-logo-white.png";
import facebook from "../../assets/logos/facebook.png";
import instagram from "../../assets/logos/instagram-1.png";
import twitter from "../../assets/logos/twitter.png";
import youtube from "../../assets/logos/youtube.png";
import linkedin from "../../assets/logos/linkedin.png";

function Footers() {
  return (
    <>
      <div className="footer">
        <div className="f-white-logo">
          <img src={whitelogo} />
        </div>
        <div className="f-contact-us">
          <p className="c-heading">Contact</p>
          <p>
            Medi-Caps University A.B. Road,Pigdamber,Rau <br /> Indore 453331
          </p>
          <p>info@medicaps.ac.in</p>
          <p>07313111500, 07313111501</p>
        </div>
        <div className="further-info">
          <p className="info-heading">Further Information</p>
          <p>Contact Us</p>
          <div className="social-logos">
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={instagram} />
            </div>
            <div>
              <img src={linkedin} />
            </div>
            <div>
              <img src={twitter} />
            </div>
            <div>
              <img src={youtube} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>
          <p>Designed and Developed By Corusview </p>
        </div>
        <div>
          <p>Privacy Policy | Terms of uses</p>
        </div>
      </div>
    </>
  );
}

export default Footers;
