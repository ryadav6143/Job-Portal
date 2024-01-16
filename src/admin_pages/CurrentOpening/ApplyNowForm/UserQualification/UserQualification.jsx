import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./UserQualification.css";

function UserQualification() {
  const initialEducation = {
    degree_types_master_id: "",
    exam_types_master_id: "",
    degree_types_name:"",
    degree_types_description:"",
    country:"",
    year_start:"",
    year_end:"",
    institute_name:"",
    board_university_name:"",
    grade_division:"",
    grade_percent:"",
    stream:"",
    specialization_area_1:"",
    specialization_area_2:"",
    specialization_area_3:"",
    specialization_area_4:"",
    specialization_area_5:"",
    degree_status:"",
  };
  const [formValues, setFormValues] = useState({
    educations: [initialEducation],
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries from the API
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleInputChange = (e, dropdownName) => {
    const { value } = e.target;
    setFormValues((prevValues) => ({   
          educations: [{
        ...prevValues.educations[0],
        [dropdownName]: value,
      }],
    }));
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      if(name == "exam_types_master_id"){
        value=7
      }
    setFormValues((prevValues) => ({
      ...prevValues,
      educations: [{
        ...prevValues.educations[0],
        [name]: value,
      }],
    }));
  };

  const handleSubmit = (e) => {
  

    
    setFormValues((prevValues) => ({
  
      educations: [
        {
          ...prevValues.educations[0],
          exam_types_master_id: 7,
        },

      ],
    }));
    e.preventDefault();
    console.log('Form Data:',formValues);
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

              <div className="col-md-4"  style={{display:"none"}}>
                {/* HIGH SCHOOL exam type */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> HIGH SCHOOL exam type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="exam_types_master_id"
                    id=""             
                    value={7}
                    onChange={handleChange}                    
                  ></input>      
                </div>
              </div>
              {/* <div className="col-md-4"  style={{display:"none"}}>              
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> HIGH SCHOOL degree Type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="degree_types_master_id"
                    id=""
                    value= {15}
                    onChange={handleChange}
                   
                  ></input>
                
                </div>
              </div> */}
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country"
                    className="UD-set-dropdown"
                    
                    value={formValues.educations[0].country}
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
                    value={formValues.educations[0].year_start}
                    onChange={handleChange}
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
                    value={formValues.educations[0].institute_name}
                        onChange={handleChange}
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
                    value={formValues.educations[0].board_university_name}
                    onChange={handleChange}
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
                    value={formValues.educations[0].year_end}
                        onChange={handleChange}
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
                    value={formValues.educations[0].grade_division}
                        onChange={handleChange}
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
                    value={formValues.educations[0].grade_percent}
                        onChange={handleChange}
                  ></input>

                </div>
              </div>

            </div>

            {/* Higher secondary */}

            <div>
              <p className='HS-heading'>Higher secondary</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>

            <div className="col-md-4"  style={{display:"none"}}>
                {/* HIGH SCHOOL exam type */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> HIGH SCHOOL exam type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {8}
                        onChange={handleChange}
                  ></input>      
                </div>
              </div>
              <div className="col-md-4"  style={{display:"none"}}>
                {/* HIGH SCHOOL degree Type*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> HIGHER SECONDRY degree Type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {16}
                        onChange={handleChange}
                  ></input>
                
                </div>
              </div>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country2"
                    className="UD-set-dropdown"
               
                    value={formValues.country}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
                  ></input>

                </div>
              </div>

            </div>



              {/* Diploma */}

              <div>
              <p className='HS-heading'>Diploma</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>

            <div className="col-md-4"  style={{display:"none"}}>
                {/* HIGH SCHOOL exam type */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> HIGH SCHOOL exam type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {8}
                        onChange={handleChange}
                  ></input>      
                </div>
              </div>
              <div className="col-md-4"  style={{display:"none"}}>
                {/* HIGH SCHOOL degree Type*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> HIGHER SECONDRY degree Type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {16}
                        onChange={handleChange}
                  ></input>
                
                </div>
              </div>
              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country2"
                    className="UD-set-dropdown"
               
                    value={formValues.country}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
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

                        onChange={handleChange}
                  ></input>

                </div>
              </div>

            </div>


            {/* Graduation*/}

            <div>
              <p className='HS-heading'>Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>

            <div className="col-md-4"  style={{display:"none"}}>
              
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>  Graduation exam type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {2}
                        onChange={handleChange}
                  ></input>      
                </div>
              </div>
          

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country1"
                    className="UD-set-dropdown"
            
                    value={formValues.country}
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


            {/* Post Graduation*/}

            <div>
              <p className='HS-heading'>Post Graduation</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>


            <div className="col-md-4"  style={{display:"none"}}>
           
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> post Graduation exam type
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="year_start"
                    id=""
                    value= {3}
                        onChange={handleChange}
                  ></input>      
                </div>
              </div>
        

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country1"
                    className="UD-set-dropdown"
             
                    value={formValues.country}
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
                    name=" degree_types_name"
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

            <div className="row" style={{ marginTop: "-30px" }}>

            <div className="col-md-4"  style={{display:"none"}}>           
           <div className="UD-form-section">
             <label className="UD-SetLabel-Name">
               <span>*</span> M. PHIL exam type
             </label>
             <input
               className="UD-set-input"
               type="text"
               placeholder=" "
               name="year_start"
               id=""
               value= {5}
                   onChange={handleChange}
             ></input>      
           </div>
         </div>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country1"
                    className="UD-set-dropdown"
                      
                    value={formValues.country}
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
                    name=" board_university_name:{"
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

            <div className="row" style={{ marginTop: "-30px" }}>


            <div className="col-md-4"  style={{display:"none"}}>           
           <div className="UD-form-section">
             <label className="UD-SetLabel-Name">
               <span>*</span>PHD exam type
             </label>
             <input
               className="UD-set-input"
               type="text"
               placeholder=" "
               name="year_start"
               id=""
               value= {4}
                   onChange={handleChange}
             ></input>      
           </div>
         </div>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span> Country
                  </label>
                  <select
                    onChange={(e) => handleInputChange(e, 'country')}
                    name="country1"
                    className="UD-set-dropdown"
                        
                    value={formValues.country}
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

            <div className="row" style={{ marginTop: "-30px" }}>

            <div className="col-md-4"  style={{display:"none"}}>           
           <div className="UD-form-section">
             <label className="UD-SetLabel-Name">
               <span>*</span>Gate
             </label>
             <input
               className="UD-set-input"
               type="text"
               placeholder=" "
               name="year_start"
               id=""
               value= {11}
                   onChange={handleChange}
             ></input>      
           </div>
         </div>
              

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


              <div className="col-md-4"  style={{display:"none"}}>           
           <div className="UD-form-section">
             <label className="UD-SetLabel-Name">
               <span>*</span>NEET
             </label>
             <input
               className="UD-set-input"
               type="text"
               placeholder=" "
               name="year_start"
               id=""
               value= {9}
                   onChange={handleChange}
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

      </form>
    </>
  )
}

export default UserQualification