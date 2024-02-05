import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditOpenings.css";
import adminApiService from "../../../../adminApiService";
function EditOpenings() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departmant, setDepartmant] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [post, setPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [subPost, setSubPost] = useState("");
  const [selectedSubPost, setSelectedSubPost] = useState("");
  const [addToCurrentOpening, setAddToCurrentOpening] = useState(false);
  const [addToInterviewSchedule, setAddToInterviewSchedule] = useState(false);
  const [publishToJobProfile, setPublishToJobProfile] = useState(false);
  const [jobProfiles, setJobProfiles] = useState([]);

  const [formValues, setFormValues] = useState({
    job_category_master: { category_name: "" },
    department_master: {dept_name: "", },
    applied_post_master: { post_name: "", },
    applied_subpost_master: {subpost_name: "",  },
  });


  
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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApiService.getJobProfile();
        const profileData = response.data;
        setFormValues(profileData[0]);
console.log("profileData-->",profileData[0])
       
      } catch (error) {
        console.error("Error fetching job profiles:", error);
      }
    };

    fetchData();
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
  
    // If you need to update formValues, you can do it here
    const selectedPostData = post.find(
      (postData) => postData.post_name === selectedPost
    );
  
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      applied_post_master: {
        ...prevFormValues.applied_post_master,
        post_name: selectedPostData ? selectedPostData.post_name : "",
      },
    }));
  };
  
  const handleSubPost = (event) => {
    const selectedSubPost = event.target.value;
    setSelectedSubPost(selectedSubPost);
  
    // If you need to update formValues, you can do it here
    const selectedSubPostData = subPost.find(
      (subpostData) => subpostData.subpost_name === selectedSubPost
    );
  
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      applied_subpost_master: {
        ...prevFormValues.applied_subpost_master,
        subpost_name: selectedSubPostData ? selectedSubPostData.subpost_name : "",
      },
    }));
  };
  
  const handleDepartmant = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedDepartment(selectedDepartment);
    const selectedDepartmentData = departmant.find(
      (department) => department.dept_name === selectedDepartment
    );
    setFormValues({
      ...formValues,
      department_master_id: selectedDepartmentData ? selectedDepartmentData.id : "",
    });
  };
  

  const handleCheckboxChange = (checkboxName) => {
    switch (checkboxName) {
      case 'addToCurrentOpening':
        setAddToCurrentOpening((prev) => !prev);
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_vacancy: !prevValues.publish_to_vacancy,
        }));
        break;
      case 'addToInterviewSchedule':
        setAddToInterviewSchedule((prev) => !prev);
        setFormValues((prevValues) => ({
          ...prevValues,
          publish_to_schedule_interview: !prevValues.publish_to_schedule_interview,
        }));
        break;
      case 'publishToJobProfile':
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
  
  const handleSetAllCheckboxes = (value) => {
    setAddToCurrentOpening(value);
    setAddToInterviewSchedule(value);
    setPublishToJobProfile(value);
  
    setFormValues({
      ...formValues,
      publish_to_vacancy: value,
      publish_to_schedule_interview: value,
      publish_to_job_profile: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
 

  const handleSubmit = async (event) => {
 
  };
  

  return (
    <div>

      <div className="new-openings">
        {/* <p>job_profile_master</p> */}
        <p className="master-heading">Edit Openings Data</p>
        <div className="new-openings-form">
          <form onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-6">
                <label htmlFor="">No. Of Openings</label>
                <input type="number" placeholder="Add No. Of Openings" name="number_of_vacancy" 
                  value={formValues.number_of_vacancy}
                  onChange={handleInputChange}/>
              </div>

              <div className="col-6">
                <label htmlFor="dropdown2">Category</label>
                <select
                name="category_name"
                id="categoryDropdown"
                value={formValues.job_category_master.category_name}
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
                  value={formValues.department_master.dept_name}
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
                  value={formValues.applied_post_master.post_name}
                  onChange={handlePost}
            
                  
                >
                  <option value="">Select a post</option>
                  {post.map((post) => (
                    <option key={post.id} value={post.post_name}>
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
                  value={formValues.applied_subpost_master.subpost_name}
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
                <input type="text" placeholder="Add Highly Desirable"
                 name="qualification_require"
                 value={formValues.qualification_require}
                 onChange={handleInputChange} />
              </div>
              <div className="col-6">
                <label htmlFor="">Last Date</label>
                <input type="date" name="last_date_to_apply" 
                value={formValues.last_date_to_apply}
                onChange={handleInputChange}/>
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
                <input type="text"
                 placeholder="Add Eligibility Criteria" 
                 name="eligibility_criteria"
                           value={formValues.eligibility_criteria}
                           onChange={handleInputChange}/>
              </div>
              <div className="col-6">
                <label htmlFor="">Add Responsible Person's Contact </label>
                <input type="text" placeholder="Add Contact" name="responsible_contact"
                 value={formValues.responsible_contact}
                 onChange={handleInputChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="">Day-1</label>
                <input type="date" name="schedule_interview_date_1" 
                value={formValues.schedule_interview_date_1}
                onChange={handleInputChange}/>
              </div>
              <div className="col-4">
                <label htmlFor="">Day-2</label>
                <input type="date" name="schedule_interview_date_2" 
                 value={formValues.schedule_interview_date_2}
                 onChange={handleInputChange}/>
              </div>
              <div className="col-4">
                <label htmlFor="">Day-3</label>
                <input type="date" name="schedule_interview_date_3" 
                  value={formValues.schedule_interview_date_3}
                  onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row toggle-btns">
              <div className="col-4">
                <p>Add To Current Opening</p>
                <label class="switch">
                <input
            type="checkbox"
            id="checkbox"
            checked={addToCurrentOpening}
            onChange={() => handleCheckboxChange("addToCurrentOpening")}
          />
                  <div class="slider round"></div>
                </label>
              </div>
              <div className="col-4">
                <p>Add To Interview Schedule</p>
                <label class="switch">
                  <input type="checkbox" id="checkbox" 
                   checked={addToInterviewSchedule}
                   onChange={() => handleCheckboxChange('addToInterviewSchedule')}/>
                  <div class="slider round"></div>
                </label>
              </div>
              <div className="col-4">
                <p>Publish To Job Profile</p>
                <label class="switch">
                  <input type="checkbox" name="publish_to_job_profile" id="checkbox" 
                   checked={publishToJobProfile}
                   onChange={() => handleCheckboxChange('publishToJobProfile')}/>
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
            <div>
              <button type="submit" id="add-job" onClick={handleSubmit}>
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
