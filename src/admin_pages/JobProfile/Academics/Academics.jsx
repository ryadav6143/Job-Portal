import React, { useEffect, useState } from "react";
import "./Academics.css";
import Header from "../../../components/Header/Header";
import Footers from "../../../components/Footer/Footers";
import adminApiService from "../../adminApiService";


function Academics() {
  const [department, setDepartment] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [jobprofileData, setJobprofileData] = useState([]);

  const fetchJobCategories = async () => {
    try {
      const response = await adminApiService.getJobCategories();
      setJobCategories(response.data);
    } catch (error) {
      console.error("Error fetching job categories:", error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await adminApiService.getDepartments();
      setDepartment(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await adminApiService.getJobProfileByCnD(selectedCategory, selectedDepartment);
      console.log("API response:", response.jobprofileData);
      setJobprofileData(response.jobprofileData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
    fetchJobCategories();
  
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, selectedDepartment]);

  return (
    <>
      <Header />
      <div className="apply-for-dean">
        <div className="post-name">
          <p>Job Profiles</p>
        </div>
        <div></div>
        <div></div>
        
        <div className="apply-btn-jp">
          <button type="button">
            <a href="/apply-now">Apply Now</a>
          </button>
        </div>
      </div>
      <div className="courses row">
        <div className="col-md-4 ">
          <label>Select Category:</label>
          <select
           
            id="categoryDropdown"
            name="category_name"
            className="form-control"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {jobCategories.map((category) => (
              <option key={category.id} value={category.category_name}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 ">
          <label>Select Department:</label>
          <select
            name="dept_name"
            id="departmentDropdown"
            className="form-control"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">All</option>
            {department.map((dept) => (
              <option key={dept.id} value={dept.dept_name}>
                {dept.dept_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">Qualification and experience</th>
              <th scope="col">Highly desirable</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <th scope="row">Dean</th>
              <td>
                Qualification and experience as for the post of Professor in
                relevant discipline
              </td>
              <td>
                <p>
                  Distinguished academicians, prominent scientist, experienced
                  corporate professionals with:
                </p>
                <ul>
                  <li>
                    Experience in leading Indian/ foreign
                    institutions/universities.
                  </li>
                  <li>
                    Notable achievements in management and leadership in
                    planning and organizing academic, research, industry and/or
                    professional activities.
                  </li>
                  <li>
                    Notable achievement and a proven Institutions building
                    ability.
                  </li>
                  <li>
                    High quality research achievements in terms of Published
                    work, such as research papers, patents filed / obtained,
                    books and / or technical reports;
                  </li>
                  <li>
                    Experience of guiding the project work / dissertation of PG
                    /Research Students or supervising R&D projects in industry;
                  </li>
                  <li>
                    Capacity to undertake / lead sponsored R&D consultancy and
                    related activities.
                  </li>
                  <p>Experience at similar capacity is desirable</p>
                </ul>
              </td>
            </tr>
          </tbody> */}
        <tbody>
  {jobprofileData.length === 0 ? (
    <tr>
      <td colSpan="3" style={{color:"red"}}>No data found!</td>
    </tr>
  ) : (
    jobprofileData.map((data, index) => (
      <tr key={index}>
        <th scope="row">{data.applied_post_master.post_name}</th>
        <td>{data.education_require}</td>
        <td>{data.qualification_require}</td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
      <Footers />
    </>
  );
}

export default Academics;
