import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Document, Page } from 'react-pdf';
import { Modal, Button } from "react-bootstrap";
function Reports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPost, setSelectedPost] = useState('');
  const [selectedSubpost, setSelectedSubpost] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [subposts, setSubposts] = useState([]);


  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.8:8090/v1/api/candidateAppliedPost/getCandidatesAppliedPost");
      setData(response.data);
      console.log("fetch data ",response.data)
      const uniqueCategories = [...new Set(response.data.map(candidate => candidate.job_category_master?.category_name))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    setSelectedPost('');
    setSelectedSubpost('');
    const filteredPosts = data
      .filter(candidate => !selectedCategory || candidate.job_category_master?.category_name === selectedCategory)
      .map(candidate => candidate.applied_post_master?.post_name);
    const uniquePosts = [...new Set(filteredPosts)];
    setPosts(uniquePosts);
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const handleResumeClick = async (candidateId) => {
    try {
      const response = await axios.get(`http://192.168.1.8:8090/v1/api/candidates/renderCandidateResume?candidate_id=${candidateId}`, {
        responseType: 'blob'
      });  
  
      if (response.headers['content-type'] === 'application/pdf') {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);  
        setPdfUrl(url);
        setShowPdfModal(true);
      } else {
        alert('No resume available for this candidate.');
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      alert('Error fetching resume.');
    }
  };
  

  
  const handleCandidateInfoClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  



  return (
    <>
    <div className="container mt-5">
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

        <div className="col-md-4">
          <label>Select Subpost:</label>
          <select className="form-control" value={selectedSubpost} onChange={handleSubpostChange}>
            <option value="">All</option>
            {subposts.map((subpost, index) => (
              <option key={index} value={subpost}>{subpost}</option>
            ))}
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Post Name</th>
            <th>Subpost Name</th>
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
                <td onClick={() => handleCandidateInfoClick(candidate)} style={{ cursor: 'pointer' }}>{candidate.applied_subpost_master?.subpost_name || "-"}</td>
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
          {pdfUrl && <iframe src={pdfUrl} style={{ width: '100%', height: '600px' }}></iframe>}
        </Modal.Body>
      </Modal>


      <Modal show={selectedCandidate !== null} onHide={() => setSelectedCandidate(null)}>
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
        </div>
        {/* Education */}
        <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", marginBottom: "20px" }}>
          <h5 style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>Education</h5>
          <p><strong>Subpost Name:</strong> {selectedCandidate.applied_subpost_master?.subpost_name}</p>
          <p><strong>Category Name:</strong> {selectedCandidate.job_category_master?.category_name}</p>
        </div>
        {/* Experience */}
        <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", marginBottom: "20px" }}>
          <h5 style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>Experience</h5>
          <p><strong>Specialization:</strong> {selectedCandidate.candidate.specialization}</p>
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
