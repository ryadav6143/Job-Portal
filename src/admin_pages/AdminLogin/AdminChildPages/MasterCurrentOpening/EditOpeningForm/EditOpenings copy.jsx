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
  const [postShow, setPostShow] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subPost, setSubPost] = useState([]);
  const [selectedSubPost, setSelectedSubPost] = useState("");

  // const [currentOpening, setCurrentOpening] = useState(false);
  // const [interviewSchedule, setInterviewSchedule] = useState(false);
  // const [publishToJobProfile, setPublishToJobProfile] = useState(false);
  const [addToCurrentOpening, setAddToCurrentOpening] = useState(false);
  const [addToInterviewSchedule, setAddToInterviewSchedule] = useState(false);
  const [publishToJobProfile, setPublishToJobProfile] = useState(false);
  const [JobProfile, setJobProfiles] = useState([]);
  const [formValues, setFormValues] = useState({});

  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApiService.getJobProfileById(id);
        const data = response.data;
  
        setFormValues(data);
        console.log("Fetched data:", data);
        console.log("CurrentOpening", data.publish_to_vacancy);
        console.log("InterviewSchedule", data.publish_to_schedule_interview);
        console.log("JobProfile", data.publish_to_job_profile);
        setSelectedCategory(data.job_category_master.category_name);
        setSelectedDepartment(data.department_master.dept_name);
        setSelectedPost(data.applied_post_master.post_name);
        setSelectedSubPost(data.applied_subpost_master.subpost_name);
        setCurrentOpening(data.publish_to_vacancy);
        setInterviewSchedule(data.publish_to_schedule_interview);
        setPublishToJobProfile(data.publish_to_job_profile);
  
       
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
        console.log("response.data", response.data)
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
    setFormValues({
      ...formValues,
      job_category_master_id: selectedCategoryData ? selectedCategoryData.id : "",
    });
    setPost(selectedCategoryData ? selectedCategoryData.applied_post_masters : []);
    setSelectedPost("");
    setSubPost([]);
  };

  const handlePost = (event) => {
    const selectedPost = event.target.value;
    setSelectedPost(selectedPost);

    const selectedPostData = post.find((post) => post.post_name === selectedPost);
    setFormValues({
      ...formValues,
      applied_post_masters_id: selectedPostData ? selectedPostData.id : "",
    });
    setSubPost(selectedPostData ? selectedPostData.applied_subpost_masters : []);
  };

  const handleSubPost = (event) => {
    const selectedSubPostName = event.target.value;
    setSelectedSubPost(selectedSubPostName);
    const selectedSubPostData = subPost.find(
      (subpost) => subpost.subpost_name === selectedSubPostName
    );
    // Additional logic with selectedSubPostData if needed
    setFormValues({
      ...formValues,
      applied_subpost_master_id: selectedSubPostData ? selectedSubPostData.id : "",
    });
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
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_vacancy: !currentOpening,
        }));
        setCurrentOpening((prev) => !prev);
        console.log("currentOpening:", currentOpening);
        break;
      case "addToInterviewSchedule":
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_schedule_interview: !interviewSchedule,
        }));
        setInterviewSchedule((prev) => !prev);
        console.log("interviewSchedule:", interviewSchedule);
        break;
      case "publishToJobProfile":
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_job_profile: !publishToJobProfile,
        }));
        setPublishToJobProfile((prev) => !prev);
        console.log("publishToJobProfile:", publishToJobProfile);
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
      const profileID = formValues.id;
      const updatedFormValues = {
        ...formValues,
        profile_id: profileID,
      }

      await axios.put("http://192.168.1.8:8090/v1/api/jobProfileMaster",

        updatedFormValues,)
        .then(response => {
          console.log("PUT request response:", response);
        })
        .catch(error => {
          console.error("Error updating job profile:", error);
        });


    } catch (error) {
      console.error("Error updating job profile:", error);

    }
  };


  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
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
                <select id="dropdown" onChange={handlePost} value={selectedPost} >
                  <option value="">{selectedPost}</option>
                  {post.map((postItem) => (
                    <option key={postItem.post_name} value={postItem.post_name}>
                      {postItem.post_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="dropdown2">SubPost</label>
                <select id="dropdown2" value={selectedSubPost} onChange={handleSubPost}>
                  <option value="">{selectedSubPost}</option>
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
                    checked={currentOpening}
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
