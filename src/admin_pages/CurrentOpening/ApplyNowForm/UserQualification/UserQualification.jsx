import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./UserQualification.css";

function UserQualification() {

  const [formValues, setFormValues] = useState({
    country1: '',
    country2: '',
    country3: '',
    country4: '',
    country5: '',
    country6: '',
    year_start: '',
    institute_name:'',
    board_university_name:'',
    year_end: '',
    grade_division:'',
    grade_percent: '',
    stream:'',
    degree_types_name:'',
    specialization_area_1:'',

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
      ...prevValues,
      [dropdownName]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formValues);
    // Add any additional logic for form submission or data processing here
  };

  
  return (
    <>
    <form method='post'  >
      <div className="container">
        <div style={{marginTop:"20px"}}>
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

          <div className="row"  style={{marginTop :"-30px"}}>
           
          <div className="col-md-4">
              {/* *Country */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Country
                </label>
                <select
          onChange={(e) => handleInputChange(e, 'country1')}
          name="country1"
          className="UD-set-dropdown"
          required
          value={formValues.country1}
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
                  name=" year_start"
                  id=""
                  
                  required
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
                  
                  required
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
                  
                  required
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
                  
                  required
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
                  
                  required
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
                  
                  required
                ></input>
             
              </div>
            </div>

          </div>

          {/* Higher secondary */}

          <div>
              <p className='HS-heading'>Higher secondary</p>
              </div>

              <div className="row"  style={{marginTop :"-30px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span> Country
                 </label>
                 <select
          onChange={(e) => handleInputChange(e, 'country2')}
          name="country2"
          className="UD-set-dropdown"
          required
          value={formValues.country2}
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
                   
                   required
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
                   
                   required
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
                   
                   required
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
                   
                   required
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
                   
                   required
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
                   
                   required
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
                   
                   required
                 ></input>
              
               </div>
             </div>
 
           </div>


           {/* Graduation*/}

          <div>
              <p className='HS-heading'>Graduation</p>
              </div>

              <div className="row"  style={{marginTop :"-30px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select
          onChange={(e) => handleInputChange(e, 'country3')}
          name="country1"
          className="UD-set-dropdown"
          required
          value={formValues.country3}
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

              <div className="row"  style={{marginTop :"-30px"}}>
           
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
          value={formValues.country4}
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

              <div className="row"  style={{marginTop :"-30px"}}>
           
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
          value={formValues.country5}
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

              <div className="row"  style={{marginTop :"-30px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select
          onChange={(e) => handleInputChange(e, 'country6')}
          name="country1"
          className="UD-set-dropdown"
          required
          value={formValues.country6}
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

              <div className="row"  style={{marginTop :"-30px"}}>
           
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
 
          
          

        </div>
      </div>

    
      </form>
    </>
  )
}

export default UserQualification