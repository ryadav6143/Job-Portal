import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./UserDetails.css";

function UserDetails() {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "others") {
      // If "Others" is selected, show the input field
      setOtherValue("");
    }

    setSelectedOption(selectedValue);
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const [formValues, setFormValues] = useState({
    email: "",
    contact_1: "",
    title_first_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "",
    religion: "",
    cast_category_name: "",
    marital_status: "",
    address_1: "",
    contact_2: "",
    country: "",
    state_province: "",
    pin_code: "",

    // ... (add other fields from the Personal Details section)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);

    // You can also perform any additional actions or API calls here
  };

  return (
    <>
      <form method="post">
        <div className="container">
          <div style={{ marginTop: "20px" }}>
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
                    name="contact_1"
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
                    <span>*</span> Post Applied For
                    <span className="set-others">
                      &nbsp;(If Others, Please Specify)
                    </span>
                  </label>
                  <select
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    className="UD-set-dropdown"
                  >
                    <option value="">Select an option</option>
                    <option value="Post1">Post 1</option>
                    <option value="Post2">Post 2</option>
                    <option value="Post3">Post 3</option>
                    <option value="others">Others</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                  {selectedOption === "others" && (
                    <div>
                      <label style={{marginTop:"20px"}} className="UD-SetLabel-Name">  <span>*</span>Please specify</label>
                      <input
                     className="UD-set-input"
                        type="text"
                        value={otherValue}
                        onChange={handleOtherInputChange}
                      />
                    </div>
                  )}
                 
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
                  <select
                    onChange={handleInputChange}
                    name=""
                    className="UD-set-dropdown"
                    required
                  >
                    <option value="">Select Departments</option>
                    <option value="">Departments 1</option>
                    <option value="">Departments 2</option>
                    <option value="">Departments 3</option>
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
                  <select
                    onChange={handleInputChange}
                    name=""
                    className="UD-set-dropdown"
                    required
                  >
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
                  <select
                    onChange={handleInputChange}
                    name=" title_first_name"
                    className="UD-set-dropdown"
                  >
                    <option value="Select Title">Select Title</option>
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
                  <select
                    onChange={handleInputChange}
                    name="gender"
                    className="UD-set-dropdown"
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
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
                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="country"
                    className="UD-set-dropdown"
                    required
                  >
                    <option value="country">Select country</option>
                    <option value="country 1"> country 1</option>
                    <option value=" country 2"> country 2</option>
                    <option value="country 3"> country 3</option>
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
                  <select
                    onChange={handleInputChange}
                    name="state_province"
                    className="UD-set-dropdown"
                    required
                  >
                    <option value="State">Select State</option>
                    <option value="State 1"> State 1</option>
                    <option value="State 2"> State 2</option>
                    <option value="State 3"> State 3</option>
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
                  <select
                    onChange={handleInputChange}
                    name=""
                    className="UD-set-dropdown"
                    required
                  >
                    <option value="">Select Current Job City</option>
                    <option value="Job City 1"> Job City 1</option>
                    <option value="Job City 2"> Job City 2</option>
                    <option value="Job City 3"> Job City 3</option>
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
                    type="text"
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
        {/* <button  type="submit">
        Submit
      </button> */}
      </form>
    </>
  );
}

export default UserDetails;
