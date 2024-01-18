import React from "react";

import "./ResearchWorks.css";

function ResearchWorks({ formValues, setFormValues }) {
  // const [formValues, setFormValues] = useState({
  //   researches: [{ orcid: '', scopusid: '', researchid: '' }],
  //   journal_publications: [{
  //     journal_publication_year: '',
  //     journal_publication_title: '',
  //     journal_publication_author: '',
  //     journal_publication_index: '',
  //     journal_publication_name: '',
  //     journal_publication_issn: '',
  //     journal_publication_volume: '',
  //     journal_publication_issue: ''
  //   }],
  //   conference_publications: [{
  //     conference_publication_year: '',
  //     conference_publication_title: '',
  //     conference_publication_author: '',
  //     conference_publication_index: '',
  //     conference_publication_name: '',
  //     conference_publication_issn: '',
  //     conference_publication_volume: '',
  //     conference_publication_issue: ''
  //   }],
  //   patents: [{
  //     patent_applicationid: '',
  //     patent_application_title: '',
  //     patent_application_year: '',
  //     patent_granted_by: '',
  //     patent_incountry: ''
  //   }],
  //   copyrights: [{
  //     copyright_applicationid: '',
  //     copyright_title: '',
  //     copyright_year: '',
  //     copyright_granted_by: '',
  //     copyright_incountry: '',

  //   }]
  // });

  const handleAddIdentifier = (e) => {
    e.preventDefault();
    setFormValues((prevData) => ({
      UserDetails: {
        ...prevData.UserDetails,
        researches: [
          ...prevData.UserDetails.researches,
          { orcid: "", scopusid: "", researchid: "" },
        ],
      },
    }));
  };
  const handleAddPublication = (e) => {
    e.preventDefault();
    setFormValues((prevData) => ({
      UserDetails: {
        ...prevData.UserDetails,
        journal_publications: [
          ...prevData.UserDetails.journal_publications,
          {
            journal_publication_year: "",
            journal_publication_title: "",
            journal_publication_author: "",
            journal_publication_index: "",
            journal_publication_name: "",
            journal_publication_issn: "",
            journal_publication_volume: "",
            journal_publication_issue: "",
          },
        ],
      },
    }));
  };

  const handleAddConference = (e) => {
    e.preventDefault();
    setFormValues((prevData) => ({
      UserDetails: {
        // ...prevData.UserDetails,
        conference_publications: [
          ...prevData.UserDetails.conference_publications,
          {
            conference_publication_year: "",
            conference_publication_title: "",
            conference_publication_author: "",
            conference_publication_index: "",
            conference_publication_name: "",
            conference_publication_issn: "",
            conference_publication_volume: "",
            conference_publication_issue: "",
          },
        ],
      },
    }));
  };
  const handleAddPatent = (e) => {
    e.preventDefault();
    setFormValues((prevData) => ({
      UserDetails: {
        ...prevData.UserDetails,
        patents: [
          ...prevData.UserDetails.patents,
          {
            patent_applicationid: "",
            patent_application_title: "",
            patent_application_year: "",
            patent_granted_by: "",
            patent_incountry: "",
          },
        ],
      },
    }));
  };
  const handleAddCopyright = (e) => {
    e.preventDefault();
    setFormValues((prevData) => ({
      UserDetails: {
        ...prevData.UserDetails,
        copyrights: [
          ...prevData.UserDetails.copyrights,
          {
            copyright_applicationid: "",
            copyright_title: "",
            copyright_year: "",
            copyright_granted_by: "",
            copyright_incountry: "",
          },
        ],
      },
    }));
  };

  const handleInputJournalChange = (e, index, field) => {
    const newJournalPublications = [...formValues.journal_publications];
    newJournalPublications[index][field] = e.target.value;
    setFormValues((prevData) => ({
      ...prevData,
      journal_publications: newJournalPublications,
    }));
  };
  const handleInputConferenceChange = (e, index, field) => {
    const newConferencePublications = [...formValues.conference_publications];
    newConferencePublications[index][field] = e.target.value;
    setFormValues((prevData) => ({
      UserDetails: {
        ...prevData.UserDetails,
        conference_publications: newConferencePublications,
      },
    }));
  };

  const handleInputPatentChange = (e, index, field) => {
    const newPatents = [...formValues.patents];
    newPatents[index][field] = e.target.value;
    setFormValues((prevData) => ({
      UserDetails: { ...prevData.UserDetails, patents: newPatents },
    }));
  };
  const handleInputCopyrightChange = (e, index, field) => {
    const newCopyrights = [...formValues.copyrights];
    newCopyrights[index][field] = e.target.value;
    setFormValues((prevData) => ({
      UserDetails: { ...prevData.UserDetails, copyrights: newCopyrights },
    }));
  };

  return (
    <form method="post">
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

          {formValues.researches.map((researches, index) => (
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
                        const newIdentifiers = [...formValues.identifiers];
                        newIdentifiers[index].orcid = e.target.value;
                        setFormValues((prevData) => ({ ...prevData, identifiers: newIdentifiers }));
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
                      select
                      name="orcid"
                      id=""
                      value={researches.orcid}
                      onChange={(e) => {
                        const newresearches = [...formValues.researches];
                        newresearches[index].orcid = e.target.value;
                        setFormValues((prevData) => ({
                          ...prevData,
                          researches: newresearches,
                        }));
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
                        const newresearches = [...formValues.researches];
                        newresearches[index].scopusid = e.target.value;
                        setFormValues((prevData) => ({
                          ...prevData,
                          researches: newresearches,
                        }));
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
                        const newresearches = [...formValues.researches];
                        newresearches[index].researchid = e.target.value;
                        setFormValues((prevData) => ({
                          ...prevData,
                          researches: newresearches,
                        }));
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

          {formValues.journal_publications.map(
            (journal_publications, index) => (
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_year"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_title"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_author"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_index"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_name"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_issn"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_volume"
                          )
                        }
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
                        onChange={(e) =>
                          handleInputJournalChange(
                            e,
                            index,
                            "journal_publication_issue"
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

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

          {formValues.conference_publications.map(
            (conference_publications, index) => (
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
                        value={
                          conference_publications.conference_publication_year
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_year"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_title
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_title"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_author
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_author"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_index
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_index"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_name
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_name"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_issn
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_issn"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_volume
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_volume"
                          )
                        }
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
                        value={
                          conference_publications.conference_publication_issue
                        }
                        onChange={(e) =>
                          handleInputConferenceChange(
                            e,
                            index,
                            "conference_publication_issue"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

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

          {formValues.patents.map((patent, index) => (
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
                      onChange={(e) =>
                        handleInputPatentChange(
                          e,
                          index,
                          "patent_applicationid"
                        )
                      }
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
                      onChange={(e) =>
                        handleInputPatentChange(
                          e,
                          index,
                          "patent_application_title"
                        )
                      }
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
                      onChange={(e) =>
                        handleInputPatentChange(
                          e,
                          index,
                          "patent_application_year"
                        )
                      }
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
                      onChange={(e) =>
                        handleInputPatentChange(e, index, "patent_granted_by")
                      }
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
                      onChange={(e) =>
                        handleInputPatentChange(e, index, "patent_incountry")
                      }
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

          {formValues.copyrights.map((copyright, index) => (
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
                      onChange={(e) =>
                        handleInputCopyrightChange(
                          e,
                          index,
                          "copyright_applicationid"
                        )
                      }
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
                      onChange={(e) =>
                        handleInputCopyrightChange(e, index, "copyright_title")
                      }
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
                      onChange={(e) =>
                        handleInputCopyrightChange(e, index, "copyright_year")
                      }
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
                      onChange={(e) =>
                        handleInputCopyrightChange(
                          e,
                          index,
                          "copyright_granted_by"
                        )
                      }
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
                      onChange={(e) =>
                        handleInputCopyrightChange(
                          e,
                          index,
                          "copyright_incountry"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default ResearchWorks;
