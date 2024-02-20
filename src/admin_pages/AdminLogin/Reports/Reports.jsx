import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import adminApiService from "../../adminApiService";
import "./Reports.css";

import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
function Reports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPost, setSelectedPost] = useState('');
  const [selectedSubpost, setSelectedSubpost] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [subposts, setSubposts] = useState([]);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showPdfDialog, setShowPdfDialog] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobCategories, setJobCategories] = useState([]);
  const [post, setPost] = useState([]);
  const [subPost, setSubPost] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [updateField, setUpdateField] = useState({});
  useEffect(() => {
    fetchDataFromService();
  }, [currentPage, selectedCategory, selectedPost, selectedSubpost, itemsPerPage]);

  // const fetchData = async () => {
  //   try {
  //     let accessToken = localStorage.getItem("Token");
  //     accessToken = JSON.parse(accessToken);
  //     const response = await axios.get(`http://192.168.1.8:8090/v1/api/candidateAppliedPost/getCandidatesAppliedPostSorted?page=${currentPage}&limit=${itemsPerPage}&category=${selectedCategory}&appliedPost=${selectedPost}`,
  //       {
  //         headers: {
  //           'access-token': accessToken.token,
  //         },
  //       }

  //     );
  //     setData(response.data);
  //     const uniqueCategories = [...new Set(response.data.map(candidate => candidate.job_category_master?.category_name))];
  //     setCategories(uniqueCategories);
  //     setPosts(response.data.map(candidate => candidate.applied_post_master?.post_name));
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setLoading(false);
  //   }
  // };
  const fetchDataFromService = async () => {
    try {
      const data = await adminApiService.fetchData(currentPage, itemsPerPage, selectedCategory, selectedPost);
      setData(data);
      const uniqueCategories = [...new Set(data.map(candidate => candidate.job_category_master?.category_name))];
      setCategories(uniqueCategories);
      setPosts(data.map(candidate => candidate.applied_post_master?.post_name));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await adminApiService.getJobCategories();
        setJobCategories(response.data);
        console.log("response.data", response.data)
      } catch (error) {
        console.error("Error fetching job categories:", error);
      }
    };

    fetchJobCategories();
  }, []);


  // const handleCategoryChange = (e) => {
  //   const selectedCategory = e.target.value;
  //   setSelectedCategory(selectedCategory);

  //   setSelectedPost('');
  //   setSelectedSubpost('');
  // };

  // const handlePostChange = (e) => {
  //   const selectedPost = e.target.value;
  //   setSelectedPost(selectedPost);
  //   setSelectedSubpost('');
  // };

  // const handleSubpostChange = (e) => {
  //   setSelectedSubpost(e.target.value);
  //   setCurrentPage(1);
  // };

  const handleResumeClick = async (candidateId) => {
    try {
      const resumeData = await adminApiService.renderCandidateResume(candidateId);
      if (resumeData.type === "application/pdf") {
        const url = window.URL.createObjectURL(resumeData);
        setPdfUrl(url);
        setShowPdfDialog(true); // Open dialog when PDF is fetched
      } else {
        alert('No resume available for this candidate.');
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      alert('Error fetching resume.');
    }
  };

  const handleClosePdfDialog = () => {
    setShowPdfDialog(false); // Close dialog
  };



  const handleCandidateInfoClick = (candidate) => {
    console.log("Selected Candidate Data:", candidate);
    setSelectedCandidate(candidate.id);
  };

  const handleCategory = (fieldName, value) => {
    const selectedCategoryData = jobCategories.find(
      (category) => category.category_name === value
    );
    setSelectedCategory(value);
    setUpdateField((prevValues) => ({
      ...prevValues, [fieldName]: value.toString(),
      job_category_master_id: selectedCategoryData ? selectedCategoryData.id : "",
    }));
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
      job_category_master_id: selectedCategoryData ? selectedCategoryData.id : "",
    }));
    const selectedPostData =
      selectedCategoryData &&
      selectedCategoryData.applied_post_masters.map((post) => post.post_name);
    setPost(selectedPostData || []);
    setSelectedPost("");
    setSubPost([]);
  };

  const handlePost = (fieldName, value) => {
    if (selectedCategory === "") {
      alert("Please select a category first");
      return;
    }

    const selectedPostObject = jobCategories
      .find((category) => category.category_name === selectedCategory)
      .applied_post_masters.find((post) => post.post_name === value);
    const selectedSubPostData = selectedPostObject && selectedPostObject.applied_subpost_masters.map((subpost) => subpost.subpost_name);
    setSelectedPost(value);
    setUpdateField((prevValues) => ({
      ...prevValues, [fieldName]: value.toString(),
      applied_post_masters_id: selectedPostObject ? selectedPostObject.id : "",
    }));
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
      applied_post_masters_id: selectedPostObject ? selectedPostObject.id : "",
    }));
    setSubPost(selectedSubPostData || []);
  };


  const fetchCandidateDetails = async (candidateId) => {
    try {
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      const response = await adminApiService.getCandidatesById(accessToken.token, candidateId);
      console.log("getCandidatesById>>", response.data)
      setSelectedCandidate(response.data);
    } catch (error) {
      console.error("Error fetching candidate details:", error);
    }
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
  const isNextPageAvailable = data.length === itemsPerPage;
  const nextPage = () => {
    if (isNextPageAvailable) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    console.log("Selected Candidate:", selectedCandidate);
  }, [selectedCandidate]);



  return (
    <>
      <div className="container mt-5">

      <Dialog open={selectedCandidate !== null} onClose={() => setSelectedCandidate(null)}>
  <DialogTitle>Personal Information</DialogTitle>
  <DialogContent>
    {selectedCandidate && (
      <div>
        <p><strong>First Name:</strong> {selectedCandidate.first_name}</p>
        <p><strong>Email:</strong> {selectedCandidate.email}</p>
        <p><strong>Contact:</strong> {selectedCandidate.contact_1}</p>
        <p><strong>City:</strong> {selectedCandidate.city}</p>
        
        <div className="lower-box">
                  <div className="education-section">
                    <h5 className="section-heading">Education</h5>
                    {selectedCandidate.candidate_educations && selectedCandidate.candidate_educations.map((education, index) => (
                      <p key={index}><strong></strong> {education.exam_types_master.exam_name || "NULL"}-({education.degree_types_name || "NULL"})  </p>
                    ))}
                  </div>
          <div className="experience-section">
            <h5 className="section-heading">Experience</h5>
            {selectedCandidate.candidate_experiences && selectedCandidate.candidate_experiences.map((experience, index) => (
              <div key={index}>
                <p><strong>Company name:</strong> {experience.company_experience_name || "NULL"}</p>
                <p><strong>Designation:</strong> {experience.designation || "NULL"}</p>
                <p><strong>From:</strong> ({formatDateForInput(experience.exp_work_from) || "NULL"})</p>
                <p><strong>To:</strong> ({formatDateForInput(experience.exp_work_to) || "NULL"})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setSelectedCandidate(null)} color="primary">Close</Button>
  </DialogActions>
</Dialog>



      <Dialog open={showPdfDialog} onClose={handleClosePdfDialog} maxWidth="md">
          <DialogTitle>Resume</DialogTitle>
          <DialogContent>
            <embed src={pdfUrl} type="application/pdf" width="400px" height="500px" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePdfDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-md-4">
            <label>Select Category:</label>
            <select
              name="category_name"
              id="categoryDropdown"
              value={selectedCategory}
              className="form-control"
              // onChange={handleCategory}
              onChange={(e) =>
                handleCategory("category_name", e.target.value)
              }

            >
              <option value="">All</option>
              {jobCategories.map((category) => (
                <option key={category.category_name} value={category.category_name}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>Select Post:</label>
            <select id="dropdown"
              name="post_name"
              className="form-control"
              onClick={() => {
                if (selectedCategory === "") {
                  alert("Please select a category first");
                }
              }}
              onChange={(e) =>
                handlePost("post_name", e.target.value)
              }

            >
              <option value="">All</option>
              {post.map((post) => (
                <option key={post} value={post}>
                  {post}
                </option>
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
              <th>Category Name</th>
              <th>Specialization</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((candidate) => (
              <tr key={candidate.id}>
                <td style={{ cursor: 'pointer' }}>{candidate.candidate.first_name || "-"}</td>
                <td onClick={() => fetchCandidateDetails(candidate.candidate_id)} style={{ cursor: 'pointer' }}>{candidate.candidate.email || "-"}</td>
                <td onClick={() => fetchCandidateDetails(candidate.candidate_id)} style={{ cursor: 'pointer' }}>{candidate.candidate.contact_1 || "-"}</td>
                <td onClick={() => fetchCandidateDetails(candidate.candidate_id)} style={{ cursor: 'pointer' }}>{candidate.applied_post_master?.post_name || "-"}</td>
                <td onClick={() => fetchCandidateDetails(candidate.candidate_id)} style={{ cursor: 'pointer' }}>{candidate.job_category_master?.category_name || "-"}</td>
                <td onClick={() => fetchCandidateDetails(candidate.candidate_id)} style={{ cursor: 'pointer' }}>{candidate.candidate.specialization || "-"}</td>
                <td><Button variant="primary" onClick={() => handleResumeClick(candidate.id)}>View Resume</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="col-md-4">
            <label>Row:</label>
            <input
              type="number"
              className="row-input"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            />
          </div>
    

        <Pagination>
          <Pagination.Prev onClick={prevPage} />
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={nextPage} />
        </Pagination>

      </div>
    </>
  );
}

export default Reports;
