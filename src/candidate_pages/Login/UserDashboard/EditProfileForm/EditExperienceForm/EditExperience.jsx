import React from 'react'
import "./EditExperience.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from '@fortawesome/free-solid-svg-icons';

function EditExperience() {
  return (
    <>
    <div className="container">
      <div>
        <div>
          <h5 className="UD-heading">Experience &nbsp; <FontAwesomeIcon style={{color:"rgb(112 112 112 / 78%)"}} icon={faPen} /></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        {/* Experience */}

        <div className="row">
          <div className="col-md-4">
            {/* *Name of Institute / Company */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Name of Institute / Company
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
            {/* *Designation */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Designation
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
            {/* *Current Gross Pay (Per Month)*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Current Gross Pay (Per Month){" "}
                <button className="plus-button">+</button>
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
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* *Date From*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Date From
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder=" MM/DD/YYYY"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* *Date To */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Date To
              </label>
              <input
                className="UD-set-input"
                type="date"
                placeholder="MM/DD/YYYY "
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        {/* Total Experience */}

        <div>
          <p className="HS-heading">Total Experience</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* *Academic Experience */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Academic Experience
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="In Years"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* *Industry Experience*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span>*</span>Industry Experience
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="In Years"
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        {/* Other Benefits */}

        <div>
          <p className="HS-heading">Other Benefits</p>
        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-4">
            {/* Accommodation */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Accommodation
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Transportation*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Transportation
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/*Food*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Food
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="col-md-4">
            {/* Mediclaim */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Mediclaim
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Others*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Others
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
                required
              ></input>
            </div>
          </div>
        </div>

        <div>
  <button className="savebtn" type="button">Save Changes</button>
</div>
      </div>
    </div>
  </>
  )
}

export default EditExperience