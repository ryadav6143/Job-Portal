import React from "react";
import "./CurrentExperience.css";

function CurrentExperience() {
  return (
    <>
    <div className="container">
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
              value=""
            />
            &nbsp; Select if you are applying as a Fresher
          </span>
        </div>

        
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
                  <span></span>Designation
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  required
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              {/* Salary */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span></span>Salary
                </label>
                <input
                  className="set-input"
                  type="text"
                  placeholder=""
                  required
                ></input>
              </div>
            </div>
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
            required
          ></input>
        </div>
      </div>
      </div>
    </>
  );
}

export default CurrentExperience;
