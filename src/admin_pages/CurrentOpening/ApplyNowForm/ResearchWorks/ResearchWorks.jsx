import React, { useState } from "react";

import "./ResearchWorks.css";

function ResearchWorks() {

  const [researchData, setResearchData] = useState({
    researches: [{ orcid: '', scopusid: '', researchid: '' }],
    journal_publications: [{
      journal_publication_year: '',
      journal_publication_title: '',
      journal_publication_author: '',
      journal_publication_index: '',
      journal_publication_name: '',
      journal_publication_issn: '',
      journal_publication_volume: '',
      journal_publication_issue: ''
    }],
    conference_publications: [{
      conference_publication_year: '',
      conference_publication_title: '',
      conference_publication_author: '',
      conference_publication_index: '',
      conference_publication_name: '',
      conference_publication_issn: '',
      conference_publication_volume: '',
      conference_publication_issue: ''
    }],
    patents: [{
      patent_applicationid: '',
      patent_application_title: '',
      patent_application_year: '',
      patent_granted_by: '',
      patent_incountry: ''
    }],
    copyrights: [{
      copyright_applicationid: '',
      copyright_title: '',
      copyright_year: '',
      copyright_granted_by: '',
      copyright_incountry: '',


    }]
  });


  const handleAddIdentifier = () => {
    setResearchData((prevData) => ({
      ...prevData,
      researches: [...prevData.researches, { orcid: '', scopusid: '', researchid: '' }]
    }));
  };



  const handleAddPublication = () => {
    setResearchData((prevData) => ({
      ...prevData,
      journal_publications: [...prevData.journal_publications, {
        journal_publication_year: '',
        journal_publication_title: '',
        journal_publication_author: '',
        journal_publication_index: '',
        journal_publication_name: '',
        journal_publication_issn: '',
        journal_publication_volume: '',
        journal_publication_issue: ''
      }]
    }));
  };

  const handleAddConference = () => {
    setResearchData((prevData) => ({
      ...prevData,
      conference_publications: [...prevData.conference_publications, {
        conference_publication_year: '',
        conference_publication_title: '',
        conference_publication_author: '',
        conference_publication_index: '',
        conference_publication_name: '',
        conference_publication_issn: '',
        conference_publication_volume: '',
        conference_publication_issue: ''
      }]
    }));
  };
  const handleAddPatent = () => {
    setResearchData((prevData) => ({
      ...prevData,
      patents: [...prevData.patents, {
        patent_applicationid: '',
        patent_application_title: '',
        patent_application_year: '',
        patent_granted_by: '',
        patent_incountry: ''
      }]
    }));
  };
  const handleAddCopyright = () => {
    setResearchData((prevData) => ({
      ...prevData,
      copyrights: [...prevData.copyrights, {
        copyright_applicationid: '',
        copyright_title: '',
        copyright_year: '',
        copyright_granted_by: '',
        copyright_incountry: ''
      }]
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Values:', researchData);
  };
  return (

    <form method="post" onSubmit={handleSubmit}>
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

          {researchData.researches.map((researches, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-4">
                  {/* ORCID Id*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span> ORCID Id
                    </label>
                    {/* <select name="orcid" className="UD-set-dropdown"
                      value={identifier.orcid}
                      onChange={(e) => {
                        const newIdentifiers = [...researchData.identifiers];
                        newIdentifiers[index].orcid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, identifiers: newIdentifiers }));
                      }}
                    >

                      <option value="">Select Id</option>
                      <option value="Id 1"> Id 1</option>
                      <option value="Id 2"> Id 2</option>
                      <option value="Id 3"> Id 3</option>
                    </select> */}
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      select name="orcid"
                      id=""
                      value={researches.orcid}
                      onChange={(e) => {
                        const newresearches = [...researchData.researches];
                        newresearches[index].orcid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, researches: newresearches }));
                      }}
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
                      value={researches.scopusid}
                      onChange={(e) => {
                        const newresearches = [...researchData.researches];
                        newresearches[index].scopusid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, researches: newresearches }));
                      }}
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
                      value={researches.researchid}
                      onChange={(e) => {
                        const newresearches = [...researchData.researches];
                        newresearches[index].researchid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, researches: newresearches }));
                      }}
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

          {researchData.journal_publications.map((journal_publications, index) => (
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
                      value={journal_publications.journal_publication_year}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_year = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_title}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_title = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_author}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_author = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_index}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_index = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_name}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_name = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_issn}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_issn = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_volume}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_volume = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                      value={journal_publications.journal_publication_issue}
                      onChange={(e) => {
                        const newjournal_publications = [...researchData.journal_publications];
                        newjournal_publications[index].journal_publication_issue = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, journal_publications: newjournal_publications }));
                      }}
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
                onClick={handleAddConference}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {researchData.conference_publications.map((conference_publications, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-4">
                  {/* Year */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Year
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="conference_publication_year"
                      value={conference_publications.conference_publication_year}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_year = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    />
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
                      value={conference_publications.conference_publication_title}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_title = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Author Role/Inventor */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Author Role/Inventor
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="conference_publication_author"
                      value={conference_publications.conference_publication_author}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_author = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    />
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
                      value={conference_publications.conference_publication_index}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_index = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
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
                      value={conference_publications.conference_publication_name}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_name = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
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
                      value={conference_publications.conference_publication_issn}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_issn = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  {/* Volume */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Volume
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="conference_publication_volume"
                      value={conference_publications.conference_publication_volume}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_volume = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Issue */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Issue
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="conference_publication_issue"
                      value={conference_publications.conference_publication_issue}
                      onChange={(e) => {
                        const newconference_publications = [...researchData.conference_publications];
                        newconference_publications[index].conference_publication_issue = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, conference_publications: newconference_publications }));
                      }}
                    />
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
                onClick={handleAddPatent}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {researchData.patents.map((patent, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-4">
                  {/* Application ID */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Application ID
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="patent_applicationid"
                      value={patent.patent_applicationid}
                      onChange={(e) => {
                        const newPatents = [...researchData.patents];
                        newPatents[index].patent_applicationid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, patents: newPatents }));
                      }}
                    />
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
                      value={patent.patent_application_title}
                      onChange={(e) => {
                        const newPatents = [...researchData.patents];
                        newPatents[index].patent_application_title = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, patents: newPatents }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Year */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Year
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="patent_application_year"
                      value={patent.patent_application_year}
                      onChange={(e) => {
                        const newPatents = [...researchData.patents];
                        newPatents[index].patent_application_year = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, patents: newPatents }));
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  {/* Published/Granted */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Published/Granted
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="patent_granted_by"
                      value={patent.patent_granted_by}
                      onChange={(e) => {
                        const newPatents = [...researchData.patents];
                        newPatents[index].patent_granted_by = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, patents: newPatents }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Country */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Country
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="patent_incountry"
                      value={patent.patent_incountry}
                      onChange={(e) => {
                        const newPatents = [...researchData.patents];
                        newPatents[index].patent_incountry = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, patents: newPatents }));
                      }}
                    />
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
                onClick={handleAddCopyright}
                type="button"
                className="editprofile-plus-button"
              >
                +
              </button>
            </p>
          </div>

          {researchData.copyrights.map((copyright, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-4">
                  {/* Application ID */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Application ID
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="copyright_applicationid"
                      value={copyright.copyright_applicationid}
                      onChange={(e) => {
                        const newCopyrights = [...researchData.copyrights];
                        newCopyrights[index].copyright_applicationid = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, copyrights: newCopyrights }));
                      }}
                    />
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
                      value={copyright.copyright_title}
                      onChange={(e) => {
                        const newCopyrights = [...researchData.copyrights];
                        newCopyrights[index].copyright_title = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, copyrights: newCopyrights }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Year */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Year
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="copyright_year"
                      value={copyright.copyright_year}
                      onChange={(e) => {
                        const newCopyrights = [...researchData.copyrights];
                        newCopyrights[index].copyright_year = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, copyrights: newCopyrights }));
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  {/* Published/Granted */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Published/Granted
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="copyright_granted_by"
                      value={copyright.copyright_granted_by}
                      onChange={(e) => {
                        const newCopyrights = [...researchData.copyrights];
                        newCopyrights[index].copyright_granted_by = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, copyrights: newCopyrights }));
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  {/* Country */}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Country
                    </label>
                    <input
                      className="UD-set-input"
                      type="text"
                      placeholder=" "
                      name="copyright_incountry"
                      value={copyright.copyright_incountry}
                      onChange={(e) => {
                        const newCopyrights = [...researchData.copyrights];
                        newCopyrights[index].copyright_incountry = e.target.value;
                        setResearchData((prevData) => ({ ...prevData, copyrights: newCopyrights }));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">
        Submit
      </button>

    </form>
  );
}

export default ResearchWorks;
