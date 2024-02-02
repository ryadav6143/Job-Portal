import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddOpenings.css";
import adminApiService from "../../../../adminApiService";
function AddOpenings() {
  const navigate = useNavigate();
  // const [category, setCategory] = useState("");
  // const [departmant, setDepartmant] = useState("");

  // const [subPost, setSubPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departmant, setDepartmant] = useState([]);

  const [jobCategories, setJobCategories] = useState([]);

  const [post, setPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subPost, setSubPost] = useState("");
  const [selectedSubPost, setSelectedSubPost] = useState("");
  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await adminApiService.getJobCategories();
        setJobCategories(response.data);
      } catch (error) {
        console.error("Error fetching job categories:", error);
      }
    };

    fetchJobCategories();
  }, []);
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await adminApiService.getDepartments();
        setDepartmant(response.data);
        console.log("department", response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const selectedCategoryData = jobCategories.find(
      (category) => category.category_name === selectedCategory
    );
    setPost(
      selectedCategoryData ? selectedCategoryData.applied_post_masters : []
    );
    setSelectedPost("");
    setSubPost([]);
  };

  const handlePost = (event) => {
    // setPost(event.target.value);
    const selectedPost = event.target.value;
    setSelectedPost(selectedPost);
    const selectedPostData = post.find(
      (post) => post.post_name === selectedPost
    );
    setSubPost(
      selectedPostData ? selectedPostData.applied_subpost_masters : []
    );
  };
  const handleSubPost = (event) => {
    const selectedSubPostName = event.target.value;
    setSelectedSubPost(selectedSubPostName);
    const selectedSubPostData = subPost.find(
      (subpost) => subpost.subpost_name === selectedSubPostName
    );
    // Additional logic with selectedSubPostData if needed
  };

  const handleDepartmant = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleclick = () => {
    navigate("/adminpanel");
  };
  // const handleCategoryChange = (event) => {

  //   const selectedCategory = event.target.value;
  //   setSelectedCategory(selectedCategory);
  //   const selectedCategoryData = categories.find(
  //     (category) => category.category_name === selectedCategory
  //   );
  //   setFormData((prevData) => ({
  //     personalDetails: {
  //       ...prevData.personalDetails,
  //       job_category_master_id: selectedCategoryData
  //         ? selectedCategoryData.id
  //         : "",
  //     },
  //   }));
  //   setPosts(
  //     selectedCategoryData ? selectedCategoryData.applied_post_masters : []
  //   );
  //   // Reset selected post and subposts
  //   setSelectedPost("");
  //   setSubposts([]);
  // };

  return (
    <div>
      <div className="new-openings">
        <p>job_profile_master</p>
        <p className="master-heading">Add New Opening</p>
        <div className="new-openings-form">
          <form action="">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">No. Of Openings</label>
                <input type="number" placeholder="Add No. Of Openings" />
              </div>

              <div className="col-6">
                <label htmlFor="dropdown2">Category</label>
                <select
                  name="category_name"
                  id="categoryDropdown"
                  value={selectedCategory}
                  onChange={handleCategory}
                  required
                >
                  <option value="">Select a category</option>
                  {jobCategories.map((category) => (
                    <option
                      key={category.category_name}
                      value={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">Department</label>
                <select
                  id="departmentDropdown"
                  value={selectedDepartment}
                  onChange={handleDepartmant}
                >
                  <option value="">Select Department</option>
                  {departmant.map((department) => (
                    <option
                      key={department.id} // assuming 'id' is unique for each department
                      value={department.dept_name}
                    >
                      {department.dept_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="">Post</label>
                <select
                  id="dropdown"
                  onChange={handlePost}
                  value={selectedPost}
                  required
                >
                  <option value="">Select a post</option>
                  {post.map((post) => (
                    <option key={post.post_name} value={post.post_name}>
                      {post.post_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">SubPost</label>
                <select
                  id="dropdown2"
                  value={selectedSubPost}
                  onChange={handleSubPost}
                >
                  <option value="">-- Select SubPost --</option>
                  {Array.isArray(subPost) &&
                    subPost.map((subpost) => (
                      <option
                        key={subpost.subpost_name}
                        value={subpost.subpost_name}
                      >
                        {subpost.subpost_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor=""> Qualification & Experience</label>
                <input
                  type="text"
                  placeholder=" Add Qualification And Experience
"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label htmlFor=""> Highly Desirable</label>
                <input type="text" placeholder="Add Highly Desirable" />
              </div>
              <div className="col-6">
                <label htmlFor="">Last Date</label>
                <input type="date" />
              </div>
            </div>
            <div>
              <p id="master-sub-headings">
                Required Fields For Interview Schedule
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Eligibility criteria</label>
                <input type="text" placeholder="Add Eligibility Criteria" />
              </div>
              <div className="col-6">
                <label htmlFor="">Add Responsible Person's Contact </label>
                <input type="text" placeholder="Add Contact" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="">Day-1</label>
                <input type="date" />
              </div>
              <div className="col-4">
                <label htmlFor="">Day-2</label>
                <input type="date" />
              </div>
              <div className="col-4">
                <label htmlFor="">Day-3</label>
                <input type="date" />
              </div>
            </div>
            <div className="row toggle-btns">
              <div className="col-4">
                <p>Add To Current Opening</p>
                <label class="switch">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
              <div className="col-4">
                <p>Add To Interview Schedule</p>
                <label class="switch">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
              <div className="col-4">
                <p>Publish To Job Profile</p>
                <label class="switch">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
            <div>
              <button type="submit" id="add-job" onClick={handleclick}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddOpenings;
