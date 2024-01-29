import React, { useState,useEffect } from 'react';
import "./EditResearchForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plusicon from "../../../../assets/logos/plus-sign.png"
import { faPen } from '@fortawesome/free-solid-svg-icons';
import candidatesApiService from '../../../candidateService';
function EditResearchForm() {
  
  const [researches, setResearches] = useState([{}]);
  const [journal_publications, setjournal_publications] = useState([{}]);

  const [conference_publications, setconference_publications] = useState([{}]);
  const [patents, setPatents] = useState([{}]);
  const [copyrights, setCopyrights] = useState([{}]);
  const [data, setData] = useState([{}]);
 

const handleAddResearches = () => {
  setResearches((prevResearches) => [...prevResearches, {}]);
};


  const handleAddPublication = () => {
    setjournal_publications([...journal_publications, {}]);
  };
  const handleAddConferences = () => {
    setconference_publications([...conference_publications, {}]);
  };
  const handleAddPatents = () => {
    setPatents([...patents, {}]);
  };
  const handleAddCopyrights = () => {
    setCopyrights([...copyrights, {}]);
  };



  useEffect(() => {
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

    fetchData();
  }, []);


  const handleResearchChange = (index, field, value) => {
    const updatedResearches = [...researches];
    updatedResearches[index][field] = value;
    setResearches(updatedResearches);
  };
  const handleJournalPublicationChange = (index, field, value) => {
    const updatedJournalPublications = [...journal_publications];
    updatedJournalPublications[index][field] = value;
    setjournal_publications(updatedJournalPublications);
  };
  const handleConferencePublicationChange = (index, field, value) => {
    const updatedconferencePublications = [...conference_publications];
    updatedconferencePublications[index][field] = value;
    setconference_publications(updatedconferencePublications);
  };
  const handlePatentsChange = (index, field, value) => {
    const updatedPatents = [...patents];
    updatedPatents[index][field] = value;
    setconference_publications(updatedPatents);
  };
  const handleCopyrightsChange = (index, field, value) => {
    const updatedCopyrights = [...copyrights];
    updatedCopyrights[index][field] = value;
    setconference_publications(updatedCopyrights);
  };
  return (
    <>
    <form id='myForm'>
    <div className="container" style={{marginTop:"90px", paddingLeft:"50px", paddingRight: "50px"}}>
      <div>
        <div>
          <h5 className="UD-heading">Research Work &nbsp; <FontAwesomeIcon   className="edit-pen-icon" icon={faPen} />  
          <button  onClick={handleAddResearches} style={{marginRight:"30px"}} type="button" className="plus-button">+</button></h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

        {data && data.candidate_research_works && data.candidate_research_works.map((researches, index) => (
<div key={index}>
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
                name="orcid"
                id=""
                value={researches.orcid || ''}
                onChange={(e) => handleResearchChange(index, 'orcid', e.target.value)}
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
                value={researches.scopusid || ''}
                onChange={(e) => handleResearchChange(index, 'scopusid', e.target.value)}
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
                value={researches.researchid || ''}
                onChange={(e) => handleResearchChange(index, 'researchid', e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Journal Publication */}



        <div>
          <p className="HS-heading">Journal Publication <button onClick={handleAddPublication}
 type="button"  className="plus-buttons">
 <img src={plusicon} /></button></p>
        </div>

        {data?.candidate_journal_publications?.map((journal_publications, index) => (
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
               value={journal_publications.journal_publication_year || ''}
               onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_year', e.target.value)}
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
                value={journal_publications.journal_publication_title || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_title', e.target.value)}
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
                value={journal_publications.journal_publication_author || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_author', e.target.value)}
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
                value={journal_publications.journal_publication_index || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_index', e.target.value)}
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
                value={journal_publications.journal_publication_name || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_name', e.target.value)}
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
                value={journal_publications.journal_publication_issn || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_issn', e.target.value)}
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
                value={journal_publications.journal_publication_volume || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_volume', e.target.value)}
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
                value={journal_publications.journal_publication_issue || ''}
                onChange={(e) => handleJournalPublicationChange(index, 'journal_publication_issue', e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Conference Publication */}

        <div>
          <p className="HS-heading">Conference Publication <button onClick={handleAddConferences} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {data?.candidate_conference_publications?.map((conference_publications, index) => (
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
                value={conference_publications.conference_publication_year || ''}
               onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_year', e.target.value)}
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
                value={conference_publications.conference_publication_title || ''}
                onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_title', e.target.value)}
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
                value={conference_publications.conference_publication_author || ''}
               onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_author', e.target.value)}
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
                value={conference_publications.conference_publication_index || ''}
                onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_index', e.target.value)}
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
                value={conference_publications.conference_publication_name || ''}
                onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_name', e.target.value)}
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
                value={conference_publications.conference_publication_issn || ''}
                onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_issn', e.target.value)}
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
                value={conference_publications.conference_publication_volume || ''}
               onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_volume', e.target.value)}
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
                value={conference_publications.conference_publication_issue || ''}
                onChange={(e) => handleConferencePublicationChange(index, 'conference_publication_issue', e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Patent*/}

        <div>
          <p className="HS-heading">Patent <button   onClick={handleAddPatents} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {data?.candidate_patents && data.candidate_patents.map((patents, index) => (
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
                value={patents.patent_applicationid || ''}
                onChange={(e) => handlePatentsChange(index, 'patent_applicationid', e.target.value)}
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
                value={patents.patent_application_title || ''}
                onChange={(e) => handlePatentsChange(index, 'patent_application_title', e.target.value)}
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
                value={patents.patent_application_year || ''}
                onChange={(e) => handlePatentsChange(index, 'patent_application_year', e.target.value)}
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
                value={patents.patent_granted_by || ''}
                onChange={(e) => handlePatentsChange(index, 'patent_granted_by', e.target.value)}
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
                value={patents.patent_incountry || ''}
                onChange={(e) => handlePatentsChange(index, 'patent_incountry', e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        </div>
        ))}

        {/* Copyright*/}

        <div>
          <p className="HS-heading">Copyright <button onClick={handleAddCopyrights} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {data?.candidate_copyrights && data.candidate_copyrights.map((copyrights, index) => (
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
                value={copyrights.copyright_applicationid || ''}
                onChange={(e) => handleCopyrightsChange(index, 'copyright_applicationid', e.target.value)}
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
                value={copyrights.copyright_title || ''}
                onChange={(e) => handleCopyrightsChange(index, 'copyright_title', e.target.value)}
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
                value={copyrights.copyright_year || ''}
                onChange={(e) => handleCopyrightsChange(index, 'copyright_year', e.target.value)}
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
                value={copyrights.copyright_granted_by || ''}
                onChange={(e) => handleCopyrightsChange(index, 'copyright_granted_by', e.target.value)}
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
                name="copyright_incountry"
                id=""
                value={copyrights.copyright_incountry || ''}
                onChange={(e) => handleCopyrightsChange(index, 'copyright_incountry', e.target.value)}
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