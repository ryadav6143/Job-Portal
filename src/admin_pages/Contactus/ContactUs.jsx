import React from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import phonelogo from "../../assets/logos/phone.png";
import emaillogo from "../../assets/logos/email.png";
import locationlogo from "../../assets/logos/location.png";

function ContactUs() {
  var phoneNumber = "073131-11500 , 073131-11501";
  var email = "info@medicaps.ac.in";
  var location = "A.B.Road,pigdamber,Rau Indore 453331";
  return (
    <>
      <Header></Header>
      <div className="contact-container ">
        <div className="contact-detail ">
          <div>
            <p className="cd-heading">OFFICE</p>
            <p>
              <img className="contact-logo" src={phonelogo} /> {phoneNumber}
            </p>
            <p>
              <img className="contact-logo" src={emaillogo} /> {email}
            </p>
            <p>
              <img className="contact-logo" src={locationlogo} /> {location}
            </p>
          </div>
          <div className="AQ-container">
            <p className="cd-heading">APPLICATION QUERIES</p>
            <p>
              <img className="contact-logo" src={phonelogo} /> {phoneNumber}
            </p>
            <p>
              <img className="contact-logo" src={emaillogo} /> {email}
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form action="" method="post">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter First Name " required />
              </div>
              <div className="col-6">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter Last Name " required />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter First Name " required />
              </div>
              <div className="col-6">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter Last Name "
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>Message</label>
                <input type="text" placeholder="Write a Message" required />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="map-to-medi">
        <p>
          <span id="our-address">Find Our Address On Map</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8780860615793!2d75.8010157747586!3d22.621027331194718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1703826878658!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footers></Footers>
    </>
  );
}

export default ContactUs;
