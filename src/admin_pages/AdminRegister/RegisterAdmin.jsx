import React, { useState } from "react";
import "./RegisterAdmin.css";
import medilogo from "../../assets/logos/medi-logo.png";
import axios from "axios";

function RegisterAdmin() {
  const [formData, setFormData] = useState({
    title_first_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    email: "",
    contact_1: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("your_api_endpoint_here", formData);
      console.log("Data submitted successfully:", response.data);
      // Reset form after successful submission if needed
      setFormData({
        title_first_name: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        email: "",
        contact_1: "",
        password: "",
      });
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
            </div>
            <div>
              <button type="submit" id="set-btn" className="reg-ad-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterAdmin;
/*
if id=1 role= super_admin
Edit admin-side bar
list of admins
*/
