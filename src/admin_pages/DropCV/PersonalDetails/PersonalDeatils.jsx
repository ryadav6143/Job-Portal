import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PersonalDeatils.css";
import apiService from "../../../Services/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function PersonalDeatils({ formData, setFormData }) {
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
    // Fetch data from the API using the service
    apiService
      .getCountries()
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  useEffect(() => {
    // Fetch data from the API using the service
    apiService
      .getCandidates()
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, []);

  const handleCategoryChange = (event) => {
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

    // Find the selected subpost object
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
    const selectedSubjectName = event.target.value;
    setSelectedSubject(selectedSubjectName);

    // Find the selected subject object
    const selectedSubjectData = subjects.find(
      (subject) => subject.subject_name === selectedSubjectName
    );

    // Set subjects_master_id in the formData
    setFormData((prevData) => ({
      personalDetails: {
        ...prevData.personalDetails,
        subjects_master_id: selectedSubjectData ? selectedSubjectData.id : "",
        // Add additional fields related to category if needed
      },
    }));
  };
  const handleCountryChange = (event) => {
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
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
    setFormData((prevData) => ({
      // ...prevData,
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
  };

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
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* DOB */}

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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
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
              </div>

              <div className="col-md-6">
                {/* Phone No. */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Phone Number
                  </label>
                  <input
                    className="set-input"
                    type="tel"
                    placeholder="(123) 456 - 7890 "
                    name="contact_1"
                    id=""
                    value={formData.contact_1}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <FontAwesomeIcon className="set-icon" icon={faMobile} />
                </div>
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
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* Category Appointment */}

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
              </div>

              <div className="col-md-6">
                {/* Post Applied For */}

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
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* Sub Post Applied For */}

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
                {/* Subject */}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDeatils;
