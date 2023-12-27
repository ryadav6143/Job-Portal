import React from "react";
import "./ContactUs.css";
import phonelogo from "../../assets/logos/phone.png";
import emaillogo from "../../assets/logos/email.png";
import locationlogo from "../../assets/logos/location.png";

function ContactUs() {
  var phoneNumber = "073131-11500 , 073131-11501";
  var email = "info@medicaps.ac.in";
  var location = "A.B.Road,pigdamber,Rau Indore 453331";
  return (
    <>
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
                {" "}
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
                {" "}
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
                <input type="text" placeholder="Message"  required/>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
