import "./EditPersonalDetails.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faUserTie,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import candidatesApiService from "../../../candidateService";
import axios from "axios";
function EditPersonalDetails() {
  // ---------profile image source---------
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const [data, setData] = useState({});
  const [updateField, setUpdateField] = useState({})

  // console.log("data", data);
  const fetchData = async () => {
    try {
      let accessToken = localStorage.getItem('Token');
      accessToken = JSON.parse(accessToken);
      // console.log("accessToken", accessToken.token);

      const fetchedData = await candidatesApiService.getCandidateById(accessToken.token);
      console.log("response", fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  useEffect(() => {
    console.log("use-state")
    fetchData();
  }, []);





  // const handleImageChange = async (event) => {
  //   console.log('handleImageChange function started');
  //   const file = event.target.files[0];
  //   console.log('Selected File:', file)
  //   if (file) {
  //     try {
  //       let formData = new FormData();
  //       formData.append('profile_image', file);

  //       let accessToken = localStorage.getItem('Token');
  //       accessToken = JSON.parse(accessToken);
  //       console.log("accessToken", accessToken.token);

  //       let response = await fetch('http://192.168.1.8:8090/v1/api/candidates/profile_image', {
  //         method: 'PUT',
  //         body: formData,
  //         headers: {
  //           'access-token': accessToken.token,
  //         },
  //       });

  //       console.log('Response:', response);

  //       if (response.ok) {
  //         // The image was successfully uploaded
  //         const responseData = await response.json();
  //         console.log('Image upload successful:', responseData);
  //         setSelectedImage(URL.createObjectURL(file));
  //       } else {
  //         // Handle error when the image upload fails
  //         console.error('Image upload failed:', response.statusText);
  //         // You can also show an error message to the user if needed
  //       }
  //     } catch (error) {
  //       console.error('Error uploading image:', error.message);
  //       // Handle other errors that may occur during the request
  //     }
  //   }
  // };


  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        console.log("accessToken", accessToken.token);

        const responseData = await candidatesApiService.uploadProfileImage(file, accessToken.token);
        console.log('Image upload successful:', responseData);

        setSelectedImage(URL.createObjectURL(file));
      } catch (error) {
        console.error('Error uploading image:', error.message);
        // Handle other errors that may occur during the request
      }
    }
  };

  const handleSaveChanges = async () => {
    try {
      let accessToken = localStorage.getItem('Token');
      accessToken = JSON.parse(accessToken);
      console.log(updateField);
      const response = await axios.put(
        'http://192.168.1.8:8090/v1/api/candidates/updateCandidatePersonalById',
        updateField,
        {
          headers: {
            'access-token': accessToken.token,
          },
        }
      );
      console.log('Save Changes Response:', response);
      setUpdateField({});
      fetchData()
    } catch (error) {
      console.error('Error saving changes:', error.message);
    }
  };



  const handleFieldChange = (fieldName, value) => {

    console.log("handlefild", fieldName, value, updateField)
    setUpdateField(prev => ({ ...prev, [fieldName]: value.toString()}))
    setData(prev => ({ ...prev, [fieldName]: value.toString()}))
  };

  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject.getTime())) {
      return ''; 
    }
    const day = dateObject.getDate().toString().padStart(2,'0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2,'0');
    const year = dateObject.getFullYear();
    return `${year}-${month}-${day}`;
  };
  // --------------end others fields section----------------
  useEffect(() => {
    const fetchImage = async () => {
      try {
        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        console.log("accessToken", accessToken.token);

        const response = await axios.get('http://192.168.1.8:8090/v1/api/candidates/renderCandidatePic', {
          headers: {
            'access-token': accessToken.token,
          },
          responseType: 'blob',
        });

        console.log("Response:", response);

        if (response.status === 200 && response.data) {
          const imageUrl = URL.createObjectURL(response.data);
          setSelectedImage(imageUrl);
        } else {
          // If there is no image, set selectedImage to null or use a default image URL
          setSelectedImage(null);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      <form id="myForm" onSubmit={handleSaveChanges}>
        <div style={{ marginTop: "7%" }}>
          <div style={{ paddingLeft: "50px" }}>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Profile"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserTie}
                style={{
                  fontSize: '120px',
                  borderRadius: '50%',
                  backgroundColor: '#ddd',
                  padding: '20px',
                }}
              />
            )}
            <div>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput" className="choose-img">
                Change Profile Picture
              </label>
              {/* Button to trigger file input */}
              {/* <button className="choose-img" onClick={handleChoosePictureClick}>
                Change Profile Picture
              </button> */}
            </div>
          </div>

          <div
            className="container"
            style={{ marginTop: "30px", paddingLeft: "50px" }}
          >
            <div>
              <div>
                <h5 className="UD-heading">
                  Personal Details &nbsp;{" "}
                  <FontAwesomeIcon className="edit-pen-icon" icon={faPen} />
                </h5>
                <p className="UD-subheading">
                  Please fill your information so we can get in touch with you.
                </p>

                {/* Add edit profile button */}
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
                      required
                      value={data.email}
                    // onChange={(e) => handleFieldChange('email', e.target.value)}
                    />
                    <FontAwesomeIcon
                      className="UD-set-icon"
                      icon={faEnvelope}
                    />
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
                      required
                      value={data.contact_1}
                    // onChange={(e) => handleFieldChange('contact_1', e.target.value)}
                    />
                    <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
                  </div>
                </div>


              </div>

              {/* <div className="row">
              <div className="col-md-4">
                   *Others *
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span>Others
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name=""
                      id=""
                      required
                    ></input>
                  </div>
                </div>

              </div> */}

              <div className="row">
                {/* <div className="col-md-4">
                  Departments
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span> Departments
                    </label>
                    <select name="" className="UD-set-dropdown">
                      <option value="">Select Departments</option>
                      <option value="">Departments</option>
                      <option value="">Departments</option>
                      <option value="">Departments</option>
                    </select>
                    <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                  </div>
                </div> */}

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
                      value={data.specialization}
                      onChange={(e) => handleFieldChange('specialization', e.target.value)}
                    ></input>
                  </div>
                </div>

                {/* <div className="col-md-4">
         
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span> Nature of Job
                    </label>
                    <select name="nature_of_job" className="UD-set-dropdown"
                      value={data.candidate_applied_posts && data.candidate_applied_posts.length > 0 ? data.candidate_applied_posts[0].nature_of_job : ''}
                      onChange={(e) => handleFieldChange('nature_of_job', e.target.value)}>
                      <option value="">Select Nature of Job</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                    </select>
                    <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
                  </div>
                </div> */}
              </div>

              <div className="row">
                <div className="col-md-4">
                  {/* Title */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Title
                    </label>
                    <select name="title_first_name" className="UD-set-dropdown"
                      value={data.title_first_name}
                      onChange={(e) => handleFieldChange('title_first_name', e.target.value)}>
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
                      value={data.first_name}
                      onChange={(e) => handleFieldChange('first_name', e.target.value)}

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
                      value={data.middle_name}
                      onChange={(e) => handleFieldChange('middle_name', e.target.value)}
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
                      value={data.last_name}
                      onChange={(e) => handleFieldChange('last_name', e.target.value)}
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
                      placeholder=""
                      id=""
                      value={formatDateForInput(data.dob)}
                      onChange={(e) => handleFieldChange('dob', e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* *Gender*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span>*</span>Gender
                    </label>
                    <select
                      name="gender"
                      className="UD-set-dropdown"
                      value={data.gender}
                      onChange={(e) => handleFieldChange('gender', e.target.value)}
                    >
                      <option value="">Select Gender</option>
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
                      value={data.religion}
                      onChange={(e) => handleFieldChange('religion', e.target.value)}

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

                      value={data.cast_category_name}
                      onChange={(e) => handleFieldChange('cast_category_name', e.target.value)}
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
                      name="marital_status"
                      id=""
                      value={data.marital_status}
                      onChange={(e) => handleFieldChange('marital_status', e.target.value)}
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
                      placeholder="Enter Address"
                      id=""
                      value={data.address_1}
                      onChange={(e) => handleFieldChange('address_1', e.target.value)}
                      required
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
                      value={data.contact_2}
                      onChange={(e) => handleFieldChange('contact_2', e.target.value)}
                      required
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
                    <select name="country" className="UD-set-dropdown">
                      <option value="">Select country</option>
                      <option value=""> country</option>
                      <option value=""> country</option>
                      <option value=""> country</option>
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
                    <select name="state_province" className="UD-set-dropdown">
                      <option value="">Select State</option>
                      <option value=""> State</option>
                      <option value=""> State</option>
                      <option value=""> State</option>
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
                    <select name="" className="UD-set-dropdown">
                      <option value="">Select Current Job City</option>
                      <option value=""> Job City</option>
                      <option value=""> Job City</option>
                      <option value=""> Job City</option>
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
                      type="number"
                      name="pin_code"
                      placeholder="Enter Pin Code "
                      id=""
                      value={data.pin_code}
                      onChange={(e) => handleFieldChange('pin_code', e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <button className="savebtn" type="button" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditPersonalDetails;
