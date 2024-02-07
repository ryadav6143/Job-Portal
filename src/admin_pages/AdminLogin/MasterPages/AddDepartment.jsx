import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config/config";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
function AddDepartment() {
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [editingDepartmentId, setEditingDepartmentId] = useState(null);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${BASE_URL}/departmentMaster`)
      .then((response) => {
        // Update state with the fetched data
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures the useEffect runs only once when the component mounts

  const handleDelete = (id) => {
    // Send a delete request to the API
    axios
      .delete(`${BASE_URL}/departmentMaster/${id}`)
      .then((response) => {
        // Update state after successful deletion
        setDepartments(departments.filter((dept) => dept.id !== id));
        console.log("Department deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting department:", error);
      });
  };
  const handleAdd = () => {
    // Send a post request to the API to add a new department
    axios
      .post(`${BASE_URL}/departmentMaster`, {
        dept_name: newDepartmentName,
      })
      .then((response) => {
        // Update state after successful addition
        setDepartments([...departments, response.data]);
        console.log("Department added successfully!");
        // Clear the input field
        setNewDepartmentName("");
      })
      .catch((error) => {
        console.error("Error adding department:", error);
      });
  };
  const handleUpdate = (id, currentDeptName) => {
    // Set the current department for editing
    setEditingDepartmentId(id);
    setNewDepartmentName(currentDeptName);
  };
  const handleSave = () => {
    // Send a put request to the API to update the department
    axios
      .put(`${BASE_URL}/departmentMaster/${editingDepartmentId}`, {
        dept_name: newDepartmentName,
      })
      .then((response) => {
        // Update state after successful update
        setDepartments(
          departments.map((dept) =>
            dept.id === editingDepartmentId
              ? { ...dept, dept_name: response.data.dept_name }
              : dept
          )
        );
        console.log("Department updated successfully!");
        // Clear the input field and reset editing state
        setNewDepartmentName("");
        setEditingDepartmentId(null);
        // Reload the page
      })
      .catch((error) => {
        console.error("Error updating department:", error);
      });
  };
  return (
    <>
      <div className="container-1">
        <form>
          <label htmlFor="departmentName">Add Department</label>
          <input
            type="text"
            id="departmentName"
            placeholder="Add Your Departments"
            value={newDepartmentName}
            onChange={(e) => setNewDepartmentName(e.target.value)}
          />
          {editingDepartmentId ? (
            <button type="button" onClick={handleSave}>
              UPDATE
            </button>
          ) : (
            <button type="button" onClick={handleAdd}>
              ADD
            </button>
          )}
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT DEPARTMENT AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Department Name</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.id}>
                  <td>{department.id}</td>
                  <td>{department.dept_name}</td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() =>
                        handleUpdate(department.id, department.dept_name)
                      }
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDelete(department.id)}
                    >
                      <img src={deletebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddDepartment;
