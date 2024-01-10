import React, { useState } from "react";
import "./MasterCurrentOpening.css";

function MasterCurrentOpening() {
  const [category, setCategory] = useState("");
  const [departmant, setDepartmant] = useState("");
  const [post, setPost] = useState("");
  const [subPost, setSubPost] = useState("");
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDepartmant = (event) => {
    setDepartmant(event.target.value);
  };
  const handlePost = (event) => {
    setPost(event.target.value);
  };
  const handleSubPost = (event) => {
    setSubPost(event.target.value);
  };
  return (
    <>
      <div className="center-container">
        <div className="new-openings">
          <p>Add New Opening</p>
          <div className="new-openings-form">
            <form action="">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">Category</label>
                  <select
                    id="dropdown"
                    value={category}
                    onChange={handleCategory}
                  >
                    <option value="">-- Select Category --</option>
                    <option value="option1">Academic</option>
                    <option value="option2">Administrative</option>
                    <option value="option3">Research</option>
                    <option value="option4">Technical</option>
                  </select>
                </div>

                <div className="col-6">
                  <label htmlFor="dropdown2">Department</label>
                  <select
                    id="dropdown2"
                    value={departmant}
                    onChange={handleDepartmant}
                  >
                    <option value="">-- select Department --</option>
                    <option value="optionA">Department 1</option>
                    <option value="optionB">Department 2</option>
                    <option value="optionC">Department 3</option>
                    {/* Add more options if needed */}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">Post</label>
                  <select id="dropdown" value={post} onChange={handlePost}>
                    <option value="">-- Select Post --</option>
                    <option value="option1">Post 1</option>
                    <option value="option2">Post 2</option>
                    <option value="option3">Post 3</option>
                    <option value="option4">Post 4</option>
                  </select>
                </div>

                <div className="col-6">
                  <label htmlFor="dropdown2">SubPost</label>
                  <select
                    id="dropdown2"
                    value={subPost}
                    onChange={handleSubPost}
                  >
                    <option value="">-- select SubPost --</option>
                    <option value="optionA">SubPost 1</option>
                    <option value="optionB">SubPost 2</option>
                    <option value="optionC">SubPost 3</option>
                    <option value="optionC">SubPost 4</option>
                    {/* Add more options if needed */}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="">Last Date</label>
                <input type="date" />
              </div>
              <div>
                <button type="submit" id="add-job">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterCurrentOpening;
