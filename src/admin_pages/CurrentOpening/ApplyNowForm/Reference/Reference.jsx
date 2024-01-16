import React from "react";
import "./Reference.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from 'react'; 
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

function Reference() {
  const [ReferenceData, setReferenceData] = useState({
   
    reference_person_1:'',
    reference_person_2:'',
    ref_org_1:'',
    ref_org_2:'',
    ref_person_position_1:'',
    ref_person_position_2:'',
    hearing_source_about_us:'',
    application_purpose:'',
    ref_person_1_email:'',
    ref_person_2_email:'',
    ref_person_1_contact:'',
    ref_person_2_contact:'',
   
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReferenceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    // Handle file change logic here if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form ReferenceData:', ReferenceData);
  };

  return (

    <>
    <form  onSubmit={handleSubmit}>
      <div className="container">
        <div style={{ marginTop: "20px" }}>
          <div>
            <h5 className="UD-heading">Reference</h5>
            <p className="UD-subheading">
              Please fill your information so we can get in touch with you.
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h5 className="UD-heading">
              Where Did You Hear About Medi-Caps University From ?
            </h5>
            <p className="UD-subheading">
              Friend/ facebook/ Instagram/ LinkedIn/ Faculty Members at
              Medi-Caps
            </p>

            <input
              style={{ width: "95%" }}
              className="UD-set-input"
              type="text"
              placeholder=""
              name="hearing_source_about_us"
              id=""
              onChange={handleChange}
        value={ReferenceData.hearing_source_about_us}
            ></input>
          </div>

          {/* First Reference*/}

          <div>
            <p className="HS-heading"> First Reference</p>
          </div>

          <div className="row" style={{ marginTop: "-30px" }}>
            <div className="col-md-4">
              {/* Name */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Name
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder="Enter  Name "
                  name="reference_person_1"
                  id=""
                  onChange={handleChange}
        value={ReferenceData.reference_person_1}
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
              </div>
            </div>

            <div className="col-md-4">
              {/* Organization */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Organization
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder=" "
                  name="ref_org_1"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_org_1}
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* Position*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Position
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder=" "
                  name="ref_person_position_1"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_person_position_1}
                ></input>
              </div>
            </div>
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
                  name="ref_person_1_email"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_person_1_email}
                  
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
                  name="ref_person_1_contact"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_person_1_contact}
                  
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
              </div>
            </div>
          </div>

          {/* Second Reference*/}

          <div>
            <p className="HS-heading">Second Reference</p>
          </div>

          <div className="row" style={{ marginTop: "-30px" }}>
            <div className="col-md-4">
              {/* Name */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Name
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder="Enter  Name "
                  name="reference_person_2"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.reference_person_2}
                  
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
              </div>
            </div>

            <div className="col-md-4">
              {/* Organization */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Organization
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder=" "
                  name="ref_org_2"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_org_2}
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* Position*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Position
                </label>
                <input
                  className="UD-set-input"
                  type="text"
                  placeholder=" "
                  name="ref_person_position_2"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_person_position_2}
                ></input>
              </div>
            </div>
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
                  name="ref_person_2_email"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.ref_person_2_email}
                  
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
                  name="ref_person_2_contact"
                  id=""
                  
                  onChange={handleChange}
                  value={ReferenceData.ref_person_2_contact}
                ></input>
                <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "-30px" }}>
            <div className="col-md-12">
              {/* Statement of Purpose*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Statement of Purpose
                </label>
                <input
                style={{width:"95%"}}
                  className="UD-set-input"
                  type="text"
                  placeholder=""
                  name="application_purpose"
                  id=""
                  onChange={handleChange}
                  value={ReferenceData.application_purpose}
                ></input>
              </div>
            </div>
          </div>

          {/* Upload Resume*/}

          <div>
            <p className="HS-heading">Upload Resume</p>
          </div>

          <div className="uploadfile-section">
            <label className="SetLabel-Name">
              <span>*</span>Upload your Resume:
            </label>
            <p className="uploadresume-subheading">
              To upload your resume here:(maximum size 2MB, PDF, DOC and DOCX
              format only)
            </p>
            <input
              className="set-choosefile-input"
              type="file"
              placeholder="00 (i.e Years.Months)"
              name="resume_file_link"
              id=""
              // onChange={handleFileChange} 
              accept=".pdf, .doc, .docx" 
              
            ></input>
          </div>

          <div>
            <span className="set-checkbox-span">
              {" "}
              <input className="set-checkbox" type="checkbox" id="" name="" />
              &nbsp; I confirm that the information provided here are true to my
              knowledge
            </span>
          </div>
        </div>
      </div>
      
      <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Reference;
