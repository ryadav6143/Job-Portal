import React, { useState, useEffect } from "react";
import "./Qualification.css";
import apiService from "../../../Services/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Qualification({ formData, setFormData, errors, setErrors }) {
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    apiService
      .getExamTypes()
      .then((response) => {
        setData(response.data);
        const uniqueExams = Array.from(
          new Set(response.data.map((item) => item.exam_name))
        );
        setExamTypes(uniqueExams);
        setSelectedExam(uniqueExams[0]);
        const degreesForSelectedExam = response.data
          .filter((item) => item.exam_name === uniqueExams[0])
          .map((item) =>
            item.degree_types_master
              ? item.degree_types_master.degree_name
              : null
          );
        setDegrees(degreesForSelectedExam.filter(Boolean));
        setSelectedDegree(degreesForSelectedExam[0]);
        setSelectedExam("");
        setSelectedDegree("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleExamChange = (event) => {
    setErrors({
      ...errors,
      qualification: "",
    });
    const selectedExam = event.target.value;
    const selectedExamName = event.target.value;
    setSelectedExam(selectedExam);
    const selectedExamObject = data.find(
      (item) => item.exam_name === selectedExamName
    );
    const selectedExamId = selectedExamObject ? selectedExamObject.id : "";
    setSelectedExam(selectedExamName);
    // Extract degree names for the second dropdown based on the selected exam
    const degreesForSelectedExam = data
      .filter((item) => item.exam_name === selectedExam)
      .map((item) =>
        item.degree_types_master ? item.degree_types_master.degree_name : null
      );

    setDegrees(degreesForSelectedExam.filter(Boolean));

    // Set the default selected degree (if needed)
    setSelectedDegree(degreesForSelectedExam[0]);
    setFormData((prevFormData) => ({
      personalDetails: {
        ...prevFormData.personalDetails,
        educations: [
          {
            ...prevFormData.personalDetails.educations[0], // Update the first education object
            exam_types_master_id: selectedExamId,
          },
          // ... you can add more education objects if needed
        ],

        // Add additional fields related to category if needed
      },
    }));
  };

  const handleDegreeChange = (event) => {
    setErrors({
      ...errors,
      qualification: "",
    });
    const selectedDegreeName = event.target.value;

    // Find the corresponding object from data based on the selected degree name
    const selectedDegreeObject = data.find(
      (item) =>
        item.degree_types_master &&
        item.degree_types_master.degree_name === selectedDegreeName
    );

    // Now, use the selectedDegreeObject to get the id property
    const selectedDegreeId = selectedDegreeObject
      ? selectedDegreeObject.degree_types_master.id
      : "";

    setSelectedDegree(selectedDegreeName);

    setFormData((prevFormData) => ({
      personalDetails: {
        ...prevFormData.personalDetails,
        educations: [
          {
            ...prevFormData.personalDetails.educations[0], // Update the first education object
            degree_types_master_id: selectedDegreeId,
          },
          // ... you can add more education objects if needed
        ],

        // Add additional fields related to category if needed
      },
    }));
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const handleDropdownChange = (event) => {
    setErrors({
      ...errors,
      qualification: "",
    });
    const selectedStatus = event.target.value;

    // Update the formData state
    setFormData((prevFormData) => ({
      personalDetails: {
        ...prevFormData.personalDetails,
        educations: [
          {
            ...prevFormData.personalDetails.educations[0], // Update the first education object
            degree_status: selectedStatus,
          },
          // ... you can add more education objects if needed
        ],
      },
    }));
  };

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

          <form method="post">
            <div className="row">
              <div className="col-md-6">
                {/* *Exam Type */}

                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Exam Type
                  </label>
                  <select
                    value={selectedExam}
                    onChange={handleExamChange}
                    className="set-dropdown"
                  >
                    <option value="">Select Type</option>
                    {examTypes.map((exam, index) => (
                      <option key={`exam-${index}`} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.qualification}</span>
              </div>

              <div className="col-md-6">
                {/* Degree/Diploma Certificate */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Degree/Diploma Certificate
                  </label>
                  <select
                    value={selectedDegree}
                    onChange={handleDegreeChange}
                    className="set-dropdown"
                  >
                    <option value="">Select Degree</option>
                    {degrees.map((degree, index) => (
                      <option key={`degree-${index}`} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.qualification}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* *Status */}

                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Status
                  </label>
                  <select
                    name="degree_status"
                    className="set-dropdown"
                    onChange={handleDropdownChange}
                    value={selectedOption}
                  >
                    <option value="">Select status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pursuing">Pursuing</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <span className="error-message">{errors.qualification}</span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Qualification;
