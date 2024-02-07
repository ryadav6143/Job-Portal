import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditOpenings.css";
import adminApiService from "../../../../adminApiService";
import { useParams } from "react-router-dom";
import axios from "axios";
function EditOpenings() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departmant, setDepartmant] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [post, setPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subPost, setSubPost] = useState([]);
  const [selectedSubPost, setSelectedSubPost] = useState("");
  const [addToCurrentOpening, setAddToCurrentOpening] = useState(false);
  const [addToInterviewSchedule, setAddToInterviewSchedule] = useState(false);
  const [publishToJobProfile, setPublishToJobProfile] = useState(false);
  const [jobProfiles, setJobProfiles] = useState([]);
  const [formValues, setFormValues] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApiService.getJobProfile(id);
        const data = response.data;
        const jobProfileData = data.find((profile) => profile.id === Number(id));
        setFormValues(jobProfileData);
        console.log("Fetched data:", jobProfileData);

        setSelectedCategory(jobProfileData.job_category_master.category_name);
        setSelectedDepartment(jobProfileData.department_master.dept_name);

        const selectedPostData =
          jobProfileData.applied_post_masters &&
          jobProfileData.applied_post_masters.map((post) => post.post_name);
        const selectedSubPostData =
          jobProfileData.applied_subpost_masters &&
          jobProfileData.applied_subpost_masters.map((subpost) => subpost.subpost_name);

        setPost(selectedPostData || []);
        setSubPost(selectedSubPostData || []);
        setSelectedPost("");
        setSelectedSubPost("");

         setAddToCurrentOpening(jobProfileData.publish_to_vacancy);
        setAddToInterviewSchedule(jobProfileData.publish_to_schedule_interview);
        setPublishToJobProfile(jobProfileData.publish_to_job_profile);
      } catch (error) {
        console.error("Error fetching job profile:", error);
      }
    };

    fetchData();
  }, [id]);

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
    // console.log("Selected category data:", selectedCategoryData);
    setFormValues((prevValues) => ({
      ...prevValues,
      job_category_master_id: selectedCategoryData ? selectedCategoryData.id : "",
    }));
  
    const selectedPostData =
      selectedCategoryData &&
      selectedCategoryData.applied_post_masters.map((post) => post.post_name);
    setPost(selectedPostData || []);
    setSelectedPost("");
    setSubPost([]);
  };
  
  const handlePost = (event) => {
    const selectedPost = event.target.value;
    setSelectedPost(selectedPost);
    const selectedPostObject = jobCategories
      .find((category) => category.category_name === selectedCategory)
      .applied_post_masters.find((post) => post.post_name === selectedPost);
    const selectedSubPostData =
      selectedPostObject &&
      selectedPostObject.applied_subpost_masters.map((subpost) => subpost.subpost_name);
    setFormValues((prevValues) => ({
      ...prevValues,
      applied_post_masters_id: selectedPostObject ? selectedPostObject.id : "",
    }));
    setSubPost(selectedSubPostData || []);
  };
  
  const handleSubPost = (event) => {
    const selectedSubPostName = event.target.value;
    setSelectedSubPost(selectedSubPostName);
    const selectedSubPostObject = jobCategories
      .find((category) => category.category_name === selectedCategory)
      .applied_post_masters.find((post) => post.post_name === selectedPost)
      .applied_subpost_masters.find((subpost) => subpost.subpost_name === selectedSubPostName);
    setFormValues((prevValues) => ({
      ...prevValues,
      applied_subpost_master_id: selectedSubPostObject ? selectedSubPostObject.id : "",
    }));
  };
  
  const handleDepartmant = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedDepartment(selectedDepartment);
    const selectedDepartmentData = departmant.find(
      (department) => department.dept_name === selectedDepartment
    );
    setFormValues((prevValues) => ({
      ...prevValues,
      department_master_id: selectedDepartmentData ? selectedDepartmentData.id : "",
    }));
  };
  
  const handleCheckboxChange = (checkboxName) => {
    switch (checkboxName) {
      case "addToCurrentOpening":
        setAddToCurrentOpening((prev) => !prev);
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_vacancy: !prevValues.publish_to_vacancy,
        }));
        break;
      case "addToInterviewSchedule":
        setAddToInterviewSchedule((prev) => !prev);
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_schedule_interview: !prevValues.publish_to_schedule_interview,
        }));
        break;
      case "publishToJobProfile":
        setPublishToJobProfile((prev) => !prev);
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_job_profile: !prevValues.publish_to_job_profile,
        }));
        break;
      default:
        break;
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [name]: value,
      };
      console.log("Updated form values:", updatedValues);
      return updatedValues;
    });
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("put data values", formValues);
  
    try {
      // Send PUT request to update job profile
      await axios.put(`http://192.168.1.8:8090/v1/api/jobProfileMaster/${id}`, formValues)
      .then(response => {
        console.log("PUT request response:", response);
      })
      .catch(error => {
        console.error("Error updating job profile:", error);
      });
      
      // Redirect or perform any other action upon successful update
    } catch (error) {
      console.error("Error updating job profile:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  
  
  

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <div className="new-openings">
        <p className="master-heading">Edit-Openings Data</p>
        <div className="new-openings-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">No. Of Openings</label>
                <input
                  type="number"
                  placeholder="Add No. Of Openings"
                  name="number_of_vacancy"
                  value={formValues.number_of_vacancy}
                  onChange={handleInputChange}
                />
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
                    <option key={category.category_name} value={category.category_name}>
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
                    <option key={department.id} value={department.dept_name}>
                      {department.dept_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="">Post</label>
                <select id="dropdown" onChange={handlePost} value={selectedPost} required>
                  <option value="">Select a post</option>
                  {post.map((post) => (
                    <option key={post} value={post}>
                      {post}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">SubPost</label>
                <select id="dropdown2" value={selectedSubPost} onChange={handleSubPost}>
                  <option value="">-- Select SubPost --</option>
                  {subPost.map((subpost) => (
                    <option key={subpost} value={subpost}>
                      {subpost}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor=""> Qualification & Experience</label>
                <input
                  type="text"
                  placeholder=" Add Qualification And Experience"
                  name="education_require"
                  value={formValues.education_require}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label htmlFor=""> Highly Desirable</label>
                <input
                  type="text"
                  placeholder="Add Highly Desirable"
                  name="qualification_require"
                  value={formValues.qualification_require}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Last Date</label>
                <input
                  type="date"
                  name="last_date_to_apply"
                  value={formatDateForInput(formValues.last_date_to_apply)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p id="master-sub-headings">Required Fields For Interview Schedule</p>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Eligibility criteria</label>
                <input
                  type="text"
                  placeholder="Add Eligibility Criteria"
                  name="eligibility_criteria"
                  value={formValues.eligibility_criteria}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Add Responsible Person's Contact </label>
                <input
                  type="text"
                  placeholder="Add Contact"
                  name="responsible_contact"
                  value={formValues.responsible_contact}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="">Day-1</label>
                <input
                  type="date"
                  name="schedule_interview_date_1"
                  value={formatDateForInput(formValues.schedule_interview_date_1)}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="">Day-2</label>
                <input
                  type="date"
                  name="schedule_interview_date_2"
                  value={formatDateForInput(formValues.schedule_interview_date_2)}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="">Day-3</label>
                <input
                  type="date"
                  name="schedule_interview_date_3"
                  value={formatDateForInput(formValues.schedule_interview_date_3)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row toggle-btns">
              
              <div className="col-4">
                <p>Add To Current Opening</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    checked={addToCurrentOpening}
                    value={formValues.publish_to_vacancy}
                    onChange={() => handleCheckboxChange("addToCurrentOpening")}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="col-4">
                <p>Add To Interview Schedule</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    checked={addToInterviewSchedule}
                    onChange={() => handleCheckboxChange("addToInterviewSchedule")}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="col-4">
                <p>Publish To Job Profile</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    checked={publishToJobProfile}
                    onChange={() => handleCheckboxChange("publishToJobProfile")}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
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
  );
}

export default EditOpenings;
