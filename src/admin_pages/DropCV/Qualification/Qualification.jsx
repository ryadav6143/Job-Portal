import React, { useState, useEffect } from "react";
import "./Qualification.css";
import apiService from "../../../Services/ApiServices";
function Qualification() {
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
    const selectedExam = event.target.value;
    setSelectedExam(selectedExam);
    const degreesForSelectedExam = data
      .filter((item) => item.exam_name === selectedExam)
      .map((item) =>
        item.degree_types_master ? item.degree_types_master.degree_name : null
      );
    setDegrees(degreesForSelectedExam.filter(Boolean));
    setSelectedDegree(degreesForSelectedExam[0]);
  };

  const handleDegreeChange = (event) => {
    const selectedDegree = event.target.value;
    setSelectedDegree(selectedDegree);
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
              </div>
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
                <select
                  name="highest_education_status"
                  className="set-dropdown"
                >
                  <option value="">Select status</option>
                  <option value="">Completed</option>
                  <option value="">Pursuing</option>
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
