import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PersonalDeatils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

function PersonalDeatils() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  // -----------------------------

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subposts, setSubposts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://192.168.29.155:8090/v1/api/jobCategory")
      .then((response) => {
        const data = response.data;
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // When the selected post changes, update subposts
    if (selectedPost) {
      // Find the selected post in the data
      const selectedPostData = posts.find(
        (post) => post.post_name === selectedPost
      );

      // Set the subposts based on the selected post
      setSubposts(
        selectedPostData ? selectedPostData.applied_subpost_masters : []
      );
      console.log(subposts);
    } else {
      // If no post is selected, clear subposts
      setSubposts([]);
    }
  }, [selectedPost, posts]);
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    // Find the selected category in the data
    const selectedCategoryData = categories.find(
      (category) => category.category_name === selectedCategory
    );
    // Set the posts based on the selected category
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

    // Find the selected post in the data
    const selectedPostData = posts.find(
      (post) => post.post_name === selectedPost
    );

    // Set the subposts based on the selected post
    setSubposts(
      selectedPostData ? selectedPostData.applied_subpost_masters : []
    );
  };
  // -----------------------------------------
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://192.168.29.155:8090/v1/api/subjectMaster")
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect will run once after the initial render

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // ------------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setSelectedCity("");
  };

  const [formData, setFormData] = useState({
    title_first_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    contact_1: "",
    degree_types_master_id: 1,
    subjects_master_id: 1,
    applied_post_masters_id: 1,
    applied_subpost_masters_id: 1,
    job_category_id: 1,
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.post(
          " http://192.168.29.155:8090/v1/api/candidates"
        );
        // setCountries(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // ------------catoregory of appoinment----------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  // ---------------------------
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Form submitted:", formData);
  // };
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
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
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
                {/* City */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>City
                  </label>
                  <select
                    name="city"
                    className="set-dropdown"
                    value={selectedCity}
                    onChange={(event) => setSelectedCity(event.target.value)}
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

              <div className="col-md-6">
                {/* Country */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span></span>Country
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
                  <select id="subpostDropdown" className="set-dropdown">
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
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.subject_name}>
                        {subject.subject_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* <button style={{ width: "100px" }} type="submit">
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDeatils;
