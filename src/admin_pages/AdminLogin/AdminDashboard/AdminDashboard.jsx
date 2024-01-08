import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <div className="DCVF-form-container">
        <div className="admin-dcf-heading">
          <p>DROP-CV Input Fields</p>
        </div>
        <form action="" method="post">
          <div className="from-wrapper">
            <div>
              <label htmlFor="">Category of Appointment</label>
              <input type="text" placeholder="Add Category of Appointment" />
            </div>
            <div>
              <label htmlFor="">Post Applied For </label>
              <input type="text" placeholder="Add Post Applied For" />
            </div>
            <div>
              <label htmlFor="">Sub Post Applied For </label>
              <input type="text" placeholder="Add Sub Post Applied For" />
            </div>
            <div>
              <label htmlFor="">Subjects </label>
              <input type="text" placeholder="Add Subjects" />
            </div>
            <div>
              <label htmlFor="">Exam Type </label>
              <input type="text" placeholder="Add Add Exam Type" />
            </div>
            <div>
              <label htmlFor="">Degree/Diploma Certificate </label>
              <input type="text" placeholder="Add Degree/Diploma Certificate" />
            </div>
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default AdminDashboard;
