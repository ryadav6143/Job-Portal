import "./EditPersonalDetails.css";
import React, { useState, useRef } from "react";

import profileimg from "../../../../../assets/images/images.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EditPersonalDetails() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleChoosePictureClick = () => {
    fileInputRef.current.click();
  };


  
  return (
    <>
      <form id="myForm" >
        <div style={{ marginTop: "7%" }}>
          <div style={{ paddingLeft: "50px" }}>
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt="Selected Profile"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            )}
            <div>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              {/* Button to trigger file input */}
              <button className="choose-img" onClick={handleChoosePictureClick}>
                Change Profile Picture
              </button>
            </div>
          </div>

          <div
            className="container"
            style={{ marginTop: "30px", paddingLeft: "50px" }}
          >
            <div>
              <div>
                <h5 className="UD-heading">
                  Personal Details &nbsp;{" "}
                  <FontAwesomeIcon
                    style={{ color: "rgb(112 112 112 / 78%)" }}
                    icon={faPen}
                  />
                </h5>
                <p className="UD-subheading">
                  Please fill your information so we can get in touch with you.
                </p>

                {/* Add edit profile button */}
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
                      name=""
                      id=""
                      required
                    ></input>
                    <FontAwesomeIcon
                      className="UD-set-icon"
                      icon={faEnvelope}
                    />
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
                      name=""
                      id=""
                      required
                    ></input>
                    <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* *Post Applied For (If Others, Please Specify) */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span> Post Applied For (If Others, Please
                      Specify)
                    </label>
                    <select name="" className="UD-set-dropdown">
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
                    <select name="" className="UD-set-dropdown">
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
                    <select name="" className="UD-set-dropdown">
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
                    <select name="" className="UD-set-dropdown">
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
                      name=""
                      placeholder="Enter First Name"
                      id=""
                      required
                    ></input>
                    <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
                  </div>
                </div>
                <div className="col-md-4">
                  {/* Middle Name  */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span>Middle Name
                    </label>

                    <input
                      className="UD-set-input"
                      type="text"
                      name=""
                      placeholder="Enter Middle Name "
                      id=""
                      required
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
                      name=""
                      placeholder="Enter last Name"
                      id=""
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
                      name=""
                      placeholder="MM/DD/YYYY "
                      id=""
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
                    <select name="" className="UD-set-dropdown">
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
                      name=""
                      placeholder="Enter Religion"
                      id=""
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
                      name=""
                      placeholder="Enter Category"
                      id=""
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
                      name=""
                      placeholder="Enter Your Marital Status"
                      id=""
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
                      name=""
                      placeholder="Enter Address "
                      id=""
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
                      name=""
                      placeholder="(123) 456 - 7890"
                      id=""
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
                    <select name="" className="UD-set-dropdown">
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
                    <select name="" className="UD-set-dropdown">
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
                    <select name="" className="UD-set-dropdown">
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
                      name=""
                      placeholder="Enter Pin Code "
                      id=""
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <button className="savebtn" type="button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditPersonalDetails;
