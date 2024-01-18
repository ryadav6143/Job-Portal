import React, { useState } from 'react';
import "./EditExperience.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import plusicon from "../../../../assets/logos/plus.png"

function EditExperience() {
  const [educations, setEducations] = useState([{}]);

  const handleAddEducation = () => {
    setEducations([...educations, {}]);
  };
  return (
    <>
    <form id='myForm'>
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px"}}>
      <div>
        <div>
          <h5 className="UD-heading">Experience &nbsp; <FontAwesomeIcon   className="edit-pen-icon"icon={faPen} />
          <button     onClick={handleAddEducation} style={{marginRight:"30px"}} className="plus-buttons">
          <img src={plusicon} />
            
            </button></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        {/* Experience */}

        {educations.map((education, index) => (
        <div key={index}>

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
                name="company_experience_name"
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
                name="designation"
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
                
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name="gross_pay"
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
                name="exp_work_from"
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
                name="exp_work_to"
                id=""
                required
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

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
                name="total_academic_exp"
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
                name="total_industrial_exp"
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
                name="accommodation"
                id=""
                
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
                name="transportation"
                id=""
                
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
                name="food"
                id=""
              
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
                name="mediclaim"
                id=""
                
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
                name="exp_others"
                id=""
                
              ></input>
            </div>
          </div>
        </div>

        <div>
  <button className="savebtn" type="button">Save Changes</button>
</div>
      </div>
    </div>
    </form>
  </>
  )
}

export default EditExperience