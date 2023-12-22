import React from "react";
import "./PersonalDeatils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function PersonalDeatils() {
  return (
    <>
    <div className="container">
      <div className="personaldetails-form">
        <div>
          <h5 className="PD-heading">Personal Details</h5>
          <p className="PD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        
          <div className="row">
            <div className="col-md-6">
              {/* Title */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Title
                </label>
                <select className="set-dropdown">
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              {/* Name */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Name
                </label>

                <input
                  className="set-input"
                  type="text"
                  name=""
                  placeholder="Enter Name"
                  required
                ></input>
                <FontAwesomeIcon className="set-icon" icon={faUser} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* DOB */}

              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Date of Birth:
                </label>
                <input
                  className="set-input"
                  type="date"
                  placeholder="MM/DD/YYYY"
                  name=""
                  required
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              {/* Gender */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Gender
                </label>
                <select className="set-dropdown">
                  <option value="Mr.">Male</option>
                  <option value="Mrs.">Female</option>
                  <option value="Ms.">Others</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Email */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Email
                </label>
                <input
                  className="set-input"
                  type="email"
                  placeholder="Email address"
                  name=""
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              {/* Phone No. */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Phone Number
                </label>
                <input
                  className="set-input"
                  type="number"
                  placeholder="(123) 456 - 7890 "
                  name=""
                  required
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* City */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>City
                </label>
                <select className="set-dropdown">
                  <option value="">Select city</option>
                  <option value="">Indore</option>
                  <option value="">Ujjain</option>
                  <option value="">Dewas</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              {/* Country */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Country
                </label>
                <select className="set-dropdown">
                  <option value="">Select country</option>
                  <option value="">United States</option>
                  <option value="">Japan</option>
                  <option value="">Brazil</option>
                  <option value="">India</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Category Appointment */}

              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Category of Appointment
                </label>
                <select className="set-dropdown">
                  <option value="">Select Category</option>
                  <option value="">Category 1</option>
                  <option value="">Category 2</option>
                  <option value="">Category 3</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              {/* Post Applied For */}

              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Post Applied For
                </label>
                <select className="set-dropdown">
                  <option value="">Select Post</option>
                  <option value="">Software Engineer</option>
                  <option value="">Marketing Specialist</option>
                  <option value="">Project Manager</option>
                  <option value="">Data Analyst</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
 {/* Sub Post Applied For */}

 <div className="form-section">
                <label className="SetLabel-Name">
                  <span> </span> Sub Post Applied For
                </label>
                <select className="set-dropdown">
                  <option value="">Select Sub Post</option>
                  <option value="">Sub Post 1</option>
                  <option value="">Sub Post 2</option>
                  <option value="">Sub Post 3</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
{/* Subject */}
<div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Subject
                </label>
                <select className="set-dropdown">
                  <option value="">Select Subject</option>
                  <option value="">Mathematics</option>
                  <option value="">Physics</option>
                  <option value="">Computer Science</option>
                  <option value="">English Literature</option>
                </select>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default PersonalDeatils;
