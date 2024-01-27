import React, { useState, useEffect } from "react";
import "./EditQualificationForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import candidatesApiService from "../../../candidateService";
function EditQualificationForm() {
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    candidate_educations: [],
  });
  const highSchoolData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 7
  );
  const higherSecondaryData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 8
  );
  const diplomaData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 1
  );
  const graduationData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 2
  );
  const postGraduationData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 3
  );
  const mphilData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 5
  );
  const phdData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 4
  );
  const gateData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 11
  );
  const neetData = data.candidate_educations.find(
    (education) => education.exam_types_master_id === 9
  );
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem("Token");
        accessToken = JSON.parse(accessToken);
        // console.log("accessToken", accessToken.token);
        const fetchedData = await candidatesApiService.getCandidateById(
          accessToken.token
        );
        console.log("response", fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    candidatesApiService
      .getCandidatesCountries()
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleInputChange = (e, dropdownName) => {
    const { value } = e.target;

    // Validate the specific field and update the errors state
    const fieldErrors = validateForm({ ...data, [dropdownName]: value });
    setErrors((prevErrors) => ({ ...prevErrors, ...fieldErrors }));

    setData((prevValues) => ({
      ...prevValues,
      [dropdownName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the entire form
    const formErrors = validateForm(data);
    setErrors(formErrors);

    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data:", data);
      // Perform form submission logic here
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    // Validation logic for each field
    if (!formData.highSchoolData.country) {
      errors.highSchoolDataCountry = "Country is required";
    }

    // Add more validation rules for other fields...

    return errors;
  };

  return (
    <>
      <form id="myForm">
        <div
          className="container"
          style={{ marginTop: "90px", paddingLeft: "50px" }}
        >
          <div>
            <div>
              <h5 className="UD-heading">
                Academic Professional Qualifications &nbsp;{" "}
                <FontAwesomeIcon className="edit-pen-icon" icon={faPen} />
              </h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>

              {/* Add edit button */}
            </div>

            {/* High School */}
            <div>
              <p className="HS-heading">High School</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={highSchoolData ? highSchoolData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={highSchoolData ? highSchoolData.year_start : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *School*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>School
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={highSchoolData ? highSchoolData.institute_name : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={
                      highSchoolData ? highSchoolData.board_university_name : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    onChange={(e) => handleInputChange(e, "highSchoolData")}
                    value={highSchoolData ? highSchoolData.year_end : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Division (First/Second/Third)*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Division (First/Second/Third)
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_division"
                    id=""
                    value={highSchoolData ? highSchoolData.grade_division : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={highSchoolData ? highSchoolData.grade_percent : ""}
                  ></input>
                </div>
              </div>
            </div>

            {/* Higher secondary */}

            <div>
              <p className="HS-heading">Higher secondary</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={
                      higherSecondaryData ? higherSecondaryData.country : ""
                    }
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={
                      higherSecondaryData ? higherSecondaryData.year_start : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *School*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>School
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={
                      higherSecondaryData
                        ? higherSecondaryData.institute_name
                        : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={
                      higherSecondaryData
                        ? higherSecondaryData.board_university_name
                        : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={
                      higherSecondaryData ? higherSecondaryData.year_end : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Division (First/Second/Third)*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Division (First/Second/Third)
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_division"
                    id=""
                    value={
                      higherSecondaryData
                        ? higherSecondaryData.grade_division
                        : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={
                      higherSecondaryData
                        ? higherSecondaryData.grade_percent
                        : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Stream*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Stream
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="stream"
                    id=""
                    value={
                      higherSecondaryData ? higherSecondaryData.stream : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            {/* Diploma */}

            <div>
              <p className="HS-heading">Diploma</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={diplomaData ? diplomaData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={diplomaData ? diplomaData.year_start : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *School*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>School
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={diplomaData ? diplomaData.institute_name : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={diplomaData ? diplomaData.board_university_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={diplomaData ? diplomaData.year_end : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Division (First/Second/Third)*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Division (First/Second/Third)
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_division"
                    id=""
                    value={diplomaData ? diplomaData.grade_division : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={diplomaData ? diplomaData.grade_percent : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Stream*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Stream
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="stream"
                    id=""
                    value={diplomaData ? diplomaData.stream : ""}
                  ></input>
                </div>
              </div>
            </div>

            {/* Graduation*/}

            <div>
              <p className="HS-heading">Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={graduationData ? graduationData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={graduationData ? graduationData.year_start : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* University/ Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>University/ Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={
                      graduationData ? graduationData.board_university_name : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Institute/ College*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Institute/ College
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={graduationData ? graduationData.institute_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Degree Name*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Degree Name
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="degree_types_name"
                    id=""
                    value={
                      graduationData ? graduationData.degree_types_name : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={graduationData ? graduationData.year_end : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Specialization/ Area*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Specialization/ Area
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="specialization_area_1"
                    id=""
                    value={
                      graduationData ? graduationData.specialization_area_1 : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={graduationData ? graduationData.grade_percent : ""}
                  ></input>
                </div>
              </div>
            </div>

            {/* Post Graduation*/}

            <div>
              <p className="HS-heading">Post Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={postGraduationData ? postGraduationData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={
                      postGraduationData ? postGraduationData.year_start : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* University/ Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>University/ Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={
                      postGraduationData
                        ? postGraduationData.board_university_name
                        : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Institute/ College*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Institute/ College
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={
                      postGraduationData
                        ? postGraduationData.institute_name
                        : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Degree Name*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Degree Name
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="degree_types_name"
                    id=""
                    value={
                      postGraduationData
                        ? postGraduationData.degree_types_name
                        : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={
                      postGraduationData ? postGraduationData.year_end : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Specialization/ Area*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Specialization/ Area
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="specialization_area_1"
                    id=""
                    value={
                      postGraduationData
                        ? postGraduationData.specialization_area_1
                        : ""
                    }
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={
                      postGraduationData ? postGraduationData.grade_percent : ""
                    }
                  ></input>
                </div>
              </div>
            </div>

            {/* M. Phil*/}

            <div>
              <p className="HS-heading">M. Phil</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={mphilData ? mphilData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={mphilData ? mphilData.year_start : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* University/ Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>University/ Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={mphilData ? mphilData.board_university_name : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Institute/ College*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Institute/ College
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={mphilData ? mphilData.institute_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Degree Name*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Degree Name
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="degree_types_name"
                    id=""
                    value={mphilData ? mphilData.degree_types_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={mphilData ? mphilData.year_end : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Specialization/ Area*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Specialization/ Area
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="specialization_area_1"
                    id=""
                    value={mphilData ? mphilData.specialization_area_1 : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={mphilData ? mphilData.grade_percent : ""}
                  ></input>
                </div>
              </div>
            </div>

            {/* PhD*/}

            <div>
              <p className="HS-heading">PhD</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    name="country"
                    className="UD-set-dropdown"
                    value={phdData ? phdData.country : ""}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Year of Joining */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year of Joining
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value={phdData ? phdData.year_start : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* University/ Board*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>University/ Board
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="board_university_name"
                    id=""
                    value={phdData ? phdData.board_university_name : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Institute/ College*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Institute/ College
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="institute_name"
                    id=""
                    value={phdData ? phdData.institute_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Degree Name*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Degree Name
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="degree_types_name"
                    id=""
                    value={phdData ? phdData.degree_types_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Passing Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Passing Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_end"
                    id=""
                    value={phdData ? phdData.year_end : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Specialization/ Area*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Specialization/ Area
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="specialization_area_1"
                    id=""
                    value={phdData ? phdData.specialization_area_1 : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Aggregate Percentage/CGPA*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Aggregate Percentage/CGPA
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="grade_percent"
                    id=""
                    value={phdData ? phdData.grade_percent : ""}
                  ></input>
                </div>
              </div>
            </div>

            {/* Qualified Examination*/}

            <div>
              <p className="HS-heading">Qualified Examination</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>
              <div className="col-md-4">
                {/* Gate*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Gate
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder="Yes/No "
                    name=""
                    id=""
                    value={gateData ? gateData.exam_types_master.exam_name : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name=""
                    id=""
                    value={gateData ? gateData.year_end : ""}
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* NET*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>NET
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" Yes/No"
                    name=""
                    id=""
                    value={neetData ? neetData.exam_types_master.exam_name : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Year*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Year
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name=""
                    id=""
                    value={neetData ? neetData.year_end : ""}
                  ></input>
                </div>
              </div>
            </div>

            <div>
              <button className="savebtn" type="button">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditQualificationForm;
