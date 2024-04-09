import React from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import phonelogo from "../../assets/logos/phone.png";
import emaillogo from "../../assets/logos/email.png";
import locationlogo from "../../assets/logos/location.png";
import adminApiService from "../adminApiService";
import { useState } from "react";
import Notification from "../../Notification/Notification";
function ContactUs() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState("success");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_1: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_1: "",
    message: "",
  });

  var phoneNumber = "073131-11500 , 073131-11501";
  var email = "info@medicaps.ac.in";
  var location = "A.B.Road,pigdamber,Rau Indore 453331";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const truncatedValue =
      name === "message" ? value.slice(0, 200) : value.slice(0, 40);

    const errorMessage =
      (name === "message" && value.length > 200) ||
      (name !== "message" && value.length > 40)
        ? `Maximum ${name === "message" ? "200" : "40"} characters allowed.`
        : "";
    setFormData({
      ...formData,
      [name]: truncatedValue,
    });
    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, "<<<");

    // const newFormErrors = {};
    // Object.keys(formData).forEach((key) => {
    //   if (!formData[key]) {
    //     newFormErrors[key] = "This field is required.";
    //   }
    // });

    // if (Object.keys(newFormErrors).length > 0) {
    //   setFormErrors(newFormErrors);
    //   return;
    // }

    const newFormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newFormErrors[key] = "This field is required.";
      }
    });

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Please enter a valid email address.";
    }

    // Contact number validation
    if (formData.contact_1.length !== 10) {
      newFormErrors.contact_1 =
        "Please enter a valid  10-digit contact number.";
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    try {
      const response = await adminApiService.registerVisitor(formData);
      console.log(response);
      setNotificationMessage("Submit successfully.");
      setNotificationSeverity("success");
      setNotificationOpen(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_1: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setNotificationMessage("Error saving changes.");
      setNotificationSeverity("error");
      setNotificationOpen(true);
    }
  };
  return (
    <>
      <Header></Header>
      <Notification
        open={notificationOpen}
        handleClose={() => setNotificationOpen(false)}
        alertMessage={notificationMessage}
        alertSeverity={notificationSeverity}
      />
      <div className="contact-container ">
        {/* <div style={{display:"flex", justifyContent:"space-evenly"}}> */}
        <div className="contact-detail">
          <div>
            <p className="cd-heading">OFFICE</p>
            <p>
              <img alt="" className="contact-logo" src={phonelogo} />{" "}
              {phoneNumber}
            </p>
            <p>
              <img alt="" className="contact-logo" src={emaillogo} /> {email}
            </p>
            <p>
              <img alt="" className="contact-logo" src={locationlogo} />{" "}
              {location}
            </p>
          </div>
          <div className="AQ-container">
            <p className="cd-heading">APPLICATION QUERIES</p>
            <p>
              <img alt="" className="contact-logo" src={phonelogo} />{" "}
              {phoneNumber}
            </p>
            <p>
              <img alt="" className="contact-logo" src={emaillogo} /> {email}
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <label htmlFor="first_name">First Name</label>
                <input
                  autoFocus
                  type="text"
                  placeholder="Enter First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  // required
                />
                {formErrors.first_name && (
                  <span className="error-message">{formErrors.first_name}</span>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  // required
                />
                {formErrors.last_name && (
                  <span className="error-message">{formErrors.last_name}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}

                  // required
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="contact_1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 012 3456 789"
                  name="contact_1"
                  value={formData.contact_1}
                  onChange={handleInputChange}
                  // required
                />
                {formErrors.contact_1 && (
                  <span className="error-message">{formErrors.contact_1}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  placeholder="Write a Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  // required
                />
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
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
          // allowfullscreen=""
          title="Map to our Institute"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footers></Footers>
    </>
  );
}

export default ContactUs;
