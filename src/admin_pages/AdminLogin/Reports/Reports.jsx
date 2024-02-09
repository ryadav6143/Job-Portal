import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
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
              <td>{candidate.candidate.first_name|| "-"}</td>
              <td>{candidate.candidate.email|| "-"}</td>
              <td>{candidate.candidate.contact_1|| "-"}</td>
              <td>{candidate.applied_post_master?.post_name|| "-"}</td>
              <td>{candidate.applied_subpost_master?.subpost_name|| "-"}</td>
              <td>{candidate.job_category_master?.category_name|| "-"}</td>
              <td>{candidate.candidate.specialization|| "-"}</td>
              <td>
        {candidate.candidate.resume_file_link ?
          <a href={candidate.candidate.resume_file_link} target="_blank" rel="noopener noreferrer">
            View Resume
          </a> :
          "-"}
      </td>
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
