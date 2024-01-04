import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./ResearchWorks.css";

function ResearchWorks() {
  return (
    <>
      <div className="container">
        <div style={{marginTop:"20px"}}>
          <div>
            <h5 className="UD-heading">Research Work</h5>
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
                <select name="" className="UD-set-dropdown">
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
                  name=""
                  id=""
                  required
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
                  name=""
                  id=""
                  required
                ></input>
              </div>
            </div>
          </div>

          {/* Journal Publication */}

          <div>
            <p className="HS-heading">Journal Publication   <button type="button" className="plus-button">+</button></p>
          </div>


          <div className="row">
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
                  required
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
                  required
                ></input>
              </div>
            </div>

            <div className="col-md-4">
              {/* Author Role/ Inventor*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span></span>Author Role/ Inventor
                  {/* <button type="button" className="plus-button">+</button> */}
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                ></input>
              </div>
            </div>
          </div>

          {/* Conference Publication */}

          <div>
            <p className="HS-heading">Conference Publication  <button type="button" className="plus-button">+</button></p>
          </div>

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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                ></input>
              </div>
            </div>
          </div>

          {/* Patent*/}

          <div>
            <p className="HS-heading">Patent <button type="button" className="plus-button">+</button></p>
          </div>

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
                  name=""
                  id=""
                  required
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
                  required
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
                  name=""
                  id=""
                  required
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
                  name=""
                  id=""
                  required
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
                  name=""
                  id=""
                  required
                ></input>
              </div>
            </div>
          </div>

          {/* Copyright*/}

          <div>
            <p className="HS-heading">Copyright 
                  <button type="button" className="plus-button">+</button></p>
          </div>

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
                  name=""
                  id=""
                  required
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
                  required
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
                  name=""
                  id=""
                  required
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
                  name=""
                  id=""
                  required
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
                  name=""
                  id=""
                  required
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchWorks;
