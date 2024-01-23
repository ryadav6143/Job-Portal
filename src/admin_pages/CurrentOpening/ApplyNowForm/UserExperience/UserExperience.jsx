import React from "react";
import "./UserExperience.css";
import plusicon from "../../../../assets/logos/plus.png";

function UserExperience({ formValues, setFormValues, errors, setErrors }) {
  const handleAddExperience = (e) => {
    e.preventDefault();
    setFormValues((prevExperience) => ({
      UserDetails: {
        ...prevExperience.UserDetails,
        experiences: [
          ...prevExperience.UserDetails.experiences,
          {
            company_experience_name: "",
            designation: "",
            gross_pay: "",
            exp_work_from: "",
            exp_work_to: "",
          },
        ],
      },
    }));
  };

  const handleInputChange = (index, event) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : " ! This field is required",
    }));
    const { name, value } = event.target;
    setFormValues((prevExperience) => ({
      UserDetails: {
        ...prevExperience.UserDetails,
        experiences: prevExperience.UserDetails.experiences.map(
          (experience, i) =>
            i === index ? { ...experience, [name]: value } : experience
        ),
      },
    }));
  };

  const handleTotalExperienceChange = (event) => {
    setErrors({
      ...errors,
      total_academic_exp: "",
      total_industrial_exp: "",
      accommodation: "",
      transportation: "",
      food: "",
      mediclaim: "",
      others: "",
    });
    const { name, value } = event.target;
    setFormValues((prevExperience) => ({
      UserDetails: {
        ...prevExperience.UserDetails,
        [name]: value,
      },
    }));
  };
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  return (
    <>
      <form method="post">
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <div>
              <h5 className="UD-heading">
                Experience
                <button onClick={handleAddExperience} className="plus-buttons">
                  <img src={plusicon} />
                </button>
              </h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* Experience */}
            {formValues.experiences.map((experience, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col-md-4">
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
                    <span className="error-message">
                      {errors.company_experience_name}
                    </span>
                  </div>

                  <div className="col-md-4">
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
                    <span className="error-message">{errors.designation}</span>
                  </div>

                  <div className="col-md-4">
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
                    <span className="error-message">{errors.gross_pay}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
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
                    <span className="error-message">{errors.exp_work_from}</span>
                  </div>

                  <div className="col-md-4">
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
                    <span className="error-message">{errors.exp_work_to}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Experience */}

            {/* Total Experience */}
            <div style={{ marginTop: "40px" }}>
              <p className="HS-heading">Total Experience</p>
            </div>

            <div className="row" style={{ marginTop: "-14px" }}>
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
                    value={formValues.total_academic_exp}
                    onChange={handleTotalExperienceChange}
                  ></input>
                </div>
                <span className="error-message">
                  {errors.total_academic_exp}
                </span>
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
                    value={formValues.total_industrial_exp}
                    onChange={handleTotalExperienceChange}
                  ></input>
                </div>
                <span className="error-message">
                  {errors.total_industrial_exp}
                </span>
              </div>
            </div>

            {/* Other Benefits */}
            <div style={{ marginTop: "40px" }}>
              <p className="HS-heading">Other Benefits</p>
            </div>

            <div className="row" style={{ marginTop: "-14px" }}>
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
                    value={formValues.accommodation}
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
                    value={formValues.transportation}
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
                    value={formValues.food}
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
                    value={formValues.mediclaim}
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
                    value={formValues.others}
                    onChange={handleTotalExperienceChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button type="submit">
          Submit
        </button> */}
      </form>
    </>
  );
}

export default UserExperience;
