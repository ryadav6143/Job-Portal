import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config/config";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import close from "../../../assets/logos/close.png";
function AddDepartment() {
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [editingDepartmentId, setEditingDepartmentId] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
 
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
          // Clear the input field
          setNewDepartmentName("");
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
    setOpen(true);
    setUpdateModalOpen(true);
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
        setOpen(false);
        // Reload the page
      })
      .catch((error) => {
        console.error("Error updating department:", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
    setEditingDepartmentId(null);
    setNewDepartmentName("");
    setUpdateModalOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container-1">
        <div>
        <button onClick={() => setOpen(true)}>Add Department</button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <img onClick={handleCloseModal} className="Ad-close-btn" src={close} />
              <label className="AC-SetLabel-Name" htmlFor="departmentName">
                Add Department
              </label>
              <input
                type="text"
                id="departmentName"
                placeholder="Add Your Departments"
                value={newDepartmentName}
                onChange={(e) => setNewDepartmentName(e.target.value)}
              />
          
                <button type="button" onClick={handleAdd} id="set-btn">
                  ADD
                </button>
           
            </form>
          </Box>
        </Modal>
        {/* <form>
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
        </form> */}
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
                        handleUpdate (department.id, department.dept_name)
                      }
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                    <Modal
          open={updateModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <img onClick={handleClose} className="Ad-close-btn" src={close} />
              <label className="AC-SetLabel-Name" htmlFor="departmentName">
                Update Department
              </label>
              <input
                type="text"
                id="departmentName"
                placeholder="Add Your Departments"
                value={newDepartmentName}
                onChange={(e) => setNewDepartmentName(e.target.value)}
              />
             
                <button type="button" onClick={handleSave} id="set-btn">
                  UPDATE
                </button>
            
            </form>
          </Box>
        </Modal>
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
