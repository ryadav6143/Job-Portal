import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./UserQualification.css";

function UserQualification() {
  const [highSchool, setHighSchool] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',
    year_end: '',
    grade_division: '',
    grade_percent: '',
  });

  const [higherSecondary, setHigherSecondary] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',
    year_end: '',
    grade_division: '',
    grade_percent: '',
    stream: '',
  });
  const [Graduation, setGraduation] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',  
    degree_types_name: "",
    year_end: '',  
    grade_percent: '',
      specialization_area_1: "",
  });
  const [PostGraduation, setPostGraduation] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',  
    degree_types_name: "",
    year_end: '',  
    grade_percent: '',
      specialization_area_1: "",
  });
  const [MPHIL, setMPHIL] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',  
    degree_types_name: "",
    year_end: '',  
    grade_percent: '',
      specialization_area_1: "",
  });
  const [Phd, setPhd] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',  
    degree_types_name: "",
    year_end: '',  
    grade_percent: '',
    specialization_area_1: "",
  });
  const [QualifiedExam, setQualifiedExam] = useState({
    country: '',
    year_start: '',
    institute_name: '',
    board_university_name: '',  
    degree_types_name: "",
    year_end: '',  
    grade_percent: '',
      specialization_area_1: "",
  });
  const [formValues, setFormValues] = useState({
    
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {  
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

 

  const handleChange = (field, value, educationType) => {
    if (educationType === 'highSchool') {
      setHighSchool({ ...highSchool, [field]: value });
    } else if (educationType === 'higherSecondary') {
      setHigherSecondary({ ...higherSecondary, [field]: value });
    }
     else if (educationType === 'Graduation') {
      setGraduation({ ...Graduation, [field]: value });
    }
     else if (educationType === 'PostGraduation') {
      setPostGraduation({ ...PostGraduation, [field]: value });
    }
     else if (educationType === 'MPHIL') {
      setMPHIL({ ...MPHIL, [field]: value });
    }
     else if (educationType === 'Phd') {
      setPhd({ ...Phd, [field]: value });
    }
     else if (educationType === 'QualifiedExam') {
      setQualifiedExam({ ...QualifiedExam, [field]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form highSchool:', highSchool);
    console.log('Form higherSecondary:', higherSecondary);
    console.log('Form Graduation:', Graduation);
    console.log('Form PostGraduation:', PostGraduation);
    console.log('Form MPHIL:', MPHIL);
    console.log('Form Phd:', Phd);
    console.log('Form QualifiedExam:', QualifiedExam);
  };
  


  return (
    <>
      <form method='post'  onSubmit={handleSubmit} >
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <div>
              <h5 className="UD-heading">Academic Professional Qualifications</h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* High School */}
            <div>
              <p className='HS-heading'>High School</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>

           
            
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select                   
                    name="country"
                    className="UD-set-dropdown"                   
                    value={highSchool.country}
                  onChange={(e) => handleChange('country', e.target.value, 'highSchool')}
                  
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
                    value={highSchool.year_start}
                    onChange={(e) => handleChange('year_start', e.target.value, 'highSchool')}
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
                    value={highSchool.institute_name}
                    onChange={(e) => handleChange('institute_name', e.target.value, 'highSchool')}
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
                    value={highSchool.board_university_name}
                    onChange={(e) => handleChange('board_university_name', e.target.value, 'highSchool')}
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
                    value={highSchool.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'highSchool')}
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
                    value={highSchool.grade_division}
                    onChange={(e) => handleChange('grade_division', e.target.value, 'highSchool')}
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
                    value={highSchool.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'highSchool')}
                                     ></input>

                </div>
              </div>

            </div>

            {/* Higher secondary */}

            <div>
              <p className='HS-heading'>Higher secondary</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>

           
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                   
                    name="country"
                    className="UD-set-dropdown"
                    value={higherSecondary.country}
                  onChange={(e) => handleChange('country', e.target.value, 'higherSecondary')}
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
                    value={higherSecondary.year_start}
                  onChange={(e) => handleChange('year_start', e.target.value, 'higherSecondary')}
                   
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
                    value={higherSecondary.institute_name}
                  onChange={(e) => handleChange('institute_name', e.target.value, 'higherSecondary')}
                   
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
                    value={higherSecondary.board_university_name}
                  onChange={(e) => handleChange('board_university_name', e.target.value, 'higherSecondary')}
                   
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
                    value={higherSecondary.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'higherSecondary')}
                   
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
                    value={higherSecondary.grade_division}
                    onChange={(e) => handleChange('grade_division', e.target.value, 'higherSecondary')}
                   
                   
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
                    value={higherSecondary.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'higherSecondary')}
                   
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
                    value={higherSecondary.stream}
                    onChange={(e) => handleChange('stream', e.target.value, 'higherSecondary')}
                   
                  ></input>

                </div>
              </div>

            </div>

{/* ------------------------------------------------------------------- */}
      
 {/* Graduation*/}

              <div>
              <p className='HS-heading'>Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>


              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                 
                    name="country"
                    className="UD-set-dropdown"
                    value={Graduation.country}
                    onChange={(e) => handleChange('country', e.target.value, 'Graduation')}
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
                    value={Graduation.year_start}
                    onChange={(e) => handleChange('year_start', e.target.value, 'Graduation')}

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
                    value={Graduation.board_university_name}
                    onChange={(e) => handleChange('board_university_name', e.target.value, 'Graduation')}

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
                    value={Graduation.institute_name}
                    onChange={(e) => handleChange('institute_name', e.target.value, 'Graduation')}

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
                    value={Graduation.degree_types_name}
                    onChange={(e) => handleChange('degree_types_name', e.target.value, 'Graduation')}

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
                    value={Graduation.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'Graduation')}

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
                    value={Graduation.specialization_area_1}
                    onChange={(e) => handleChange('specialization_area_1', e.target.value, 'Graduation')}

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
                    value={Graduation.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'Graduation')}
                  ></input>

                </div>
              </div>

            </div>


            {/* Post Graduation*/}

            <div>
              <p className='HS-heading'>Post Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>





              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                   
                    name="country"
                    className="UD-set-dropdown"
                    value={PostGraduation.country}
                    onChange={(e) => handleChange('country', e.target.value, 'PostGraduation')}
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
                    value={PostGraduation.year_start}
                    onChange={(e) => handleChange('year_start', e.target.value, 'PostGraduation')}

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
                    value={PostGraduation.board_university_name}
                    onChange={(e) => handleChange('board_university_name', e.target.value, 'PostGraduation')}

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

                    value={PostGraduation.institute_name}
                    onChange={(e) => handleChange('institute_name', e.target.value, 'PostGraduation')}
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
                    name=" degree_types_name"
                    id=""
                    value={PostGraduation.degree_types_name}
                    onChange={(e) => handleChange('degree_types_name', e.target.value, 'PostGraduation')}

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
                    value={PostGraduation.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'PostGraduation')}

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
                    value={PostGraduation.specialization_area_1}
                    onChange={(e) => handleChange('specialization_area_1', e.target.value, 'PostGraduation')}

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
                    value={PostGraduation.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'PostGraduation')}

                  ></input>

                </div>
              </div>

            </div>

