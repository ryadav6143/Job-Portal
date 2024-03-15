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
function UserDetails({ formValues, setFormValues, errors, setErrors }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  
  const [maxCharacters] = useState(40);
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
    apiService
      .getCountries()
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setSelectedCity("");
    console.log("Selected Country:", countryValue);
    setFormValues((prevValues) => ({
      UserDetails: {
        ...prevValues.UserDetails,
        country: countryValue,
      },
    }));
    setErrors({
      ...errors,
      country: "",
    });
  };



  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
    console.log("Selected city:", cityValue);
    setFormValues((prevValues) => ({
      UserDetails: {
        ...prevValues.UserDetails,
        city: cityValue,
      },
    }));
    setErrors({
      ...errors,
      city: "",
    });
  };

  useEffect(() => {
    // Fetch data from the API using Axios
    apiService
      .getAppliedPosts()
      .then((response) => {
        // Update the state with the fetched data
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apiService.getDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleDepartmentChange = (event) => {
    setErrors({
      ...errors,
      department_master_id: "",
    });
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
        },
      }));
    } else {
      console.error("Selected department not found");
    }
  };

  const handlePostChange = (event) => {
    setErrors({
      ...errors,
      applied_post_masters_id: "",
    });
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
        },
      }));
    } else {
      console.error("Selected post not found");
    }
  };

  const handleMaritalStatusChange = (event) => {
    setErrors({
      ...errors,
      marital_status: "",
    });
    const selectedMaritalStatus = event.target.value;
    setMaritalStatus(selectedMaritalStatus);
    setFormValues((prevValues) => ({
      UserDetails: {
        ...prevValues.UserDetails,
        marital_status: selectedMaritalStatus,
      },
    }));
  };

  const handleInputChange = (e) => {
    setErrors({
      ...errors,
      specialization: "",
    });
    const { name, value } = e.target;
    if (value.length <= maxCharacters) {
    setFormValues((prevValues) => ({
      ...prevValues,
      UserDetails: {
        ...prevValues.UserDetails,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : " ! This field is required",
    }));
  }
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
                <span className="error-message">{errors.email}</span>
              </div>

              <div className="col-md-4">
                {/* Phone No. */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Phone Number
                  </label>
                  <input
                    className="UD-set-input"
                    type="number"
                    placeholder="(123) 456 - 7890 "
                    name="contact_1"
                    id=""
                    value={formValues.contact_1}
                    onChange={handleInputChange}
                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                </div>
                <span className="error-message">{errors.contact_1}</span>
              </div>

              <div className="col-md-4">
                {/* *Post Applied For (If Others, Please Specify) */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Post Applied For
                    {/* <span className="set-others">
                      &nbsp;(If Others, Please Specify)
                    </span> */}
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
                <span className="error-message">
                  {errors.applied_post_masters_id}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                {/* Departments */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Departments
                  </label>
                  <select
                    id="departmentDropdown"
                    value={selectedDepartment.dept_name}
                    onChange={handleDepartmentChange}
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
                <span className="error-message">
                  {errors.department_master_id}
                </span>
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
                    name="specialization"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.specialization}
                  ></input>
                </div>
                <span className="error-message">{errors.specialization}</span>
              </div>

              <div className="col-md-4">
                {/* Nature of Job */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Nature of Job
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
                <span className="error-message">{errors.nature_of_job}</span>
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
                    <option value="">Select Option</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.title_first_name}</span>
              </div>

              <div className="col-md-4">
                {/* First Name  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>First Name
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
                <span className="error-message">{errors.first_name}</span>
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
                <span className="error-message">{errors.last_name}</span>
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
                <span className="error-message">{errors.dob}</span>
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
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.gender}</span>
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
                <span className="error-message">{errors.religion}</span>
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
                <span className="error-message">
                  {errors.cast_category_name}
                </span>
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
                <span className="error-message">{errors.marital_status}</span>
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
                <span className="error-message">{errors.address_1}</span>
              </div>

              <div className="col-md-4">
                {/* *Alternate Contact Number  */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Alternate Contact Number
                  </label>

                  <input
                    className="UD-set-input"
                    type="number"
                    name="contact_2"
                    placeholder="(123) 456 - 7890"
                    id=""
                    onChange={handleInputChange}
                    value={formValues.contact_2}
                  ></input>
                  <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                </div>
                <span className="error-message">{errors.contact_2}</span>
              </div>

              <div className="col-md-4">
                {/* *Country */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Country
                  </label>
                  <select
                    name="country"
                    className="set-dropdown"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option key="" value="">
                      Select a country
                    </option>
                    {countries.map((countryData) => (
                      <option
                        key={countryData.iso2}
                        value={countryData.country}
                      >
                        {countryData.country}
                      </option>
                    ))}
                  </select>
                  {/* <select
                    name="country"
                    className="UD-set-dropdown"
                    value={formValues.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select country</option>
                    {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
                  </select> */}
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.country}</span>
              </div>
            </div>

            <div className="row">
              {/* <div className="col-md-4">
       
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
                <span className="error-message">{errors.state_province}</span>
              </div> */}

              <div className="col-md-4">
                {/* *Current Job City */}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span>*</span>Current Job City
                  </label>
                  <select
                    name="city"
                    className="set-dropdown"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option key="" value="">
                      Select a city
                    </option>
                    {(
                      countries.find(
                        (country) => country.country === selectedCountry
                      )?.cities || []
                    ).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.city}</span>
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
                <span className="error-message">{errors.pin_code}</span>
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
