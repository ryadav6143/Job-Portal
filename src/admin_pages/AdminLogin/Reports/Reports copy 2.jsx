import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
// import { Document, Page } from 'react-pdf';
import { Modal, Button } from "react-bootstrap";
import adminApiService from "../../adminApiService";
import "./Reports.css"
function Reports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPost, setSelectedPost] = useState('');
  const [selectedSubpost, setSelectedSubpost] = useState('');

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [subposts, setSubposts] = useState([]);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await adminApiService.getCandidatesAppliedPost();
      setData(response);
      console.log("fetch data ", response);
      const uniqueCategories = [...new Set(response.map(candidate => candidate.job_category_master?.category_name))];
      setCategories(uniqueCategories);
      setSelectedCategory('');
      setPosts(response.map(candidate => candidate.applied_post_master?.post_name));
      setSelectedPost('');
      setSelectedSubpost('');
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };



  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    const filteredPosts = data
      .filter(candidate => !selectedCategory || candidate.job_category_master?.category_name === selectedCategory)
      .map(candidate => candidate.applied_post_master?.post_name);
    const uniquePosts = [...new Set(filteredPosts)];
    setPosts(uniquePosts);
    setSelectedPost('');
    setSelectedSubpost('');
  };

  const handlePostChange = (e) => {
    const selectedPost = e.target.value;
    setSelectedPost(selectedPost);
    setSelectedSubpost('');
    const filteredSubposts = data
      .filter(candidate => (!selectedCategory || candidate.job_category_master?.category_name === selectedCategory) &&
        (!selectedPost || candidate.applied_post_master?.post_name === selectedPost))
      .map(candidate => candidate.applied_subpost_master?.subpost_name);
    const uniqueSubposts = [...new Set(filteredSubposts)];
    setSubposts(uniqueSubposts);
  };

  const handleSubpostChange = (e) => {
    setSelectedSubpost(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((candidate) => {
    return (
      (selectedCategory === '' || candidate.job_category_master?.category_name === selectedCategory) &&
      (selectedPost === '' || candidate.applied_post_master?.post_name === selectedPost) &&
      (selectedSubpost === '' || candidate.applied_subpost_master?.subpost_name === selectedSubpost)
    );
  });



  const handleResumeClick = async (candidateId) => {
    try {
      const resumeData = await adminApiService.renderCandidateResume(candidateId);
      if (resumeData.type === "application/pdf") {
        const url = window.URL.createObjectURL(resumeData);
        setPdfUrl(url);
        setShowPdfModal(true);
        setLoading(false);
      } else {
        alert('No resume available for this candidate.');
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      alert('Error fetching resume.');
      setLoading(false);
    }
  };



  const handleCandidateInfoClick = (candidate) => {
    setSelectedCandidate(candidate);
  };


  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject.getTime())) {
      return "";
    }
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };


  return (
    <>
      <div className="container mt-5">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-md-4">
            <label>Select Category:</label>
            <select className="form-control" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label>Select Post:</label>
            <select className="form-control" value={selectedPost} onChange={handlePostChange}>
              <option value="">All</option>
              {posts.map((post, index) => (
                <option key={index} value={post}>{post}</option>
              ))}
            </select>
          </div>

          {/* <div className="col-md-4">
            <label>Select Subpost:</label>
            <select className="form-control" value={selectedSubpost} onChange={handleSubpostChange}>
              <option value="">All</option>
              {subposts.map((subpost, index) => (
                <option key={index} value={subpost}>{subpost}</option>
              ))}
            </select>
          </div> */}
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Post Name</th>
              {/* <th>Subpost Name</th> */}
              <th>Category Name</th>
              <th>Specialization</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((candidate) => (
              <tr key={candidate.id}>
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.candidate.first_name || "-"}</td>
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.candidate.email || "-"}</td>
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.candidate.contact_1 || "-"}</td>
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.applied_post_master?.post_name || "-"}</td>
                {/* <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.applied_subpost_master?.subpost_name || "-"}</td> */}
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.job_category_master?.category_name || "-"}</td>
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.candidate.specialization || "-"}</td>

                <td><Button variant="primary" onClick={() => handleResumeClick(candidate.id)}>View Resume</Button></td>


              </tr>
            ))}
          </tbody>
        </table>
        <Modal show={showPdfModal} onHide={() => setShowPdfModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {pdfUrl && <iframe src={pdfUrl} className="pdf-iframe"></iframe>}
          </Modal.Body>
        </Modal>



        <Modal show={selectedCandidate !== null} onHide={() => setSelectedCandidate(null)} dialogClassName="modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>Candidate Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCandidate && (
              <div>
                {/* Personal Information */}
                <div>
                  <h5>Personal Information</h5>
                  <p><strong>First Name:</strong> {selectedCandidate.candidate.first_name}</p>
                  <p><strong>Email:</strong> {selectedCandidate.candidate.email}</p>
                  <p><strong>Contact:</strong> {selectedCandidate.candidate.contact_1}</p>
                  <p><strong>city:</strong> {selectedCandidate.candidate.city}</p>

                </div>


                <div className="lower-box">
                  {/* Education */}

                  <div className="education-section">
                    <h5 className="section-heading">Education</h5>
                    {selectedCandidate.candidate.candidate_educations && selectedCandidate.candidate.candidate_educations.map((education, index) => (
                      <p key={index}><strong></strong> {education.exam_types_master.exam_name || "NULL"}-({education.degree_types_name || "NULL"})  </p>
                    ))}
                  </div>
                  {/* Experience */}

                  <div className="experience-section">
                    <h5 className="section-heading">Experience</h5>
                    {selectedCandidate.candidate.candidate_experiences && selectedCandidate.candidate.candidate_experiences.map((experience, index) => (
                      <><p key={index}><strong>Company name:</strong> {experience.company_experience_name || "NULL"}&nbsp;&nbsp;&nbsp;&nbsp;<strong>Designation:</strong> {experience.designation || "NULL"}</p>
                        <p key={index}><strong>From:</strong>-({formatDateForInput(experience.exp_work_from) || "NULL"})&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<strong>To:</strong>({formatDateForInput(experience.exp_work_to) || "NULL"})  </p>
                      </>
                    ))}

                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>


        <Pagination>
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
}

export default Reports;
