import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import { ADMIN_BASE_URL } from "../../../config/config";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";
import adminApiService from "../../adminApiService";

function AddDegree() {
  const [data, setData] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [newDegree, setNewDegree] = useState("");
  const [selectedExamId, setSelectedExamId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  // ------------------GET DATA FROM API--------------------------------

  const fetchexamType = async () => {
    try {
      const response = await adminApiService.getExam();
      setExamTypes(response.data);
    } catch (error) {
      console.error("Error fetching exam types:", error);
    }
  };


  const degreeTypeMaster = async () => {
    try {
      const response = await adminApiService.getDegreeTypeMaster();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching degree type master data:", error);
    }
  };

  useEffect(() => {
    degreeTypeMaster();
    fetchexamType();
  }, []);



  const fetchUpdateData =async (id) => {
    try {
      const response = await adminApiService.getDegreeById(id);
      console.log("check pput api response",response)
      setUpdateData(response);
      setSelectedExamType(response.exam_types_master.exam_name);
    } catch (error) {
      console.error("Error fetching degree data:", error);
  
    }
  };






  // const handleAddDegree = () => {
  //   let accessToken = sessionStorage.getItem("Token");
  //   accessToken = JSON.parse(accessToken);
  //   axios
  //     .post(
  //       `${ADMIN_BASE_URL}/degreeTypeMaster`,
  //       {
  //         exam_types_master_id: selectedExamId,
  //         degree_name: newDegree,
  //       },
  //       {
  //         headers: {
  //           "access-token": accessToken.token,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setData([...data, response.data]);
  //       setIsModalOpen(false);
  //       degreeTypeMaster();
  //     })
  //     .catch((error) => console.error("Error adding category:", error));
  // };


  const handleAddDegree = async () => {  
    try {
      const response = await adminApiService.addDegreeType(selectedExamId, newDegree);
      setData([...data, response]);
      setIsModalOpen(false);
      degreeTypeMaster(); 
    } catch (error) {
      console.error(error);
    }
  };


  // const handleUpdateDegree = () => {
  //   let accessToken = sessionStorage.getItem("Token");
  //   accessToken = JSON.parse(accessToken);
  //   const payload = {
  //     exam_types_master_id: selectedExamId,
  //     degree_name: updateData.degree_name,
  //     degreetypes_id: updateData.id,
  //   };
  //   axios
  //     .put(`${ADMIN_BASE_URL}/degreeTypeMaster`, payload, {
  //       headers: {
  //         "access-token": accessToken.token,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log("Degree updated successfully!");
  //       setUpdateModalOpen(false);
  //       degreeTypeMaster();
  //     })
  //     .catch((error) => {
  //       console.error("Error updating degree:", error);
  //     });
  // };

  const handleUpdateDegree = async () => {    
    try {
      await adminApiService.updateDegree(selectedExamId, updateData);
      setUpdateModalOpen(false);
      degreeTypeMaster(); 
    } catch (error) {
      console.error(error);
    }
  };



  // ------------------------when allow to delete----------------

  // const handleDelete = (id) => {
  //   let accessToken = sessionStorage.getItem("Token");
  //   accessToken = JSON.parse(accessToken);
  //   axios
  //     .delete(`${ADMIN_BASE_URL}/degreeTypeMaster/${id}`, {
  //       headers: {
  //         "access-token": accessToken.token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("degree deleted successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting Subject:", error);
  //     });
  // };
  // ----------------------------------------------------
  const handleOpenModal = () => {
    setIsModalOpen(true);

  };
  const handleOpenUpdateModal = (id) => {
    fetchUpdateData(id);
    const selectedExam = examTypes.find((exam) => exam.id === updateData?.exam_types_master_id);
    if (selectedExam) {
      setSelectedExamType(selectedExam.exam_name);
      setSelectedExamId(selectedExam.id);
    }
    setUpdateModalOpen(true);
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUpdateModalOpen(false);
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



 
  return (
    <>
      <div className="container-1">
        <div className="new-opening-btn">
          <button onClick={handleOpenModal}>Add Degree</button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <form action="">
                <div>
                  <img
                    onClick={() => setIsModalOpen(false)}
                    className="Ac-close-btn"
                    src={close}
                  />
                  <label className="AC-SetLabel-Name">Select Exam Type</label>
                  <select
                    name="examType"
                    className="select-jc "
                    value={selectedExamType}
                    onChange={(e) => {
                      const selectedId =
                        examTypes.find(
                          (exam) => exam.exam_name === e.target.value
                        )?.id || "";
                      setSelectedExamId(selectedId);
                      setSelectedExamType(e.target.value);
                    }}
                  >
                    <option value="">Select Exam Type</option>
                    {[
                      ...new Set(
                        examTypes.map((examType) => examType.exam_name)
                      ),
                    ].map((uniqueExamName, index) => (
                      <option key={index} value={uniqueExamName}>
                        {uniqueExamName}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="AC-SetLabel-Name" htmlFor="">
                  Add Degree
                </label>
                <input
                  className="Ac-set-input"
                  type="text"
                  placeholder="Add Required Degree"
                  value={newDegree}
                  onChange={(e) => setNewDegree(e.target.value)}
                />

                <button id="set-btn" type="button" onClick={handleAddDegree}>
                  ADD NOW
                </button>

              </form>
            </FormControl>
          </Box>
        </Modal>
      </div>

<div className="admin-list">
<div className="master-table ">
        <p className="SCA-heading">CURRENT DEGREES AVAILABLE</p>
        <div className="table-responsive fixe-table">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Exam Name</th>
                <th scope="col">Degree Name</th>
                <th scope="col">UPDATE</th>
                {/* <th scope="col">DELETE</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.exam_types_master?.exam_name}</td>
                  <td>{category.degree_name}</td>
                  <td>
                    <button onClick={() => handleOpenUpdateModal(category.id)} id="table-btns">
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>

                  

                  </td>
                  {/* <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDelete(category.id)}
                    >
                      <img src={deletebtn} className="up-del-btn" alt="" />
                    </button>
                  </td> */}
                </tr>
              ))}
                <Modal
                      open={updateModalOpen}
                      onClose={() => setUpdateModalOpen(false)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <FormControl>
                          <div>
                            <form action="">
                              <div>
                                <img
                                  onClick={() => setUpdateModalOpen(false)}
                                  className="Ac-close-btn"
                                  src={close}
                                />
                                <label className="AC-SetLabel-Name">Update Exam Type</label>
                                <select
                                  name="examType"
                                  className="select-jc"
                                  value={selectedExamType}
                                  onChange={(e) => {
                                    // console.log("Selected Exam Type:", e.target.value);
                                    const selectedId =
                                      examTypes.find((exam) => exam.exam_name === e.target.value)?.id || "";
                                    setSelectedExamId(selectedId);
                                    setSelectedExamType(e.target.value);
                                  }}
                                >

                                  <option value="">Update Exam Type</option>
                                  {[...new Set(examTypes.map((examType) => examType.exam_name))].map(
                                    (uniqueExamName, index) => (
                                      <option key={index} value={uniqueExamName}>
                                        {uniqueExamName}
                                      </option>
                                    )
                                  )}
                                </select>

                              </div>

                              <label className="AC-SetLabel-Name" htmlFor="">
                                Update Degree
                              </label>
                              <input
                                className="Ac-set-input"
                                type="text"
                                placeholder="Update Required Degree"
                                name="degree_name"
                                value={updateData?.degree_name || ""}
                                onChange={(e) => {
                                  // console.log("Updated Degree Name:", e.target.value);
                                  setUpdateData({ ...updateData, degree_name: e.target.value });
                                }}
                              />
                              <button id="set-btn" type="button" onClick={handleUpdateDegree}>
                                Update NOW
                              </button>
                            </form>
                          </div>
                        </FormControl>
                      </Box>
                    </Modal>
            </tbody>
          </table>
        </div>
      </div>
</div>
      
    </>
  );
}

export default AddDegree;
