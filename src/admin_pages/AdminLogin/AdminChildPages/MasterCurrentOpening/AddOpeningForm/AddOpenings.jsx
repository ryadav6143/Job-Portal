import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddOpenings.css";

function AddOpenings() {
  const navigate = useNavigate();
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
  const handleclick = () => {
    navigate("/adminpanel");
  };
  return (
    <div>
      <div className="new-openings">
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
                  id="dropdown2"
                  value={category}
                  onChange={handleCategory}
                >
                  <option value="">-- Select Category --</option>
                  <option value="optionA">Category 1</option>
                  <option value="optionB">Category 2</option>
                  <option value="optionC">Category 3</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">Department</label>
                <select
                  id="dropdown2"
                  value={departmant}
                  onChange={handleDepartmant}
                >
                  <option value="">-- Select Department --</option>
                  <option value="optionA">Department 1</option>
                  <option value="optionB">Department 2</option>
                  <option value="optionC">Department 3</option>
                </select>
              </div>
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
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">SubPost</label>
                <select id="dropdown2" value={subPost} onChange={handleSubPost}>
                  <option value="">-- Select SubPost --</option>
                  <option value="optionA">SubPost 1</option>
                  <option value="optionB">SubPost 2</option>
                  <option value="optionC">SubPost 3</option>
                  <option value="optionC">SubPost 4</option>
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
              <div className="col-12">
                <label htmlFor="">Eligibility criteria</label>
                <input type="text" placeholder="Add Eligibility Criteria" />
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
              <div className="col-6">
                <p>Add To Current Opening</p>
                <label class="switch">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
              <div className="col-6">
                <p>Add to Interview Schedule</p>
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
