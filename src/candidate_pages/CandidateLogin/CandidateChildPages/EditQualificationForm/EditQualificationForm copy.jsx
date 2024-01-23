import React, { useState, useEffect } from 'react';
import "./EditQualificationForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

import { faPen } from '@fortawesome/free-solid-svg-icons';
import candidatesApiService from '../../../candidateService';
function EditQualificationForm() {

  const [data, setData] = useState({
    candidate_educations: [
      {
        exam_types_master_id: 7,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
      }, // educations[0] mein highSchool ka data
      {
        exam_types_master_id: 8,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
        stream: '',
      }, // educations[1] mein higherSecondary ka data
      {
        exam_types_master_id: 2,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[2] mein Graduation ka data
      {
        exam_types_master_id: 3,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[3] mein PostGraduation ka data
      {
        exam_types_master_id: 5,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[4] mein MPHIL ka data
      {
        exam_types_master_id: 4,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
        specialization_area_2: '',
        specialization_area_3: '',
      }, // educations[5] mein Phd ka data
      {
        exam_types_master_id: 11,

        year_end: '',
      }, // educations[6] mein Gate ka data
      {
        exam_types_master_id: 9,

        year_end: '',
      },// educations[7] mein Neet ka data
      {
        exam_types_master_id: 1,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
        stream: '',
      },// educations[8] mein Diploma ka data
    ],
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        console.log('accessToken', accessToken.token);

        const fetchedData = await candidatesApiService.getCandidateById(accessToken.token);
        console.log('response', fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
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
    setData((prevValues) => ({
      ...prevValues,
      [dropdownName]: value,
    }));
  };

  // const handleFieldChange = (fieldName, value) => {
  //   let formattedValue = value;
  //   if (fieldName === 'dob') {
  //     const dateObject = new Date(value);
  //     const year = dateObject.getFullYear();
  //     const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  //     const day = dateObject.getDate().toString().padStart(2, '0');
  //     formattedValue = `${year}-${month}-${day}`;
  //   }

  //   setData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: formattedValue,
  //   }));
  // };

  const handleHighSchoolChange = (fieldName, value) => {
      setData((prevData) => {
      const updatedEducations = [...prevData.candidate_educations];
      if (updatedEducations && updatedEducations.length > 7) {
        updatedEducations[7] = {
          ...updatedEducations[7],
          [fieldName]: value,
        };
      }
      return {
        ...prevData,
        candidate_educations: updatedEducations,
      };
    });
  };
  const handleHigherSecondaryChange = (fieldName, value) => {
      setData((prevData) => {
      const updatedEducations = [...prevData.candidate_educations];
      if (updatedEducations && updatedEducations.length > 6) {
        updatedEducations[6] = {
          ...updatedEducations[6],
          [fieldName]: value,
        };
       
      }
      return {
        ...prevData,
        candidate_educations: updatedEducations,
      };
    });
  };
  const handleDiplomaChange = (fieldName, value) => {
      setData((prevData) => {
      const updatedEducations = [...prevData.candidate_educations];
      if (updatedEducations && updatedEducations.length > 0) {
        updatedEducations[0] = {
          ...updatedEducations[0],
          [fieldName]: value,
        };
       
      }
      return {
        ...prevData,
        candidate_educations: updatedEducations,
      };
    });
  };
  const handleGraduationChange = (fieldName, value) => {
      setData((prevData) => {
      const updatedEducations = [...prevData.candidate_educations];
      if (updatedEducations && updatedEducations.length > 5) {
        updatedEducations[5] = {
          ...updatedEducations[5],
          [fieldName]: value,
        };
       
      }
      return {
        ...prevData,
        candidate_educations: updatedEducations,
      };
    });
  };
  const handlePhdChange = (fieldName, value) => {
      setData((prevData) => {
      const updatedEducations = [...prevData.candidate_educations];
      if (updatedEducations && updatedEducations.length > 8) {
        updatedEducations[8] = {
          ...updatedEducations[8],
          [fieldName]: value,
        };
       
      }
      return {
        ...prevData,
        candidate_educations: updatedEducations,
      };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', data);
    // Add any additional logic for form submission or data processing here
  };

  return (
    <>
      <form id="myForm">
        <div className="container" style={{ marginTop: "90px", paddingLeft: "50px" }}>
          <div>
            <div>
              <h5 className="UD-heading">Academic Professional Qualifications &nbsp; <FontAwesomeIcon className="edit-pen-icon" icon={faPen} /></h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>

              {/* Add edit button */}
            </div>

            {/* High School */}
            <div>
              <p className='HS-heading'>High School</p>
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
                    onChange={(e) => handleHighSchoolChange('country', e.target.value)}
                    value={data.candidate_educations[7].country}

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
                    onChange={(e) => handleHighSchoolChange('year_start', e.target.value)}
                    value={data.candidate_educations[7].year_start}

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
                    onChange={(e) => handleHighSchoolChange('institute_name', e.target.value)}
                    value={data.candidate_educations[7].institute_name}
                    
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
                    onChange={(e) => handleHighSchoolChange('board_university_name', e.target.value)}
                    value={data.candidate_educations[7].board_university_name}
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
                    onChange={(e) => handleHighSchoolChange('year_end', e.target.value)}
                    value={data.candidate_educations[7].year_end}
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
                    onChange={(e) => handleHighSchoolChange('grade_division', e.target.value)}
                    value={data.candidate_educations[7].grade_division}                
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
                    onChange={(e) => handleHighSchoolChange('grade_percent', e.target.value)}
                    value={data.candidate_educations[7].grade_percent}
                  ></input>

                </div>
              </div>

            </div>

            {/* Higher secondary */}

            <div>
              <p className='HS-heading'>Higher secondary</p>
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
                    onChange={(e) => handleHigherSecondaryChange('country', e.target.value)}
                    value={data.candidate_educations[6].country}
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

                    onChange={(e) => handleHigherSecondaryChange('year_start', e.target.value)}
                    value={data.candidate_educations[6].year_start}
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
                    onChange={(e) => handleHigherSecondaryChange('institute_name', e.target.value)}
                    value={data.candidate_educations[6].institute_name}
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
                    onChange={(e) => handleHigherSecondaryChange('board_university_name', e.target.value)}
                    value={data.candidate_educations[6].board_university_name}                
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
                    onChange={(e) => handleHigherSecondaryChange('year_end', e.target.value)}
                    value={data.candidate_educations[6].year_end}
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
                    onChange={(e) => handleHigherSecondaryChange('grade_division', e.target.value)}
                    value={data.candidate_educations[6].grade_division}
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
                    onChange={(e) => handleHigherSecondaryChange('grade_percent', e.target.value)}
                    value={data.candidate_educations[6].grade_percent}
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
                    onChange={(e) => handleHigherSecondaryChange('stream', e.target.value)}
                    value={data.candidate_educations[6].stream}
                  ></input>

                </div>
              </div>

            </div>


            {/* Diploma */}

            <div>
              <p className='HS-heading'>Diploma</p>
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
                    onChange={(e) => handleDiplomaChange('country', e.target.value)}
                    value={data.candidate_educations[0].country}

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
                    onChange={(e) => handleDiplomaChange('year_start', e.target.value)}
                    value={data.candidate_educations[0].year_start}

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
                    onChange={(e) => handleDiplomaChange('institute_name', e.target.value)}
                    value={data.candidate_educations[0].institute_name}
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
                    onChange={(e) => handleDiplomaChange('board_university_name', e.target.value)}
                    value={data.candidate_educations[0].board_university_name}
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
                    onChange={(e) => handleDiplomaChange('year_end', e.target.value)}
                    value={data.candidate_educations[0].year_end}
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
                    onChange={(e) => handleDiplomaChange('grade_division', e.target.value)}
                    value={data.candidate_educations[0].grade_division}
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
                    onChange={(e) => handleDiplomaChange('grade_percent', e.target.value)}
                    value={data.candidate_educations[0].grade_percent}
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
                    onChange={(e) => handleDiplomaChange('stream', e.target.value)}
                    value={data.candidate_educations[0].stream}

                  ></input>

                </div>
              </div>

            </div>



            {/* Graduation*/}

            <div>
              <p className='HS-heading'>Graduation</p>
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
                  
                    onChange={(e) => handleGraduationChange('country', e.target.value)}
                    value={data.candidate_educations[5].country}
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
                    onChange={(e) => handleGraduationChange('year_start', e.target.value)}
                    value={data.candidate_educations[5].year_start}
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

                    onChange={(e) => handleGraduationChange('board_university_name', e.target.value)}
                    value={data.candidate_educations[5].board_university_name}
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
                    onChange={(e) => handleGraduationChange('institute_name', e.target.value)}
                    value={data.candidate_educations[5].institute_name}

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

                    onChange={(e) => handleGraduationChange('degree_types_name', e.target.value)}
                    value={data.candidate_educations[5].degree_types_name}
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
                    onChange={(e) => handleGraduationChange('year_end', e.target.value)}
                    value={data.candidate_educations[5].year_end}

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
                    onChange={(e) => handleGraduationChange('specialization_area_1', e.target.value)}
                    value={data.candidate_educations[5].specialization_area_1}

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
                    onChange={(e) => handleGraduationChange('grade_percent', e.target.value)}
                    value={data.candidate_educations[5].grade_percent}

                  ></input>

                </div>
              </div>

            </div>


            {/* Post Graduation*/}

            <div>
              <p className='HS-heading'>Post Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country4')}
                    name="country1"
                    className="UD-set-dropdown"
                    required
                    value={data.country4}
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


                  ></input>

                </div>
              </div>

            </div>


            {/* M. Phil*/}

            <div>
              <p className='HS-heading'>M. Phil</p>
            </div>

            <div className="row" style={{ marginTop: "-40px" }}>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country5')}
                    name="country1"
                    className="UD-set-dropdown"
                    required
                    value={data.country5}
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


                  ></input>

                </div>
              </div>

            </div>

            {/* PhD*/}

            <div>
              <p className='HS-heading'>PhD</p>
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
                    onChange={(e) => handleDiplomaChange('country', e.target.value)}
                    value={data.candidate_educations[4].country}
                    
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


                  ></input>

                </div>
              </div>

            </div>


            {/* Qualified Examination*/}

            <div>
              <p className='HS-heading'>Qualified Examination</p>
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

export default EditQualificationForm