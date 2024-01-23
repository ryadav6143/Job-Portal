import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./UserDetails.css";


import apiService from "../../../../Services/ApiServices";
function UserDetails({formValues, setFormValues}) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState('');
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');

  // const [countries, setCountries] = useState([]);
  // const [accessToken] = useState('Bearer sL-eX7S-pFFAg1dGBc-26ZSRCkNicfdu50p3ZLtaS4kTtjijpJIpqgs9hg6lWvXsHgg');

  // useEffect(() => {
  //   // Fetch countries from the API
  //   fetch('https://www.universal-tutorial.com/api/countries/', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': accessToken,
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Check the response structure before mapping
  //       if (Array.isArray(data)) {
  //         const countryNames = data.map(country => country.country_name);
  //         setCountries(countryNames);
  //       } else {
  //         console.error('Unexpected response format:', data);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, [accessToken]);
  
  // console.log('Countries:', countries);
  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   contact_1: '',
  //   title_first_name: '',
  //   first_name: '',
  //   middle_name: '',
  //   last_name: '',
  //   dob: '',
  //   gender: '',
  //   religion: '',
  //   city: '',
  //   cast_category_name: '',
  //   marital_status: '',
  //   address_1: '',
  //   contact_2: '',
  //   country: '',
  //   state_province: '',
  //   applied_post_masters_id: "",
  //   nature_of_job: '',
  //   department_master_id: '',
  //   pin_code: '',



  // });

  useEffect(() => {
    // Fetch data from the API using Axios
    apiService.getAppliedPosts()
      .then(response => {
        // Update the state with the fetched data
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apiService.getDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  const handleDepartmentChange = (event) => {
    const selectedDeptName = event.target.value;
    const selectedDepartmentObject = departments.find(
      (department) => department.dept_name === selectedDeptName
    );

    if (selectedDepartmentObject) {
      setSelectedDepartment(selectedDepartmentObject.id);
      setFormValues((prevValues) => ({
        UserDetails: {
        ...prevValues.UserDetails,
        department_master_id: selectedDepartmentObject.id,
        }
      }));
    
    } else {
      console.error('Selected department not found');
    }
  };

  const handlePostChange = (event) => {
    const selectedPostName = event.target.value;
    const selectedPostObject = posts.find(
      (post) => post.post_name === selectedPostName
    );

    if (selectedPostObject) {
      setSelectedPost(selectedPostObject.id);
      setFormValues((prevValues) => ({
        UserDetails: {
        ...prevValues.UserDetails,
        applied_post_masters_id: selectedPostObject.id,
        }
      }));
    } else {
      console.error('Selected post not found');
    }
  };


  const handleMaritalStatusChange = (event) => {
    const selectedMaritalStatus = event.target.value;
    setMaritalStatus(selectedMaritalStatus);
    setFormValues((prevValues) => ({
      UserDetails: {
      ...prevValues.UserDetails,
      marital_status: selectedMaritalStatus,
      }
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      UserDetails: {
        ...prevValues.UserDetails,
        [name]: value,
      },
    }));
  };

  


  return (
    <>
      <form>
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <div>
              <h5 className="UD-heading">Personal Details</h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Email */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Email
                  </label>
                  <input
                    className="UD-set-input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id=""
                    value={formValues.email}
                    onChange={handleInputChange}

                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faEnvelope} />
                </div>
              </div>

              <div className="col-md-4">
                {/* Phone No. */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Phone Number
                  </label>
                  <input
                    className="UD-set-input"
                    type="tel"
                    placeholder="(123) 456 - 7890 "
                    name="contact_1"
                    id=""
                    value={formValues.contact_1}
                    onChange={handleInputChange}

                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Post Applied For (If Others, Please Specify) */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Post Applied For<span className="set-others">&nbsp;(If Others, Please Specify)</span>
                  </label>
                  <select
                    id="postDropdown"
                    value={selectedPost.post_name}
                    onChange={handlePostChange}
                    className="UD-set-dropdown"
                  >
                    <option value="">Select a post</option>
                    {posts.map((post) => (
                      <option key={post.id} value={post.post_name}>
                        {post.post_name}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Departments */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Departments
                  </label>
                  <select
                    id="departmentDropdown"
                    value={selectedDepartment.dept_name} onChange={handleDepartmentChange}
                    className="UD-set-dropdown"

                  >
                    <option value="">Select a department</option>
                    {departments.map((department) => (
                      <option key={department.id} value={department.dept_name}>
                        {department.dept_name}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* Specialization  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Specialization
                  </label>
                  <input
                    className="UD-set-input"
                    type="text"
                    placeholder=" "
                    name="Specialization"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.Specialization}

                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* Nature of Job */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Nature of Job
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="nature_of_job"
                    className="UD-set-dropdown"
                    value={formValues.nature_of_job}

                  >

                    <option value="">Select Nature of Job</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>

                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Title */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Title
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="title_first_name"
                    className="UD-set-dropdown"
                    value={formValues.title_first_name}
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* First Name  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> First Name
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.first_name}

                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
                </div>
              </div>
              <div className="col-md-4">
                {/* Middle Name  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Middle Name
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="middle_name"
                    placeholder="Enter Middle Name "
                    id=""
                    onChange={handleInputChange}
                    value={formValues.middle_name}
                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Last Name  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Last Name
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="last_name"
                    placeholder="Enter last Name"
                    id=""
                    value={formValues.last_name}
                    onChange={handleInputChange}

                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
                </div>
              </div>

              <div className="col-md-4">
                {/* Date of Birth:  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Date of Birth:
                  </label>

                  <input
                    className="UD-set-input"
                    type="date"
                    name="dob"
                    placeholder="DD/MM/YYYY"
                    id=""
                    value={formValues.dob}
                    onChange={handleInputChange}

                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Gender*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Gender
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="gender"
                    className="UD-set-dropdown"

                    value={formValues.gender}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Religion */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Religion
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="religion"
                    placeholder="Enter Religion"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.religion}

                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Category  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Category
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="cast_category_name"
                    placeholder="Enter Category"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.cast_category_name}

                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/**Marital Status */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Marital Status
                  </label>
                  <select
                    id="maritalStatusDropdown"
                    value={maritalStatus.marital_status}
                    onChange={handleMaritalStatusChange}
                    className="UD-set-dropdown"

                  >
                    <option value="">Select marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="separated">Separated</option>
                    <option value="Not to disclosed">Not to disclosed</option>
                  </select>

                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *Current address */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Current address
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="address_1"
                    placeholder="Enter Address "
                    id=""
                    onChange={handleInputChange}
                    value={formValues.address_1}

                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                {/* *Alternate Contact Number  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Alternate Contact Number
                  </label>

                  <input
                    className="UD-set-input"
                    type="tel"
                    name="contact_2"
                    placeholder="(123) 456 - 7890"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.contact_2}

                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                </div>
              </div>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span> Country
                  </label>
                  {/* <select
                    onChange={handleInputChange}
                    name="country"
                    className="UD-set-dropdown"

                    value={formValues.country}
                  >
                    <option value="country">Select country</option>
                    <option value="country 1"> country 1</option>
                    <option value=" country 2"> country 2</option>
                    <option value="country 3"> country 3</option>
                  </select> */}
                     <select
            name="country"
            className="UD-set-dropdown"
            value={formValues.country}
            onChange={handleInputChange}
          >
            <option value="">Select country</option>
            {/* {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))} */}
          </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* *State */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>State
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="state_province"
                    className="UD-set-dropdown"
                    value={formValues.state_province}

                  >
                    <option value="State">Select State</option>
                    <option value="State 1"> State 1</option>
                    <option value="State 2"> State 2</option>
                    <option value="State 3"> State 3</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/**Current Job City */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Current Job City
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="city"
                    className="UD-set-dropdown"
                    value={formValues.city}

                  >
                    <option value="">Select Current Job City</option>
                    <option value="Job City 1"> Job City 1</option>
                    <option value="Job City 2"> Job City 2</option>
                    <option value="Job City 3"> Job City 3</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
              </div>

              <div className="col-md-4">
                {/* **Pin Code */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Pin Code
                  </label>

                  <input
                    className="UD-set-input"
                    type="text"
                    name="pin_code"
                    placeholder="Enter Pin Code "
                    id=""
                    onChange={handleInputChange}
                    value={formValues.pin_code}

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

export default UserDetails;
