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
  // ..........................................................
  // const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState('');

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get('https://restcountries.com/v3.1/all');
  //       setCountries(response.data);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  // const handleChange = (event) => {
  //   setSelectedCountry(event.target.value);
  // };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const fetchCitiesByCountry = async (countryCode) => {
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?country=${countryCode}&maxRows=10&username=YOUR_GEONAMES_USERNAME`
      );
      setCities(response.data.geonames);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);
    // Fetch cities for the selected country
    fetchCitiesByCountry(selectedCountryCode);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
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

          <form>
            <div className="row">
              <div className="col-md-6">
                {/* Title */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Title
                  </label>
                  <select name="title_first_name" className="set-dropdown">
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
                    value=""
                    {...("First name", {required: true, maxLength: 80})}
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
                    value=""
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
                  <select name="gender" className="set-dropdown">
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
                    value=""
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
                    type="number"
                    placeholder="(123) 456 - 7890 "
                    name="contact_1"
                    id=""
                    value=""
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
                  {/* <select name="city" className="set-dropdown">
                  <option value="">Select city</option>
                  <option value="">Indore</option>
                  <option value="">Ujjain</option>
                  <option value="">Dewas</option>
                </select> */}
                  <select
                    name="city"
                    className="set-dropdown"
                    onChange={handleCityChange}
                  >
                    <option value="">Select city</option>
                    {cities.map((city) => (
                      <option key={city.geonameId} value={city.name}>
                        {city.name}
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
                  {/* <select value={selectedCountry} onChange={handleChange} name="country" className="set-dropdown">
                  <option value="">Select country</option>
                  <option value="">United States</option>
                  <option value="">Japan</option>
                  <option value="">Brazil</option>
                  <option value="">India</option>
                </select> */}

                  {/* <select name="country" className="set-dropdown" value={selectedCountry} onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select> */}

                  <select
                    name="country"
                    className="set-dropdown"
                    onChange={handleCountryChange}
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.cca2}>
                        {country.name.common}
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
                  <select name="job_category" className="set-dropdown">
                    <option value="">Select Category</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
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
                    name="applied_post_masters_id"
                    className="set-dropdown"
                  >
                    <option value="">Select Post</option>
                    <option value="">Software Engineer</option>
                    <option value="">Marketing Specialist</option>
                    <option value="">Project Manager</option>
                    <option value="">Data Analyst</option>
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
                    name="applied_subpost_masters_id"
                    className="set-dropdown"
                  >
                    <option value="">Select Sub Post</option>
                    <option value="">Sub Post 1</option>
                    <option value="">Sub Post 2</option>
                    <option value="">Sub Post 3</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                {/* Subject */}
                <div className="form-section">
                  <label className="SetLabel-Name">
                    <span>*</span>Subject
                  </label>
                  <select name="subjects_master_id" className="set-dropdown">
                    <option value="">Select Subject</option>
                    <option value="">Mathematics</option>
                    <option value="">Physics</option>
                    <option value="">Computer Science</option>
                    <option value="">English Literature</option>
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
