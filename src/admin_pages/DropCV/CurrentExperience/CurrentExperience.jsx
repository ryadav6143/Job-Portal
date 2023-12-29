import { useState } from "react";
import React  from "react";
import "./CurrentExperience.css";

function CurrentExperience() {

  
  const [isFresher, setIsFresher] = useState(false);
  const [formData, setFormData] = useState({
    total_experience: "",
    total_research_exp: "",
    total_industrial_exp: "",
    current_organization: "",
    current_designation: "",
    current_salary: "",
    resume_file_link: "",
  });
  const handleCheckboxChange = () => {
    setIsFresher(!isFresher);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <>
    <div className="container">
      <form  onSubmit={handleSubmit} method="post">
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
                  
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
          <input
            className="set-choosefile-input"
            type="file"
            placeholder="00 (i.e Years.Months)"
            name="resume_file_link"
            id=""
            
           
          ></input>
        </div>
      </div>
      <button type="submit" className="submit-button">
            Submit
          </button>
      </form>
      </div>
    </>
  );
}

export default CurrentExperience;
