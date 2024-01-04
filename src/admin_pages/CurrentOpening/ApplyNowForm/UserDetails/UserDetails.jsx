import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./UserDetails.css";



function UserDetails() {
  const [formData, setFormData] = useState({
    email: "",
    contact_1: "",
    postAppliedFor: "",
    department: "",
    specialization: "",
    natureOfJob: "",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    religion: "",
    category: "",
    maritalStatus: "",
    address: "",
    contact_2: "",
    country: "",
    state: "",
    currentJobCity: "",
    pinCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Add your logic for submitting data here
  }

  return (
    <>
      <div className="container">
        <div style={{marginTop:"20px"}}>
          <div>
            <h5 className="UD-heading">Personal Details</h5>
            <p className="UD-subheading">
              Please fill your information so we can get in touch with you.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* Email */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Email
                </label>
                <input
                  className="UD-set-input"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faEnvelope} />
              </div>
            </div>

            <div className="col-md-4">
              {/* Phone No. */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Phone Number
                </label>
                <input
                  className="UD-set-input"
                  type="tel"
                  placeholder="(123) 456 - 7890 "
                  name="  contact_1"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
              </div>
            </div>

            <div className="col-md-4">
              {/* *Post Applied For (If Others, Please Specify) */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Post Applied For (If Others, Please Specify)
                </label>
                <select  onChange={handleInputChange} name="" className="UD-set-dropdown">
                  <option value="">Select Post</option>
                  <option value="">Sub Post 1</option>
                  <option value="">Sub Post 2</option>
                  <option value="">Sub Post 3</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* Departments */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Departments
                </label>
                <select  onChange={handleInputChange} name="" className="UD-set-dropdown">
                  <option value="">Select Departments</option>
                  <option value="">Departments</option>
                  <option value="">Departments</option>
                  <option value="">Departments</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>

            <div className="col-md-4">
              {/* Specialization  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Specialization
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder=" "
                  name=""
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* Nature of Job */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Nature of Job
                </label>
                <select  onChange={handleInputChange} name="" className="UD-set-dropdown">
                  <option value="">Nature of Job</option>
                  <option value="">Nature of Job 1</option>
                  <option value="">Nature of Job 2</option>
                  <option value="">Nature of Job 3</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* Title */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Title
                </label>
                <select  onChange={handleInputChange} name=" title_first_name" className="UD-set-dropdown">
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>

            <div className="col-md-4">
              {/* First Name  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> First Name
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
              </div>
            </div>
            <div className="col-md-4">
              {/* Middle Name  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Middle Name
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name=" middle_name"
                  placeholder="Enter Middle Name "
                  id=""
                  onChange={handleInputChange}
          
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* *Last Name  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Last Name
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="last_name"
                  placeholder="Enter last Name"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
              </div>
            </div>

            <div className="col-md-4">
              {/* Date of Birth:  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Date of Birth:
                </label>

                <input
                  className="UD-set-input"
                  type="date"
                  name="dob"
                  placeholder="MM/DD/YYYY "
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* *Gender*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Gender
                </label>
                <select  onChange={handleInputChange} name="gender" className="UD-set-dropdown">
                  <option value="Mr.">Male</option>
                  <option value="Mrs.">Female</option>
                  <option value="Ms.">Others</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* *Religion */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Religion
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="religion"
                  placeholder="Enter Religion"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* *Category  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Category
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="cast_category_name"
                  placeholder="Enter Category"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/**Marital Status */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Marital Status
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="marital_status"
                  placeholder="Enter Your Marital Status"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              {/* *Current address */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Current address 
                </label>

                <input
                  className="UD-set-input"
                  type="text"
                  name="address_1"
                  placeholder="Enter Address "
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* *Alternate Contact Number  */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Alternate Contact Number
                </label>

                <input
                  className="UD-set-input"
                  type="tel"
                  name="contact_2"
                  placeholder="(123) 456 - 7890"
                  id=""
                  onChange={handleInputChange}
                  required
                ></input><FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
              </div>
            </div>

            <div className="col-md-4">
              {/* *Country */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Country
                </label>
                <select  onChange={handleInputChange} name="country" className="UD-set-dropdown">
                  <option value="">Select country</option>
                  <option value=""> country</option>
                  <option value=""> country</option>
                  <option value=""> country</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>
          </div>

          <div className="row">
           

            <div className="col-md-4">
              {/* *State */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>State
                </label>
                <select  onChange={handleInputChange} name="state_province" className="UD-set-dropdown">
                  <option value="">Select State</option>
                  <option value=""> State</option>
                  <option value=""> State</option>
                  <option value=""> State</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>

            <div className="col-md-4">
              {/**Current Job City */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Current Job City
                </label>
                <select  onChange={handleInputChange} name="" className="UD-set-dropdown">
                  <option value="">Select Current Job City</option>
                  <option value=""> Job City</option>
                  <option value=""> Job City</option>
                  <option value=""> Job City</option>
                </select>
                <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
              </div>
            </div>

            <div className="col-md-4">
              {/* **Pin Code */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Pin Code
                </label>

                <input
                  className="UD-set-input"
                  type="number"
                  name="pin_code"
                  placeholder="Enter Pin Code "
                  id=""
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
          </div>

        </div>
      </div>
      <button onClick={handleSubmit} type="submit">Submit</button>
    
    </>
  );
}

export default UserDetails;
