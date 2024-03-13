import React from 'react'
import "./EditReference.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import candidatesApiService from '../../../candidateService';
import Notification from '../../../../Notification/Notification';
function EditReference() {
  const [errorNotification, setErrorNotification] = useState({
    open: false,
   
  });
  const [data, setData] = useState({   
  // reference_person_1:'',
  //   reference_person_2:'',
  //   ref_org_1:'',
  //   ref_org_2:'',
  //   ref_person_position_1:'',
  //   ref_person_position_2:'',
  //   hearing_source_about_us:'',
  //   application_purpose:'',
  //   ref_person_1_email:'',
  //   ref_person_2_email:'',
  //   ref_person_1_contact:'',
  //   ref_person_2_contact:'',
  });
  const [updateField, setUpdateField] = useState({})
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
    fetchData();
  }, []);






  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  
  //   if (file) {
  //     try {
  //       let formData = new FormData();
  //       formData.append('candidate_cv', file);
  
  //       const response = await candidatesApiService.uploadCV(formData);
  
  //       if (response.ok) {
  //         const responseData = await response.json();
  //         console.log('Resume upload successful:', responseData);
  //         // Handle success, e.g., update state or show a success message
  //         setErrorNotification({ open: true, message: 'Resume uploaded successfully', severity: 'success' });
  //       } else {
  //         console.error('Resume upload failed:', response.status, response.statusText);
  //         setErrorNotification({ open: true, message: 'Resume uploaded successfully', severity: 'success' });
  //         // Handle error, e.g., show an error message to the user
  //       }
  //     } catch (error) {
  //       console.error('Error uploading resume:', error.message);
  //       setErrorNotification({ open: true, message: 'Failed to upload resume', severity: 'error' });  
  //       // Handle other errors that may occur during the request
  //     }
  //   }
  // };
  
  // const handleCloseNotification = () => {
  //   setErrorNotification({ ...errorNotification, open: false });
  // };

  // const handleSaveChanges = async () => {
  //   try {
     
  //     console.log("resume check>>>>>>",updateField);
  //     await candidatesApiService.updateCandidatePersonalInfo(updateField);
  //     setUpdateField({});
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error saving changes:', error.message);
  //   }
  // };


const handleFileChange = async (event) => {
  const file = event.target.files[0];

  if (file) {
    try {
      let formData = new FormData();
      formData.append('candidate_cv', file);

      const response = await candidatesApiService.uploadCV(formData);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Resume upload successful:', responseData);
        // Handle success, e.g., update state or show a success message
        setErrorNotification({ open: true, message: 'Resume uploaded successfully', severity: 'success' });
      } else {
        console.error('Resume upload failed:', response.status, response.statusText);
        setErrorNotification({ open: true, message: 'Failed to upload resume', severity: 'error' });
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error uploading resume:', error.message);
      setErrorNotification({ open: true, message: 'Failed to upload resume', severity: 'error' });  
      // Handle other errors that may occur during the request
    }
  }
};

const handleSaveChanges = async () => {
  try {
    console.log("resume check>>>>>>",updateField);
    await candidatesApiService.updateCandidatePersonalInfo(updateField);
    setUpdateField({});
    fetchData();
  } catch (error) {
    console.error('Error saving changes:', error.message);
    setErrorNotification({ open: true, message: 'Failed to save changes', severity: 'error' });
  }
};

