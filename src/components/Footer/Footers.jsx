import React from "react";
import "./Footers.css";
import whitelogo from "../../assets/logos/med-logo-white.png";
import facebook from "../../assets/logos/facebook.png";
import instagram from "../../assets/logos/instagram.png";
import twitter from "../../assets/logos/twitter.png";
import youtube from "../../assets/logos/youtube.png";
import linkedin from "../../assets/logos/linkedin.png";

function Footers() {
  return (
    <>
      <div className="footer">
        <div className="f-white-logo">
          <img src={whitelogo} alt=""/>
        </div>
        <div className="f-contact-us">
          <p className="c-heading">Contact</p>
          <p>
            Medi-Caps University A.B. Road,Pigdamber,Rau <br /> Indore 453331
          </p>
          <p>info@medicaps.ac.in</p>
          <p>73131-11500 , 73131-11501</p>
        </div>
        <div className="further-info">
          <p className="info-heading">Further Information</p>
          <p>Contact Us</p>
          <div className="social-logos">
            <div>
              <a href="">
                <img src={facebook} alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src={linkedin} alt=""/>
              </a>
            </div>

            <div>
              <a href="">
                <img src={youtube} style={{width:"35px",height:"35px"}} alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitter} style={{width:"20px",height:"20px"}} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>
          <p>Designed and Developed By Corusview </p>
        </div>
        <div>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </>
  );
}

export default Footers;
