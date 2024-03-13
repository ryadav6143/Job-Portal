import React, { useEffect, useState } from "react";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import adminApiService from "../../adminApiService";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
import { Pagination } from "react-bootstrap";

function GetRole() {
  const [Role, setRole] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    role_type_name: ""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [modalData, setModalData] = useState({});
  const [updateField, setUpdateField] = useState({});
  useEffect(() => {
    fetchRoleList();
  }, []);


  const [isOpen, setIsOpen] = useState(false);

 
  const openModal = (adminData) => {
    console.log("adminData", adminData)
    setIsOpen(true);
    setModalData(adminData);
  };
  ;

  const closeModal = () => {
    setIsOpen(false);
  };





  const fetchRoleList = async () => {
    try {
            const response = await adminApiService.getRoleList();
      console.log("role data>>>>>>", response);
      setRole(response);
    } catch (error) {
      console.error("Error fetching admin list:", error.message);
    }
  };
 





  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleDelete = async (roleID) => {
    try {
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      const response = await adminApiService.deleteAdminRoleById(
     
        roleID
      );
      console.log("Response after deleting role:", response);

      // Refresh role list after deletion
      fetchRoleList();
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!updateField) {
        console.error("No admin selected for update.");
        return;
      }

      const  updateData={ ...updateField,roletypes_id:modalData.id}
      const updatedAdminList = await adminApiService.updateRoleById(updateData);
      console.log("updatedAdminList",updatedAdminList);
      setModalData(updatedAdminList);
      closeModal(); // Close the modal after successful update
      fetchRoleList();
    } catch (error) {
      console.error("Error updating admin:", error.message);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await adminApiService.createRole(
     
        formData
      );
      console.log("Response after adding rights:", response);

      handleClose();
      fetchRoleList();
    } catch (error) {
      console.error("Error adding rights:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Role.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFieldChange = (fieldName, value) => {
     setUpdateField((prev) => ({ ...prev, [fieldName]: value.toString() }));
      
    setModalData((prev) => ({ ...prev, [fieldName]: value.toString() }));
  
    console.log("Updated selectedAdmin:",updateField);
    
  };


  return (
    <>
      
      <div className="admin-list">
        <div className="container-1">
          <div className="new-opening-btn">
            <button onClick={handleOpen}>ADD New Role</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <FormControl>
                <div>
                  <form onSubmit={handleSubmit}>
                    <img
                      onClick={handleClose}
                      className="Examtype-close-btn"
                      src={close}
                    />
                    <label className="AC-SetLabel-Name" htmlFor="role_type_name">
                      Add Exam Type
                    </label>
                    <input
                      type="text"
                      id="role_type_name"
                      className="Ac-set-input"
                      placeholder="role_type_name"
                      value={formData.role_type_name}
                      onChange={handleChange}
                    />
                    <button id="set-btn" type="submit">
                      ADD NOW
                    </button>
                  </form>
                </div>
              </FormControl>
            </Box>
          </Modal>
        </div>

        {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Enter Details</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                id="categoryInput"
                name="role_type_name"
                className="Ac-set-input"
                placeholder="Role Name"
                value={modalData.role_type_name || ""}
                onChange={(e) => handleFieldChange('role_type_name', e.target.value)}
              />    
              <button id="set-btn" onClick={handleUpdate}>UPDATE NOW</button>
            </form>
          </div>
        </div>
      )}


        <div className="super-admin-table">
          <p className="SCA-heading">Assign Specific Role to Users</p>
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Role Type</th>
                <th scope="col">UPDATE</th>
                {/* <th scope="col">DELETE</th> */}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr key={index}>
                  <td>{ index +1}</td>
                  <td>{data.role_type_name}</td>
                  <td>
                    <button id="table-btns" onClick={() => openModal(data)}>
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                  {/* <td>
                    <button id="table-btns" onClick={() => handleDelete(data.id)}>
                      <img src={deletebtn} className="up-del-btn" alt="" />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination>
            {Array.from({ length: Math.ceil(Role.length / itemsPerPage) }).map((_, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination> */}
         <Pagination>
  <Pagination.Prev
    onClick={() =>
      setCurrentPage((prevPage) =>
        prevPage > 1 ? prevPage - 1 : prevPage
      )
    }
  />
  <Pagination.Item>{currentPage}</Pagination.Item>
  <Pagination.Next
    onClick={() =>
      setCurrentPage((nextPage) =>
        nextPage < Math.ceil(Role.length / itemsPerPage)
          ? nextPage + 1
          : nextPage
      )
    }
  />
</Pagination>


        </div>
      </div>
    </>
  );
}

export default GetRole;
