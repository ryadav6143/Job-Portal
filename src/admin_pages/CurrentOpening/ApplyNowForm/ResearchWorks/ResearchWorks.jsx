import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./ResearchWorks.css";

function ResearchWorks() {
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
      <div className="container">
        <div style={{ marginTop: "20px" }}>
          <div>
            <h5 className="UD-heading">
              Research Work
              <button
                onClick={handleAddIdentifier}
                className="editprofile-plus-button"
              >
                +
              </button>
            </h5>

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
                    <select name="orcid" className="UD-set-dropdown">
                      <option value="">Select Id</option>
                      <option value=""> Id 1</option>
                      <option value=""> Id 2</option>
                      <option value=""> Id 3</option>
                    </select>
                    <FontAwesomeIcon className="set-icon" icon={faAngleDown} />
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
            </div>
          ))}

          {/* Journal Publication */}

          <div>
            <p className="HS-heading">
              Journal Publication{" "}
              <button
                onClick={handleAddPublication}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {publications.map((publication, index) => (
            <div key={index}>
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
                      {/* <button type="button" className="plus-button">+</button> */}
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
            <p className="HS-heading">
              Conference Publication{" "}
              <button
                onClick={handleAddPublication}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {publications.map((publication, index) => (
            <div key={index}>
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
            <p className="HS-heading">
              Patent{" "}
              <button
                onClick={handleAddApplication}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {applications.map((application, index) => (
            <div key={index}>
              <div className="row">
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
                      name=""
                      id="patent_application_year"
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
            <p className="HS-heading">
              Copyright
              <button
                onClick={handleAddApplication}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {applications.map((application, index) => (
            <div key={index}>
              <div className="row">
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
        </div>
      </div>
    </>
  );
}

export default ResearchWorks;
