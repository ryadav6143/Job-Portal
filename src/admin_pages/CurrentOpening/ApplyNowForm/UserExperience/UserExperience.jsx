import React, { useState } from 'react';
import "./UserExperience.css";

function UserExperience() {


  const [allExperience, setallExperience] = useState({
    experiences: [
      {
        company_experience_name: '',
        designation: '',
        gross_pay: '',
        exp_work_from: '',
        exp_work_to: ''
      }
    ],
    total_academic_exp: '',
    total_industrial_exp: '',
    accommodation: '',
    transportation: '',
    food: '',
    mediclaim: '',
    others: ''
  });

  const handleAddExperience = () => {
    setallExperience(prevExperience => ({
      ...prevExperience,
      experiences: [...prevExperience.experiences, {
        company_experience_name: '',
        designation: '',
        gross_pay: '',
        exp_work_from: '',
        exp_work_to: ''
      }]
    }));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setallExperience(prevExperience => ({
      ...prevExperience,
      experiences: prevExperience.experiences.map((experience, i) =>
        i === index ? { ...experience, [name]: value } : experience
      )
    }));
  };
 
  const handleTotalExperienceChange = (event) => {
    const { name, value } = event.target;
    setallExperience(prevExperience => ({
      ...prevExperience,
      [name]: value
    }));
  };

  const handleOtherBenefitsChange = (event) => {
    const { name, value } = event.target;
    setallExperience(prevExperience => ({
      ...prevExperience,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Values:', allExperience);
  };



  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <div>
              <h5 className="UD-heading">Experience <button onClick={handleAddExperience} className="plus-button">+</button></h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* Experience */}
            {allExperience.experiences.map((experience, index) => (
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
                        value={experience.company_experience_name}
                        onChange={(e) => handleInputChange(index, e)}

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
                        value={experience.designation}
                        onChange={(e) => handleInputChange(index, e)}

                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* *Current Gross Pay (Per Month) */}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span>*</span>Current Gross Pay (Per Month)
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="gross_pay"
                        value={experience.gross_pay}
                        onChange={(e) => handleInputChange(index, e)}

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
                        value={experience.exp_work_from}
                        onChange={(e) => handleInputChange(index, e)}

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
                        value={experience.exp_work_to}
                        onChange={(e) => handleInputChange(index, e)}

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
                    value={allExperience.total_academic_exp}
onChange={handleTotalExperienceChange}


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
                    value={allExperience.total_industrial_exp}
                    onChange={handleTotalExperienceChange}
                    

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
                    value={allExperience.accommodation}
                    onChange={handleTotalExperienceChange}
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
                    value={allExperience.transportation}
                    onChange={handleTotalExperienceChange}
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
                    value={allExperience.food}
                    onChange={handleTotalExperienceChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
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
                    value={allExperience.mediclaim}
                    onChange={handleTotalExperienceChange}
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
                    name="others"
                    value={allExperience.others}
                    onChange={handleTotalExperienceChange}
                  ></input>
                </div>
              </div>
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

export default UserExperience;
