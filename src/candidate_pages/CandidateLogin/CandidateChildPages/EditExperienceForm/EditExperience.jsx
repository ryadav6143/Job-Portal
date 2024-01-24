import React, { useState, useEffect } from 'react';
import "./EditExperience.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import plusicon from "../../../../assets/logos/plus.png"
import candidatesApiService from '../../../candidateService';
function EditExperience() {
  const [educations, setEducations] = useState({

    candidate_experiences: [],
    total_academic_exp: "",
    total_industrial_exp: "",
    benefits_accommodation: "",
    benefits_transportation: "",
    benefits_others: "",
    benefits_food: "",
    benefits_mediclaim: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        const fetchedData = await candidatesApiService.getCandidateById(accessToken.token);
        console.log("response", fetchedData);

        if (Array.isArray(fetchedData.candidate_experiences)) {
          setEducations({
            ...fetchedData,
            candidate_experiences: [...fetchedData.candidate_experiences],
          });
        } else {
          console.error('Fetched data is not as expected:', fetchedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddEducation = () => {
    setEducations((prevEducations) => ({
      ...prevEducations,
      candidate_experiences: [...prevEducations.candidate_experiences, {}],
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...educations.candidate_experiences];
    updatedExperiences[index][field] = value;
    setEducations({
      ...educations,
      candidate_experiences: updatedExperiences,
    });
  };

  const formatDateFrom = (dateString) => {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject.getTime())) {
      return ''; // Handle invalid dates
    }
    const year = dateObject.getFullYear().toString();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const formatDateToDisplay = (dateString) => {
    if (!dateString) {
      return ''; // Handle empty dates
    }
      const [day, month, year] = dateString.split('/');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  return (
    <>
      <form id='myForm'>
        <div className="container" style={{ marginTop: "90px", paddingLeft: "50px" }}>
          <div>
            <div>
              <h5 className="UD-heading">Experience &nbsp; <FontAwesomeIcon className="edit-pen-icon" icon={faPen} />
                <button onClick={handleAddEducation} style={{ marginRight: "30px" }} className="plus-buttons">
                  <img src={plusicon} />

                </button></h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* Experience */}

            {educations.candidate_experiences.map((experience, index) => (
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
                        value={experience.company_experience_name}
                        onChange={(e) => handleExperienceChange(index, "company_experience_name", e.target.value)}
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
                        value={experience.designation}
                        onChange={(e) => handleExperienceChange(index, "designation", e.target.value)}
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
                        value={experience.gross_pay}
                        onChange={(e) => handleExperienceChange(index, "gross_pay", e.target.value)}
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
                        placeholder="dd/mm/yyyy"
                        name="exp_work_from"
                        id=""
                        value={formatDateFrom(experience.exp_work_from)}
                        onChange={(e) => handleExperienceChange(index, "exp_work_from", e.target.value)}
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
                        placeholder="dd/mm/yyyy"
                        name="exp_work_to"
                        id=""
                        value={formatDateToDisplay(experience.exp_work_to)}
                        onChange={(e) => handleExperienceChange(index, "exp_work_to", e.target.value)}
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
                    value={educations.total_academic_exp}
                    onChange={(e) => handleExperienceChange("total_academic_exp", e.target.value)}
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
                    value={educations.total_industrial_exp}
                    onChange={(e) => handleExperienceChange("total_industrial_exp", e.target.value)}
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
                {/* benefits_accommodation */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>benefits_accommodation
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="benefits_accommodation"
                    id=""
                    value={educations.benefits_accommodation}
                    onChange={(e) => handleExperienceChange("benefits_accommodation", e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* benefits_transportation*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>benefits_transportation
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="benefits_transportation"
                    id=""
                    value={educations.benefits_transportation}
                    onChange={(e) => handleExperienceChange("benefits_transportation", e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/*benefits_food*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>benefits_food
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="benefits_food"
                    id=""
                    value={educations.benefits_food}
                    onChange={(e) => handleExperienceChange("benefits_food", e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row" >
              <div className="col-md-4">
                {/* benefits_mediclaim */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>benefits_mediclaim
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="benefits_mediclaim"
                    id=""
                    value={educations.benefits_mediclaim}
                    onChange={(e) => handleExperienceChange("benefits_mediclaim", e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* benefits_others*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>benefits_others
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="exp_benefits_others"
                    id=""
                    value={educations.benefits_others}
                    onChange={(e) => handleExperienceChange("exp_benefits_others", e.target.value)}
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