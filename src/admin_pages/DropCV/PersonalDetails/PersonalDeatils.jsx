import React, { useState, useEffect } from "react";

import "./PersonalDeatils.css";
import apiService from "../../../Services/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function PersonalDeatils({ formData, setFormData, errors, setErrors }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subposts, setSubposts] = useState([]);
  const [selectedSubpost, setSelectedSubpost] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
 
  // -------------for jobcategory, post applies , sub post  ---------------

  // -------------------------------------dob----------------------

  // -------------------------------------dob----------------------
  useEffect(() => {
    apiService
      .getJobCategories()
      .then((response) => {
        const data = response.data;
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching job categories:", error);
      });
  }, []);
  useEffect(() => {
    if (selectedPost) {
      const selectedPostData = posts.find(
        (post) => post.post_name === selectedPost
      );
      setSubposts(
        selectedPostData ? selectedPostData.applied_subpost_masters : []
      );
      console.log(subposts);
    } else {
      setSubposts([]);
    }
  }, [selectedPost, posts]);
  useEffect(() => {
    apiService
      .getSubjectMaster()
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []);
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
  // useEffect(() => {

  //   apiService
  //     .getCandidates()
  //     .then((response) => {
  //       console.log("response", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching candidates:", error);
  //     });
  // }, []);

  const handleCategoryChange = (event) => {
    setErrors({
      ...errors,
      job_category_master_id: "",
    });
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const selectedCategoryData = categories.find(
      (category) => category.category_name === selectedCategory
    );
    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        job_category_master_id: selectedCategoryData
          ? selectedCategoryData.id
          : "",
      },
    }));
    setPosts(
      selectedCategoryData ? selectedCategoryData.applied_post_masters : []
    );
    // Reset selected post and subposts
    setSelectedPost("");
    setSubposts([]);
  };
  const handlePostChange = (event) => {
    setErrors({
      ...errors,
      applied_post_masters_id: "",
    });
    const selectedPost = event.target.value;
    setSelectedPost(selectedPost);
    const selectedPostData = posts.find(
      (post) => post.post_name === selectedPost
    );

    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        applied_post_masters_id: selectedPostData ? selectedPostData.id : "",
        // Add additional fields related to category if needed
      },
    }));
    setSubposts(
      selectedPostData ? selectedPostData.applied_subpost_masters : []
    );
  };

  const handleSubpostChange = (event) => {
    const selectedSubpostName = event.target.value;
    setSelectedSubpost(selectedSubpostName);
    const selectedSubpostData = subposts.find(
      (subpost) => subpost.subpost_name === selectedSubpostName
    );

    // Set applied_subpost_masters_id in the formData
    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        applied_subpost_master_id: selectedSubpostData
          ? selectedSubpostData.id
          : "",
        // Add additional fields related to category if needed
      },
    }));
  };
  const handleSubjectChange = (event) => {
    setErrors({
      ...errors,
      subjects_master_id: "",
    });

    const selectedSubjectName = event.target.value;
    setSelectedSubject(selectedSubjectName);

    const selectedSubjectData = subjects.find(
      (subject) => subject.subject_name === selectedSubjectName
    );

    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        subjects_master_id: selectedSubjectData ? selectedSubjectData.id : "",
      },
    }));
  };
  const handleCountryChange = (event) => {
    // set errors to null for country when changed
    setErrors({
      ...errors,
      country: "",
    });
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setSelectedCity("");
    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        country: countryValue,
        city: "",
        // Add additional fields if needed
        
      },
    }));
  };
  const handleCityChange = (event) => {
    // set errors to null for city when changed
    setErrors({
      ...errors,
      city: "",
    });
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        city: cityValue,
      },
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : "This field is required",
    }));
  };


  // --------------------------------------------------FORM VALIDATION-------------------------------------------
  const [formErrors, setFormErrors] = useState({
    title_first_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    contact_1: "",
    country: "",
    city: "",
    subjects_master_id: "",
    applied_post_masters_id: "",
    applied_subpost_master_id: "",
    job_category_master_id: "",
  });
  // --------------------------------------------------FORM VALIDATION-------------------------------------------

  return (
    <>
      <div className="container">
        <div className="personaldetails-form">
          <div>
            <h5 className="PD-heading">Personal Details</h5>
            <p className="PD-subheading">
              Please fill your information so we can get in touch with you.
            </p>
          </div>

          <form method="post">
            <div className="row">
              <div className="col-md-6">
                {/* Title */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Title
                  </label>
                  <select
                    name="title_first_name"
                    className="set-dropdown"
                    onChange={handleInputChange}
                    value={formData.title_first_name}
                    required
                  >
                    <option value="">Select Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                  <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                </div>
                <span className="error-message">{errors.title_first_name}</span>
              </div>

              <div className="col-md-6">
                {/* Name */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Name
                  </label>

                  <input
                    className="set-input"
                    type="text"
                    name="first_name"
                    placeholder="Enter Name"
                    id=""
                    onChange={handleInputChange}
                    value={formData.first_name}
                    required
                  ></input>
                  <FontAwesomeIcon className="set-icon" icon={faUser} />
                </div>
                <span className="error-message">{errors.first_name}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Date of Birth:
                  </label>
                  <input
                    className="set-input"
                    type="date"
                    placeholder="MM/DD/YYYY"
                    name="dob"
                    id=""
                    onChange={handleInputChange}
                    value={formData.dob}
                    required
                  ></input>
                </div>
                <span className="error-message">{errors.dob}</span>
              </div>
              <div className="col-md-6">
                {/* Gender */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Gender
                  </label>
                  <select
                    name="gender"
                    className="set-dropdown"
                    onChange={handleInputChange}
                    value={formData.gender}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <span className="error-message">{errors.gender}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* Email */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Email
                  </label>
                  <input
                    className="set-input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id=""
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                  ></input>
                  <FontAwesomeIcon className="set-icon" icon={faEnvelope} />
                </div>
                <span className="error-message">{errors.email}</span>
              </div>

              <div className="col-md-6">
                {/* Phone No. */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Phone Number
                  </label>
                  <input
                    className="set-input"
                    type="number"
                    placeholder="(123)456-7890 "
                    name="contact_1"
                    id=""
                    maxLength={10}
                    value={formData.contact_1}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <FontAwesomeIcon className="set-icon" icon={faMobile} />
                </div>
                <span className="error-message">{errors.contact_1}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* Country */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Country
                  </label>
                  <select
                    name="country"
                    className="set-dropdown"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required
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
                </div>
                <span className="error-message">{errors.country}</span>
              </div>

              <div className="col-md-6">
                {/* City */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>City
                  </label>

                  <select
                    name="city"
                    className="set-dropdown"
                    value={selectedCity}
                    onChange={handleCityChange}
                    required
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
                </div>
                <span className="error-message">{errors.city}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Category of Appointment
                  </label>
                  <select
                    id="categoryDropdown"
                    className="set-dropdown"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option
                        key={category.category_name}
                        value={category.category_name}
                      >
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="error-message">
                  {errors.job_category_master_id}
                </span>
              </div>

              <div className="col-md-6">
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Post Applied For
                  </label>
                  <select
                    id="postDropdown"
                    onChange={handlePostChange}
                    className="set-dropdown"
                    required
                  >
                    <option value="">Select a post</option>
                    {posts.map((post) => (
                      <option key={post.post_name} value={post.post_name}>
                        {post.post_name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="error-message">
                  {errors.applied_post_masters_id}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span> </span> Sub Post Applied For
                  </label>
                  <select
                    id="subpostDropdown"
                    className="set-dropdown"
                    value={selectedSubpost}
                    onChange={handleSubpostChange}
                  >
                    <option value="">Select a subpost</option>
                    {subposts.map((subpost) => (
                      <option
                        key={subpost.subpost_name}
                        value={subpost.subpost_name}
                      >
                        {subpost.subpost_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Subject
                  </label>
                  <select
                    id="subjectDropdown"
                    className="set-dropdown"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.subject_name}>
                        {subject.subject_name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="error-message">
                  {errors.subjects_master_id}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDeatils;
