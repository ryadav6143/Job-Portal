import React, { useState, useEffect } from "react";
import "./RegisterAdmin.css";
import medilogo from "../../assets/logos/medi-logo.png";
import axios from "axios";
import { BASE_URL } from "../../config/config";

function RegisterAdmin() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [formData, setFormData] = useState({
    title_first_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    email: "",
    contact_1: "",
    password: "",
    department_master_id: "",
  });
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getDepartment();
  }, []);
  function getDepartment() {
    axios
      .get(`${BASE_URL}/departmentMaster`)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "department_master_id" ? parseInt(value) : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       `${BASE_URL}/admin/registerAdmin`,
  //       formData
  //     );

  //     console.log("Data submitted successfully:", response.data);

  //     setFormData({
  //       title_first_name: "",
  //       first_name: "",
  //       middle_name: "",
  //       last_name: "",
  //       gender: "",
  //       email: "",
  //       contact_1: "",
  //       password: "",
  //       department_master_id: "",
  //     });
  //     alert("Admin Registered succesfully");
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/admin/registerAdmin`,
        formData
      );

      if (response.data.error) {
        const errorMessage = response.data.error.toLowerCase();
        if (errorMessage.includes("email")) {
          alert("Email already registered. Please use a different email.");
        } else if (errorMessage.includes("contact")) {
          alert("Contact number already registered. Please use a different contact number.");
        } else {
          alert(response.data.error);
        }
      } else {
        setFormData({
          title_first_name: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          gender: "",
          email: "",
          contact_1: "",
          password: "",
          department_master_id: "",
        });
        alert("Admin registered successfully");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className="reg-container-main">
        <div className="form-heading">
          <div className="">
            <img className="reg-ad-logo" src={medilogo} alt="Logo" />
          </div>
          <p>Register New Admin</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="reg-container">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Title</label>
                <select
                  id="dropdown"
                  name="title_first_name"
                  value={formData.title_first_name}
                  onChange={handleChange}
                >
                  <option value="">Please select...</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="">First Name</label>
                <input
                  name="first_name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Middle Name</label>
                <input
                  name="middle_name"
                  type="text"
                  placeholder="Enter Middle Name"
                  value={formData.middle_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Last Name</label>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Gender</label>
                <select
                  id="dropdown"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Please select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Contact Number</label>
                <input
                  name="contact_1"
                  type="text"
                  placeholder="Enter Contact Number"
                  value={formData.contact_1}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="">Select Department</label>
                <select
                  name="department_master_id"
                  value={formData.department_master_id}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.dept_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <button type="submit" id="set-btn" className="reg-ad-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Form submitted successfully!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterAdmin;
/*
if id=1 role= super_admin
Edit admin-side bar
list of admins
*/
