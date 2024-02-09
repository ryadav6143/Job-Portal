import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Reports() {
  const [selectedPost, setSelectedPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubpost, setSelectedSubpost] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.8:8090/v1/api/candidateAppliedPost/getCandidatesAppliedPost");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePostChange = (e) => {
    setSelectedPost(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleSubpostChange = (e) => {
    setSelectedSubpost(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((candidate) => {
    return (
      (selectedPost === '' || candidate.applied_post_master?.post_name === selectedPost) &&
      (selectedCategory === '' || candidate.job_category_master?.category_name === selectedCategory) &&
      (selectedSubpost === '' || candidate.applied_subpost_master?.subpost_name === selectedSubpost)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Extracting unique post, category, and subpost names
  const postOptions = [...new Set(data.map(candidate => candidate.applied_post_master?.post_name))];
  const categoryOptions = [...new Set(data.map(candidate => candidate.job_category_master?.category_name))];
  const subpostOptions = [...new Set(data.map(candidate => candidate.applied_subpost_master?.subpost_name))];

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-4">
          <label>Select Post:</label>
          <select className="form-control" value={selectedPost} onChange={handlePostChange}>
            <option value="">All</option>
            {postOptions.map((post, index) => (
              <option key={index} value={post}>{post}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label>Select Category:</label>
          <select className="form-control" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label>Select Subpost:</label>
          <select className="form-control" value={selectedSubpost} onChange={handleSubpostChange}>
            <option value="">All</option>
            {subpostOptions.map((subpost, index) => (
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
          </tr>
        </thead>
        <tbody>
          {currentItems.map((candidates) => (
            <tr key={candidates.id}>
              <td>{candidates.candidate.first_name}</td>
              <td>{candidates.candidate.email}</td>
              <td>{candidates.candidate.contact_1}</td>
              <td>{candidates.applied_post_master?.post_name}</td>
              <td>{candidates.applied_subpost_master?.subpost_name}</td>
              <td>{candidates.job_category_master?.category_name}</td>
              <td>{candidates.candidate.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination>
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Reports;