{/* ------------------------------------- */}


            {/* M. Phil*/}

            <div>
              <p className='HS-heading'>M. Phil</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>



              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                  
                    name="country1"
                    className="UD-set-dropdown"
                    value={MPHIL.country}
                    onChange={(e) => handleChange('country', e.target.value, 'MPHIL')}
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
                    value={MPHIL.year_start}
                    onChange={(e) => handleChange('year_start', e.target.value, 'MPHIL')}

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
                    name=" board_university_name"
                    id=""
                    value={MPHIL.board_university_name}
                    onChange={(e) => handleChange('board_university_name', e.target.value, 'MPHIL')}

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
                    value={MPHIL.institute_name}
                    onChange={(e) => handleChange('institute_name', e.target.value, 'MPHIL')}

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
                    value={MPHIL.degree_types_name}
                    onChange={(e) => handleChange('degree_types_name', e.target.value, 'MPHIL')}

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
                    value={MPHIL.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'MPHIL')}

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
                    value={MPHIL.specialization_area_1}
                    onChange={(e) => handleChange('specialization_area_1', e.target.value, 'MPHIL')}


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
                    value={MPHIL.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'MPHIL')}

                  ></input>

                </div>
              </div>

            </div>

            {/* PhD*/}

            <div>
              <p className='HS-heading'>PhD</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>




              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                   
                    name="country"
                    className="UD-set-dropdown"
                    value={Phd.country}
                    onChange={(e) => handleChange('country', e.target.value, 'Phd')}

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
                    value={Phd.year_start}
                    onChange={(e) => handleChange('year_start', e.target.value, 'Phd')}

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
                    value={Phd.board_university_name}
                    onChange={(e) => handleChange('board_university_name', e.target.value, 'Phd')}
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

                    value={Phd.institute_name}
                    onChange={(e) => handleChange('institute_name', e.target.value, 'Phd')}
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
                    value={Phd.degree_types_name}
                    onChange={(e) => handleChange('degree_types_name', e.target.value, 'Phd')}
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
                    value={Phd.year_end}
                    onChange={(e) => handleChange('year_end', e.target.value, 'Phd')}

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
                    value={Phd.specialization_area_1}
                    onChange={(e) => handleChange('specialization_area_1', e.target.value, 'Phd')}
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
                    value={Phd.grade_percent}
                    onChange={(e) => handleChange('grade_percent', e.target.value, 'Phd')}
                  ></input>

                </div>
              </div>

            </div>


            {/* Qualified Examination*/}

            <div>
              <p className='HS-heading'>Qualified Examination</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>



              <div className="col-md-4">
                {/* Gate*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Gate
                  </label>
                  <select
                    className="UD-set-dropdown"
                    id="gateDropdown"
                    name="gate"
                  // You can handle the selected value in a state if needed
                  >
                    <option value="">Select Yes/No</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
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
                    <span></span>NEET
                  </label>
                  <select
                    className="UD-set-dropdown"
                    id="netDropdown"
                    name="net"
                  // You can handle the selected value in a state if needed
                  >
                    <option value="">Select Yes/No</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

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









          </div>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default UserQualification