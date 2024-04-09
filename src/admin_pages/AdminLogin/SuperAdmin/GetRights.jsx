import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import adminApiService from "../../adminApiService";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
import "./GetRights.css";
import { Pagination } from "react-bootstrap";
function GetRights() {
  const [rights, setRights] = useState([]);
  const [role, setRole] = useState([]);
  const [open, setOpen] = useState(false);
  // const [selectedRight, setSelectedRight] = useState({});
  const [updateField, setUpdateField] = useState({});
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const paginationRange = 0;
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedApiType, setSelectedApiType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    api_name: "",
    api_type: "",
    path: "",
    url: "",
    role_type_master_id: "",
  });



  useEffect(() => {
    fetchRoleList();
    fetchRights();
  }, []);
  const fetchRights = async () => {
    try {
      const response = await adminApiService.getRightsList();
      // console.log("check rights data>>>>>", response);      
      setRights(response);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (adminData) => {
    // console.log("adminData", adminData);
    setIsOpen(true);
    setModalData(adminData);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500, 
    height: "612px", 
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };


  const handleClose = () => setOpen(false);
  const handleAddModalClose = () => {
    setOpen(false);

  };



  const handleDelete = async (rightsID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        await adminApiService.deleteRightsById(rightsID);

        const updatedRights = rights.filter((right) => right.id !== rightsID);
        setRights(updatedRights);
      } catch (error) {
        console.error("Error deleting rights:", error);
        alert("An error occurred while deleting rights.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminApiService.createRights(formData);
      // console.log("Response after adding rights:", response);
      handleClose();
      fetchRights();
      fetchRoleList();
    } catch (error) {
      console.error("Error adding rights:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while adding rights.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!updateField) {
        console.error("No admin selected for update.");
        return;
      }

      const updateData = { ...updateField, rights_id: modalData.id };
      const updatedAdminList = await adminApiService.updateRights(updateData);
      // console.log("updatedAdminList", updatedAdminList);
      setModalData(updatedAdminList);
      fetchRights();
      fetchRoleList();
      closeModal();
    } catch (error) {
      console.error("Error updating admin:", error.message);
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setUpdateField((prev) => ({ ...prev, [fieldName]: value.toString() }));
    setUpdateField((prev) => ({
      ...prev,
      role_type_master_id: parseInt(value),
    }));

    setModalData((prev) => ({ ...prev, [fieldName]: value.toString() }));

    // console.log("Updated selectedAdmin:", updateField);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleApiTypeFilter = (e) => {
    setSelectedApiType(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRights = selectedRole
    ? rights.filter((right) => right.role_type_master_id == selectedRole)
    : rights;

  const filteredRightsByApiType = selectedApiType
    ? filteredRights.filter((right) => right.api_type === selectedApiType)
    : filteredRights;

  const filteredRightsBySearch = searchQuery
    ? filteredRightsByApiType.filter((right) =>
        right.url.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredRightsByApiType;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRightsBySearch.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredRightsBySearch.length / itemsPerPage)) {
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
      <div className="center-container">
        <div className="admin-list">


          <div className="new-opening-btn">
            <button onClick={() => setOpen(true)}>ADD New Rights</button>
          </div>

          <p className="SCA-heading">Define rights to role </p>
          <div className="row">
            <div className="col-3">
              <label htmlFor="roleFilter">Search by URL:</label>
              <input
                className="set-input"
                type="text"
                placeholder="Search by URL"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="col-3">
              <label htmlFor="roleFilter">Filter by Role:</label>
              <select
                id="roleFilter"
                className="set-dropdown"
                onChange={handleRoleChange}
                value={selectedRole}
              >
                <option value="">All Roles</option>
                {role.map((roleItem) => (
                  <option key={roleItem.id} value={roleItem.id}>
                    {roleItem.role_type_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="apiTypeFilter">Filter by API Type:</label>
              <select
                id="apiTypeFilter"
                className="set-dropdown"
                onChange={handleApiTypeFilter}
                value={selectedApiType}
              >
                <option value="">All</option>
                <option value="GET">GET</option>
                <option value="PUT">PUT</option>
                <option value="POST">POST</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
          </div>


          <div>
            <table className="table table-responsive">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Api Name</th>
                  <th scope="col">Api Type</th>
                  <th scope="col">Path</th>
                  <th scope="col">URL</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="12" style={{ color: "red" }}>
                      No data found!
                    </td>
                  </tr>
                ) : (
                  currentItems.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                      <td>{data.api_name}</td>
                      <td>{data.api_type}</td>
                      <td>{data.path}</td>
                      <td>{data.url}</td>
                      <td>
                        {data.role_types_master
                          ? data.role_types_master.role_type_name
                          : ""}
                      </td>
                      <td>
                        <button id="table-btns" onClick={() => openModal(data)}>
                          <img src={updatebtn} className="up-del-btn" alt="" />
                        </button>
                      </td>
                      <td>
                        <button
                          id="table-btns"
                          onClick={() => handleDelete(data.id)}
                        >
                          <img src={deletebtn} className="up-del-btn" alt="" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
          <Pagination>
            <Pagination.Prev onClick={prevPage} />
            {Array.from({
              length: Math.ceil(rights.length / itemsPerPage),
            }).map(
              (_, index) =>
                // Display pagination items within a range around the current page
                index + 1 >= currentPage - paginationRange &&
                index + 1 <= currentPage + paginationRange && (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                )
            )}
            <Pagination.Next onClick={nextPage} />
          </Pagination>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>

              <div>
                <form onSubmit={handleSubmit}>
                  <img
                    onClick={handleAddModalClose}
                    className="Examtype-close-btn"
                    src={close}
                    alt=""
                  />

                  <label className="AC-SetLabel-Name" htmlFor="categoryInput">Api Name</label>
                  <input
                    type="text"
                    id="categoryInput"
                    name="api_name"
                    className="Ac-set-input"
                    placeholder="Api Name"
                    onChange={handleChange}
                  />



                  <label className="AC-SetLabel-Name" htmlFor="apiTypeInput">Select API Type</label>
                  <select
                    id="apiTypeInput"
                    name="api_type"
                    className="Ac-set-input"
                    onChange={handleChange}
                  >
                    <option value="">Select API Type</option>
                    <option value="GET">GET</option>
                    <option value="PUT">PUT</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                  <FontAwesomeIcon
                    className="set-icon"
                    icon={faAngleDown}
                  />


                  <label className="AC-SetLabel-Name" htmlFor="pathInput">Path</label>
                  <input
                    type="text"
                    id="pathInput"
                    name="path"
                    className="Ac-set-input"
                    placeholder="path"
                    onChange={handleChange}
                  />


                  <label className="AC-SetLabel-Name" htmlFor="urlInput">URL</label>
                  <input
                    type="text"
                    id="urlInput"
                    name="url"
                    className="Ac-set-input"
                    placeholder="url"
                    onChange={handleChange}
                  />



                  <label className="AC-SetLabel-Name" htmlFor="roleTypeInput">Select Role Type</label>
                  <select
                    id="roleTypeInput"
                    name="role_type_master_id"
                    className="Ac-set-input"
                    onChange={handleChange}
                  >
                    <option value="">Select Role Type</option>
                    {role.map((role, index) => (
                      <option key={index} value={role.id}>
                        {role.role_type_name}
                      </option>
                    ))}
                  </select>
                  <FontAwesomeIcon
                    className="set-icon"
                    icon={faAngleDown}
                  />


                  <button
                    id="add-new-btn"
                    className="submit-btn"
                    type="submit"
                  >
                    ADD NOW
                  </button>
                </form>
              </div>

            </Box>
          </Modal>


          <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >

                <img
                  src={close}
                  className="Examtype-close-btn"
                  alt="Close"
                  onClick={closeModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <form onSubmit={handleUpdate}>
                <label className="AC-SetLabel-Name" htmlFor="categoryInput">
                  Api Name
                </label>
                <input
                  type="text"
                  id="categoryInput"
                  name="api_name"
                  className="Ac-set-input"
                  placeholder="api_name"
                  value={modalData.api_name || ""}
                  onChange={(e) =>
                    handleFieldChange("api_name", e.target.value)
                  }
                />
                <div>
                  <label className="AC-SetLabel-Name" htmlFor="apiTypeInput">
                    Select API Type
                  </label>
                  <select
                    id="apiTypeInput"
                    name="api_type"
                    className="Ac-set-input"
                    value={modalData.api_type || ""}
                    onChange={(e) =>
                      handleFieldChange("api_type", e.target.value)
                    }
                  >
                    <option value="">Select API Type</option>
                    <option value="GET">GET</option>
                    <option value="PUT">PUT</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                </div>

                <div>
                  <label className="AC-SetLabel-Name" htmlFor="pathInput">
                    Path
                  </label>
                  <input
                    type="text"
                    id="pathInput"
                    name="path"
                    className="Ac-set-input"
                    placeholder="path"
                    value={modalData.path || ""}
                    onChange={(e) => handleFieldChange("path", e.target.value)}
                  />
                </div>
                <div>
                  <label className="AC-SetLabel-Name" htmlFor="urlInput">
                    URL
                  </label>
                  <input
                    type="text"
                    id="urlInput"
                    name="url"
                    className="Ac-set-input"
                    placeholder="url"
                    value={modalData.url || ""}
                    onChange={(e) => handleFieldChange("url", e.target.value)}
                  />
                </div>
                <div>
                  <label className="AC-SetLabel-Name" htmlFor="roleTypeInput">
                    Select Role Type
                  </label>
                  <select
                    id="roleTypeInput"
                    name="role_type_master_id"
                    className="Ac-set-input"
                    value={modalData.role_type_master_id || ""}
                    onChange={(e) =>
                      handleFieldChange("role_type_master_id", e.target.value)
                    }
                  >
                    <option value="">Select Role Type</option>
                    {role.map((role, index) => (
                      <option key={index} value={role.id}>
                        {role.role_type_name}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
              <button
                style={{ marginTop: "20px" }}
                id="set-btn"
                onClick={handleUpdate}
              >
                Submit
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default GetRights;