const handleCloseNotification = () => {
  setErrorNotification({ ...errorNotification, open: false });
};



  const handleChange = (fieldName, value) => {
    console.log("handlefild", fieldName, value, updateField)
    setUpdateField(prev => ({ ...prev, [fieldName]: value.toString()}))
    setData(prev => ({ ...prev, [fieldName]: value.toString()}))
  };



  return (
    <>
    <form id='myForm' onSubmit={handleSaveChanges}>
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px",   paddingRight: "50px",}}>
      <div>
        <div>
          <h5 className="UD-heading">Reference &nbsp; <FontAwesomeIcon   className="edit-pen-icon" icon={faPen} /></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h5 className="UD-heading">
            Where Did You Hear About Medi-Caps University From ?
          </h5>
          <p className="UD-subheading">
            Friend/ facebook/ Instagram/ LinkedIn/ Faculty Members at
            Medi-Caps
          </p>

          <input
            style={{ width: "99.5%" }}
            className="UD-set-input"
            type="text"
            placeholder=""
            name="hearing_source_about_us"
            id=""
            value={data.hearing_source_about_us}
            onChange={(e) => handleChange('hearing_source_about_us', e.target.value)}
            required
          ></input>
        </div>

        {/* First Reference*/}

        <div>
          <p className="HS-heading"> First Reference </p>
        </div>

        <div className="row" style={{ marginTop: "-20px" }}>
          <div className="col-md-4">
            {/* Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name 
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="Enter Name"
                name="reference_person_1"
                id=""
                value={data.reference_person_1}
                onChange={(e) => handleChange('reference_person_1', e.target.value)}
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Organization */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Organization
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name="ref_org_1"
                id=""
                value={data.ref_org_1}
                onChange={(e) => handleChange('ref_org_1', e.target.value)}
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Position*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Position
              
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name="ref_person_position_1"
                id=""
                value={data.ref_person_position_1}
                onChange={(e) => handleChange('ref_person_position_1', e.target.value)}
              ></input>
            </div>
          </div>
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
                name="ref_person_1_email"
                id=""
                value={data.ref_person_1_email}
            onChange={(e) => handleChange('ref_person_1_email', e.target.value)}
                required
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
                name="ref_person_1_contact"
                id=""
                value={data.ref_person_1_contact}
                onChange={(e) => handleChange('ref_person_1_contact', e.target.value)}
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
            </div>
          </div>

          
        </div>

        

        {/* Second Reference*/}

        <div>
          <p className="HS-heading">Second Reference</p>
        </div>

        <div className="row" style={{ marginTop: "-20px" }}>
          <div className="col-md-4">
            {/* Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Name 
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder="Enter  Name "
                name="reference_person_2"
                id=""
                value={data.reference_person_2}
                onChange={(e) => handleChange('reference_person_2', e.target.value)}
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faUser} />
            </div>
          </div>

          <div className="col-md-4">
            {/* Organization */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Organization
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name="ref_org_2"
                id=""
                value={data.ref_org_2}
                onChange={(e) => handleChange('ref_org_2', e.target.value)}
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Position*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Position
              
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name="ref_person_position_2"
                id=""
                value={data.ref_person_position_2}
            onChange={(e) => handleChange('ref_person_position_2', e.target.value)}
              ></input>
            </div>
          </div>
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
                name="ref_person_2_email"
                id="" 
                value={data.ref_person_2_email}
                onChange={(e) => handleChange('ref_person_2_email', e.target.value)}
               
                required
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
                name="ref_person_2_contact"
                id=""
                value={data.ref_person_2_contact}
                onChange={(e) => handleChange('ref_person_2_contact', e.target.value)}
                required
              ></input>
              <FontAwesomeIcon className="UD-set-icon" icon={faMobile} />
            </div>
          </div>

          
        </div>

        

        <div className="row"  style={{ marginTop: "-10px" }}>
        <div className="col-md-12">
            {/* Statement of Purpose*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Statement of Purpose
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=""
                name="application_purpose"
                id=""
                value={data.application_purpose}
                onChange={(e) => handleChange('application_purpose', e.target.value)}
              ></input>
            
            </div>
          </div> 
        </div>


 {/* Upload Resume*/}

 <div>
          <p className="HS-heading">Upload Resume</p>
        </div>

        <div className="uploadfile-section">
        <label className="SetLabel-Name">
          <span>*</span>Upload your Resume:
        </label>
        <p className="uploadresume-subheading">
          To upload your resume here:(maximum size 2MB, PDF, DOC and DOCX
          format only)
        </p>
        <input
          className="set-choosefile-input"
          type="file"
          placeholder="00 (i.e Years.Months)"
          name="candidate_cv"
          id=""
          // value={data.resume_file_link}
          onChange={handleFileChange}
          required
        ></input>
      
{data.resume_file_link && (
  <span>Current cv:- {data.resume_file_link.substring(data.resume_file_link.lastIndexOf('/') + 1).split('-')[0]}</span>
)}
   <Notification
        open={errorNotification.open}
        handleClose={handleCloseNotification}
        alertMessage={errorNotification.message}
        alertSeverity="success"
      />


      </div>

      <div>
        <span className="set-checkbox-span">
          {" "}
          <input
            className="set-checkbox"
            type="checkbox"
            id=""
            name=""
            
          />
          &nbsp; I confirm that the information provided here are true to my knowledge
        </span>
      </div>
      <div>
  <button className="savebtn" type="button" onClick={handleSaveChanges}>Save Changes</button>
</div>
      </div>
    </div>
    </form>
  </>
  )
}

export default EditReference