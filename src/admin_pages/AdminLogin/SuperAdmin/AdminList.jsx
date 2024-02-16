import React from "react";
import "./Super.css";
import adminApiService from "../../adminApiService";
import { useState,useEffect } from "react";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import close from "../../../assets/logos/close.png";
import { Pagination } from "react-bootstrap";
function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [updateField, setUpdateField] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const paginationRange = 0;
  useEffect(() => {
    const fetchAdminList = async () => {
      try {
        let accessToken = localStorage.getItem("Token");
        accessToken = JSON.parse(accessToken);
 
        const response = await adminApiService.getAdminList(accessToken.token);
        console.log("response>>>>",response)
        setAdmins(response);
      } catch (error) {
        console.error("Error fetching admin list:", error.message);
      }
    };

    fetchAdminList();
  }, []);


  useEffect(() => {
    const fetchRoleList = async () => {
      try {
        let accessToken = localStorage.getItem("Token");
        accessToken = JSON.parse(accessToken);

        const response = await adminApiService.getRoleList(accessToken.token);
        console.log("role data>>>>>>", response);
        setRole(response);
      } catch (error) {
        console.error("Error fetching admin list:", error.message);
      }
    }
    fetchRoleList();
  }, []);


  const handleOpenModal = (adminData) => {
    console.log(adminData,"adimin data")
    setSelectedAdmin(adminData); // Set selected admin data
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!updateField) {
        console.error("No admin selected for update.");
        return;
      }
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      const  updateData={ ...updateField,admin_id:selectedAdmin.id}
      const updatedAdminList = await adminApiService.updateAdminBySuperAdmin(accessToken.token,updateData);
      console.log("updatedAdminList",updatedAdminList);
      setAdmins(updatedAdminList);

      handleCloseModal();
    } catch (error) {
      console.error("Error updating admin:", error.message);
    }
  };
  

  const handleDeleteAdmin = async (adminId) => {
    try {
      // Display confirmation dialog
      const confirmDelete = window.confirm("Are you sure you want to delete this admin?");
      if (!confirmDelete) return; // If user cancels, do nothing
  
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      
      // Call the delete API
      await adminApiService.deleteAdminById(accessToken.token, adminId);
  
      // Update the local state after successful deletion
      setAdmins(admins.filter((admin) => admin.id !== adminId));
    } catch (error) {
      console.error("Error deleting admin:", error.message);
    }
  };
  


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleFieldChange = (fieldName, value) => {
    setUpdateField((prev) => ({ ...prev, [fieldName]: value.toString() }));
    setSelectedAdmin((prev) => ({ ...prev, [fieldName]: value.toString() }));
  
    console.log("Updated selectedAdmin:",updateField);
  };



  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = admins.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(admins.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>    
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
    <FormControl>
      <div>
        <form onSubmit={handleSubmit}>
          <img
            onClick={handleCloseModal}
            className="Examtype-close-btn"
            src={close}
            alt="Close"
          />
          <label className="AC-SetLabel-Name" htmlFor="categoryInput">
            Edit Admins
          </label>
          <input
            type="text"
            id="categoryInput"
            name="first_name"
            value={selectedAdmin ? selectedAdmin.first_name : ''}
            placeholder="first_name"
            className="Ac-set-input"
            onChange={(e) => handleFieldChange('first_name', e.target.value)}
          />
          <input
            type="text"
            id="emailInput"
            name="email"
            value={selectedAdmin ? selectedAdmin.email : ''}
            className="Ac-set-input"
            placeholder="email"
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          <input
            type="text"
            id="contact_1Input"
            name="contact_1"
            value={selectedAdmin ? selectedAdmin.contact_1 : ''}
            className="Ac-set-input"
            placeholder="contact_1"
            onChange={(e) => handleFieldChange('contact_1', e.target.value)}
          />
          <select
            id="roleTypeInput"
            name="role_type_master_id"
            // value={selectedAdmin["role_types_master.role_type_name"]}
            className="Ac-set-input"
            onChange={(e) => handleFieldChange('role_type_id', e.target.value)}
          >
            <option value="">Select Role Type</option>
            {role.map((role) => (
              <option key={role.id} value={role.id}>
                {role.role_type_name}
              </option>
            ))}
          </select>

          <button id="set-btn" onClick={handleSubmit}>
            update NOW
          </button>
        </form>
      </div>
    </FormControl>
  </Box>
        </Modal>
      
      <div className="admin-list">
        
        <p className="table-heading">List Of Admins</p>
        <table className="table table-responsive">
          <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">CONTACT</th>
              <th scope="col">ROLE</th>
              <th scope="col">EDIT</th>
              <th scope="col">REMOVE</th>
              {/* <th scope="col">RIGHTS</th> */}
            </tr>
          </thead>
          <tbody>
           
              {currentItems.map((data, index) => (
                <tr key={index}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td className="table-cell">{data.first_name}</td>
                <td className="table-cell">{data.email}</td>
                <td className="table-cell">{data.contact_1}</td>
                <td className="table-cell">{data["role_types_master.role_type_name"]}</td>
                {/* <td>{Array.isArray(data.rights) ? data.rights.join(", ") : data.rights}</td> */}
                <td>
                    <button id="table-btns"  onClick={() => handleOpenModal(data)}>
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                  <td>
                    <button id="table-btns" onClick={() => handleDeleteAdmin(data.id)}>
                      <img src={deletebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination>
          <Pagination.Prev onClick={prevPage} />
          {Array.from({
            length: Math.ceil(admins.length / itemsPerPage),
          }).map((_, index) => (
            // Display pagination items within a range around the current page
            (index + 1 >= currentPage - paginationRange && index + 1 <= currentPage + paginationRange) &&
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={nextPage} />
        </Pagination>
      </div>
    
    </>
  );
}

export default AdminList;