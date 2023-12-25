import React from "react";
import "./Qualification.css";

function Qualification() {
  return (
    <>
    <div className="container">
      <div className="qualification-form">
        <div>
          <h5 className="qualification-heading">
            Qualification / Highest Qualification
          </h5>
          <p className="qualification-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        
          <div className="row">
            <div className="col-md-6">
              {/* *Exam Type */}

              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Exam Type
                </label>
                <select name="degree_type_master_id" className="set-dropdown">
                  <option value="">Select Type</option>
                  <option value="">Type 1</option>
                  <option value="">Type 2</option>
                  <option value="">Type 3</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              {/* Degree/Diploma Certificate */}
              <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Degree/Diploma Certificate
                </label>
                <select name="degree_type_master_id" className="set-dropdown">
                  <option value="">Select Degree</option>
                  <option value="">Degree 1</option>
                  <option value="">Degree 2</option>
                  <option value="">Degree 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-md-6">
  {/* *Status */}

  <div className="form-section">
                <label className="SetLabel-Name">
                  <span>*</span>Status
                </label>
                <select name="highest_education_status" className="set-dropdown">
                  <option value="">Select status</option>
                  <option value="">status 1</option>
                  <option value="">status 2</option>
                  <option value="">status 3</option>
                </select>
              </div>
          </div>

          </div>
        </div>

        
      </div>
    </>
  );
}

export default Qualification;
