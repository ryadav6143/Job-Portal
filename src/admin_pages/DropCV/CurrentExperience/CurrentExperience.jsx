import { useState } from "react";
import React  from "react";
import "./CurrentExperience.css";
import axios from 'axios';
function CurrentExperience({formData, setFormData}) {

  
  const [isFresher, setIsFresher] = useState(false);
// const [formData, setFormData] = useState(null);
  const handleCheckboxChange = () => {
    setIsFresher(!isFresher);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      personalDetails: {
        ...prevFormData.personalDetails,
        [name]: value,
      },
    }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   setFormData((prevFormData) => ({
  //     // ...prevFormData,
  //     personalDetails: {
  //       ...prevFormData.personalDetails,
  //       candidate_cv: file,
  //     },
  //   }));
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    // Check if the file has a valid extension
    const allowedExtensions = ["pdf", "doc", "docx"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      // Display an alert message for invalid file format
      alert("Invalid file format. Please upload a PDF, DOC, or DOCX file.");
      // Optionally, you can clear the input field
      e.target.value = null;
      return;
    }
  
    setFormData((prevFormData) => ({
      personalDetails: {
        ...prevFormData.personalDetails,
        candidate_cv: file,
      },
    }));
  };
  return (
    <>
    <div className="container">
      <form   method="post" >
      <div className="CE-form">
        <div>
          <h5 className="CE-heading">Current Experience / Upload Resume</h5>
          <p className="CE-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>
        <div>
          <span className="set-checkbox-span">
            {" "}
            <input
              className="set-checkbox"
              type="checkbox"
              id=""
              name=""
              checked={isFresher}
              onChange={handleCheckboxChange}
            />
            &nbsp; Select if you are applying as a Fresher
          </span>
        </div>
        {!isFresher && (
            <>
        
          <div className="row">
            <div className="col-md-6">
              {/* Total Experience */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Total Experience
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder="00 (i.e Years.Months)"
                  name="total_experience"
                  id=""
                  onChange={handleInputChange}
                  value={formData.total_experience}
                  
            
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              {/* Total Research */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Total Research
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  name="total_research_exp"
                  id=""
                  onChange={handleInputChange}
                  value={formData.total_research_exp}
               
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Total Industry */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Total Industry
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder="00 (i.e Years.Months)"
                  name="total_industrial_exp"
                  id=""
                  onChange={handleInputChange}
                  value={formData.total_industrial_exp}
           
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              {/* Current Organization */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Current Organization
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  name="current_organization"
                  id=""
                  onChange={handleInputChange}
                  value={formData.current_organization}
            
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* Designation */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span> Current Designation
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  name="current_designation"
                  id=""
                  onChange={handleInputChange}
                  value={formData.current_designation}
              
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              {/* Salary */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Current Salary
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  name="current_salary"
                  id=""
                  onChange={handleInputChange}
                  value={formData.current_salary}
                
                ></input>
              </div>
            </div>
          </div>
      

          </>
          )}

        <div className="uploadfile-section">
          <label className="SetLabel-Name">
            <span>*</span>Upload your Resume:
          </label>
          <p className="uploadresume-subheading">
            To upload your resume here:(maximum size 2MB, PDF, DOC and DOCX
            format only)
          </p>
          {/* <input type="file" name="candidate_cv" onChange={handleFileChange} /> */}
          <input type="file" name="candidate_cv" onChange={handleFileChange} accept=".pdf, .doc, .docx"  required/>

        </div>
      </div>
      </form>
      </div>
    </>
  );
}

export default CurrentExperience;
