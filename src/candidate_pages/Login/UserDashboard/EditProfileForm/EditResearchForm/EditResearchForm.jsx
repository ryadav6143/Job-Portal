import React, { useState } from 'react';
import "./EditResearchForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from '@fortawesome/free-solid-svg-icons';
function EditResearchForm() {
  const [identifiers, setIdentifiers] = useState([{}]);
  const [publications, setPublications] = useState([{}]);
  const [applications, setApplications] = useState([{}]);
 

  const handleAddIdentifier = () => {
    setIdentifiers([...identifiers, {}]);
  };

  const handleAddPublication = () => {
    setPublications([...publications, {}]);
  };

  const handleAddApplication = () => {
    setApplications([...applications, {}]);
  };

 
  return (
    <>
    <form id='myForm'>
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px"}}>
      <div>
        <div>
          <h5 className="UD-heading">Research Work &nbsp; <FontAwesomeIcon style={{color:"rgb(112 112 112 / 78%)"}} icon={faPen} />  
          <button  onClick={handleAddIdentifier} style={{marginRight:"30px"}} type="button" className="plus-button">+</button></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        {identifiers.map((identifier, index) => (
<div key={index}>
        <div className="row">
          <div className="col-md-4">
            {/* ORCID Id*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span> ORCID Id
              </label>
              <select name={`orcidId_${index}`}className="UD-set-dropdown">
                <option value="">Select Id</option>
                <option value=""> Id 1</option>
                <option value=""> Id 2</option>
                <option value=""> Id 3</option>
              </select>
            </div>
          </div>

          <div className="col-md-4">
            {/* Scopus Id */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Scopus Id
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`scopusId_${index}`}
                id={`scopusId_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Research Id*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Research Id
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`researchId_${index}`}
                id={`researchId_${index}`}
                
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Journal Publication */}



        <div>
          <p className="HS-heading">Journal Publication <button onClick={handleAddPublication}
 type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {publications.map((publication, index) => (
<div key={index}>
        <div className="row" >
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
                name={`year_${index}`}
                id={`year_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Title */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Title
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`title_${index}`}
                id={`title_${index}`}
                
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Author Role/ Inventor*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Author Role/ Inventor
              
              </label>
              
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`authorRole_${index}`}
                id={`authorRole_${index}`}
             
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Indexing*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Indexing
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`indexing_${index}`}
                id={`indexing_${index}`}
              
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Journal Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Journal Name
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`journalName_${index}`}
                id={`journalName_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* ISSN*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>ISSN
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`issn_${index}`}
                id={`issn_${index}`}
               
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Volume*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Volume
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`volume_${index}`}
                id={`volume_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Issue*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Issue
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`issue_${index}`}
                id={`issue_${index}`}
                
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Conference Publication */}

        <div>
          <p className="HS-heading">Conference Publication <button onClick={handleAddPublication} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {publications.map((publication, index) => (
<div key={index}>
        <div className="row" >
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
            {/* Title */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Title
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
            {/* Author Role/ Inventor*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Author Role/ Inventor
                
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

        <div className="row" >
          <div className="col-md-4">
            {/* Indexing*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Indexing
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
            {/* Journal Name */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Journal Name
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
            {/* ISSN*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>ISSN
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

        <div className="row">
          <div className="col-md-4">
            {/* Volume*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Volume
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
            {/* Issue*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Issue
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
        ))}

        {/* Patent*/}

        <div>
          <p className="HS-heading">Patent <button   onClick={handleAddApplication} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {applications.map((application, index) => (
<div key={index}>
        <div className="row" >
          <div className="col-md-4">
            {/* Application ID*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Application ID
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`applicationId_${index}`}
                id={`applicationId_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Title */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Title
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`title_${index}`}
                id={`title_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/*Year*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Year
               
              </label>
             
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`year_${index}`}
                id={`year_${index}`}
               
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Published/Granted*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Published/Granted
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`publishedGranted_${index}`}
                id={`publishedGranted_${index}`}
              
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Country*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Country
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`country_${index}`}
                id={`country_${index}`}
                
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Copyright*/}

        <div>
          <p className="HS-heading">Copyright <button onClick={handleAddApplication} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {applications.map((application, index) => (
<div key={index}>
        <div className="row" >
          <div className="col-md-4">
            {/* Application ID*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Application ID
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`applicationId_${index}`}
                id={`applicationId_${index}`}
                
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Title */}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Title
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`title_${index}`}
                id={`title_${index}`}
                
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/*Year*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Year

              </label>
              
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`year_${index}`}
                id={`year_${index}`}
               
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* Published/Granted*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Published/Granted
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`publishedGranted_${index}`}
                id={`publishedGranted_${index}`}
               
              ></input>
            </div>
          </div>

          <div className="col-md-4">
            {/* Country*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Country
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name={`country_${index}`}
                id={`country_${index}`}
              
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        <div>
  <button className="savebtn" type="button">Save Changes</button>
</div>
      </div>
    </div>
    </form>
  </>
  )
}

export default EditResearchForm