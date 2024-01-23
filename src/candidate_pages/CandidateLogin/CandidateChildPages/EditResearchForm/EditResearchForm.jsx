import React, { useState } from 'react';
import "./EditResearchForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import plusicon from "../../../../assets/logos/plus.png"
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
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px", paddingRight: "50px"}}>
      <div>
        <div>
          <h5 className="UD-heading">Research Work &nbsp; <FontAwesomeIcon   className="edit-pen-icon" icon={faPen} />  
        </h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

      
        <div className="row">
          <div className="col-md-4">
            {/* ORCID Id*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span> ORCID Id
              </label>
              <input
                className="UD-set-input"
                type="text"
                placeholder=" "
                name="scopusid"
                id=""
               
              ></input>
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
                name="scopusid"
                id=""
               
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
                name="researchid"
                id=""
                
              ></input>
            </div>
          </div>
        </div>
        

        {/* Journal Publication */}



        <div>
          <p className="HS-heading">Journal Publication <button onClick={handleAddPublication}
 type="button"  className="plus-buttons">
 <img src={plusicon} /></button></p>
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
                  name="journal_publication_year"
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
                name="journal_publication_title"
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
                name="journal_publication_author"
                id=""
             
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
                name="journal_publication_index"
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
                name="journal_publication_name"
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
                name="journal_publication_issn"
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
                name="journal_publication_volume"
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
                name="journal_publication_issue"
                id=""
                
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Conference Publication */}

        <div>
          <p className="HS-heading">Conference Publication <button onClick={handleAddPublication} type="button" className="plus-buttons">
          <img src={plusicon} /></button></p>
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
                name="conference_publication_year"
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
                name="conference_publication_title"
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
                name="conference_publication_author"
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
                name="conference_publication_index"
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
                name="conference_publication_name"
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
                name="conference_publication_issn"
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
                name="conference_publication_volume"
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
                name="conference_publication_issue"
                id=""
                
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Patent*/}

        <div>
          <p className="HS-heading">Patent <button   onClick={handleAddApplication} type="button"  className="plus-buttons">
          <img src={plusicon} /></button></p>
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
                name="patent_applicationid"
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
                name="patent_application_title"
                id=""
               
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
                name="patent_application_year"
                id=""
               
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
                name="patent_granted_by"
                id=""
              
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
                name="patent_incountry"
                id=""
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Copyright*/}

        <div>
          <p className="HS-heading">Copyright <button onClick={handleAddApplication} type="button"  className="plus-buttons">
          <img src={plusicon} /></button></p>
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
                name="copyright_applicationid"
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
                name="copyright_title"
                id=""
                
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
                name="copyright_year"
                id=""
               
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
                name="copyright_granted_by"
                id=""
               
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
                name="patent_incountry"
                id=""
              
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