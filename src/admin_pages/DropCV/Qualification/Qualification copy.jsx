import React, { useState, useEffect } from "react";
import "./Qualification.css";
import axios from "axios";
function Qualification() {
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://192.168.29.155:8090/v1/api/examTypeMaster')
      .then(response => {
        setData(response.data);

        // Extract unique exam names for the first dropdown
        const uniqueExams = Array.from(new Set(response.data.map(item => item.exam_name)));
        setExamTypes(uniqueExams);

        // Set the default selected exam (if needed)
        setSelectedExam(uniqueExams[0]);

        // Extract degree names for the second dropdown based on the selected exam
        const degreesForSelectedExam = response.data
          .filter(item => item.exam_name === uniqueExams[0])
          .map(item => item.degree_types_master ? item.degree_types_master.degree_name : null);

        setDegrees(degreesForSelectedExam.filter(Boolean)); // Remove null values

        // Set the default selected degree (if needed)
        setSelectedDegree(degreesForSelectedExam[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle changes in the first dropdown
  const handleExamChange = (event) => {
    const selectedExam = event.target.value;
    setSelectedExam(selectedExam);

    // Extract degree names for the second dropdown based on the selected exam
    const degreesForSelectedExam = data
      .filter(item => item.exam_name === selectedExam)
      .map(item => item.degree_types_master ? item.degree_types_master.degree_name : null);

    setDegrees(degreesForSelectedExam.filter(Boolean)); // Remove null values

    // Set the default selected degree (if needed)
    setSelectedDegree(degreesForSelectedExam[0]);
  };

  // Handle changes in the second dropdown
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
      <select value={selectedExam} onChange={handleExamChange}>
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
      <select value={selectedDegree} onChange={handleDegreeChange}>
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
                <select name="highest_education_status" className="set-dropdown">
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
