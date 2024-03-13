import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ADMIN_BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";

function AddExamType() {
  const [data, setData] = useState([]);
  const [newExamType, setNewExamType] = useState("");
  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedExamId, setSelectedExamId] = useState(null);
  // -----------------------------FETCHING EXAMTYPEMASTER API----------
  function examType() {
    axios
      .get(`${ADMIN_BASE_URL}/examTypeMaster`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }
  useEffect(() => {
    examType();
  }, []);
  // -----------------------------FETCHING EXAMTYPEMASTER API-----------

  // --------------------ADD DATA TO API--------------------------------

  const handleAddExamType = () => {
    // Ensure newExamType is not empty before making the request
    if (!newExamType.trim()) {
      alert("Please enter a valid exam type.");
      return;
    }
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .post(`${ADMIN_BASE_URL}/examTypeMaster`, {
        exam_name: newExamType,
      }, {
        headers: {
          'access-token': accessToken.token
        }
      })
      .then((response) => {
        setData([...data, response.data]);
        setNewExamType("");
        setOpen(false);
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  // --------------------ADD DATA TO API--------------------------------

  // --------------------DELETE DATA FROM API--------------------------------
  const handleDeleteExamType = (examId) => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .delete(`${ADMIN_BASE_URL}/examTypeMaster/${examId}`, {
        headers: {
          'access-token': accessToken.token
        }
      })
      .then(() => {
        // Remove the deleted item from the state
        const updatedData = data.filter((exam) => exam.id !== examId);
        setData(updatedData);
      })
      .catch((error) => console.error("Error deleting exam type:", error));
  };
  const handleUpdateExamType = () => {
    if (!selectedExam) return;
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .put(`${ADMIN_BASE_URL}/examTypeMaster`, {
        examtypes_id: selectedExam.id,
        exam_name: selectedExam.exam_name,
      }, {
        headers: {
          'access-token': accessToken.token
        }
      })
      .then((response) => {
        // Update the state with the updated data
        setData(
          data.map((exam) =>
            exam.id === selectedExam.id ? response.data : exam
          )
        );
        // Reset the selected exam
        setSelectedExam(null);
        setUpdateModalOpen(false);
        examType();
      })
      .catch((error) => console.error("Error updating exam type:", error));
  };

  const handleSelectExamForUpdate = (examId) => {
    const selectedExam = data.find((exam) => exam.id === examId);
    setSelectedExam(selectedExam);
    setSelectedExamId(examId); // Set the selected exam ID
    setUpdateModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setUpdateModalOpen(false);
    setSelectedExam(null);
    setSelectedExamId(null); // Reset the selected exam ID
  };

  const handleAddModalClose = () => {
    setOpen(false); // Close the "Add Exam Type" modal
    setNewExamType(""); // Reset the new exam type input field
  };
  // --------------------DELETE DATA FROM API--------------------------------

  // --------------------UPDATE DATA IN API--------------------------------

  // --------------------UPDATE DATA IN API--------------------------------

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <button onClick={() => setOpen(true)}>Add Exam Type</button>
        </div>
        <Modal
          open={open} // Control the open state of the modal
          onClose={() => setOpen(false)} // Close the modal when onClose event occurs
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <div>
                <form>
                  <img
                    onClick={handleAddModalClose}
                    className="Examtype-close-btn"
                    src={close}
                  />
                  <label className="AC-SetLabel-Name" htmlFor="categoryInput">
                    Add Exam Type
                  </label>
                  <input
                    type="text"
                    id="categoryInput"
                    className="Ac-set-input"
                    placeholder="Add Your Exam Type"
                    value={newExamType}
                    onChange={(e) => setNewExamType(e.target.value)}
                  />
                  <button
                    id="set-btn"
                    type="button"
                    onClick={handleAddExamType}
                  >
                    ADD NOW
                  </button>
                </form>
              </div>
            </FormControl>
          </Box>
        </Modal>
      </div>

      <div className="master-table ">
        <p className="SCA-heading">CURRENT EXAM TYPE AVAILABLE</p>
        <div className="table-responsive fixe-table">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">EXAM TYPE</th>
                <th scope="col">UPDATE</th>
                {/* <th scope="col">DELETE</th> */}
              </tr>
            </thead>
            <tbody>
              {data
                .filter(
                  (value, index, self) =>
                    self.findIndex((v) => v.exam_name === value.exam_name) ===
                    index
                )
                .map((exam) => (
                  <tr key={exam.id}>
                    <td>{exam.id}</td>
                    <td>{exam.exam_name}</td>
                    <td>
                      <button
                        id="table-btns"
                        onClick={() => handleSelectExamForUpdate(exam.id)}
                      >
                        {" "}
                        <img src={updatebtn} className="up-del-btn" alt="" />
                      </button>
                     
                    </td>
                    {/* <td>
                      <button
                        id="table-btns"
                        onClick={() => handleDeleteExamType(parseInt(exam.id))}
                      >
                        <img src={deletebtn} className="up-del-btn" alt="" />
                      </button>
                    </td> */}
                  </tr>
                ))}

<Modal
                        open={updateModalOpen}
                        onClose={handleUpdateModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <FormControl>
                            <div>
                              <form>
                                <img
                                  onClick={handleUpdateModalClose}
                                  className="update-close-btn"
                                  src={close}
                                />
                                <label
                                  className="AC-SetLabel-Name"
                                  htmlFor="categoryInput"
                                >
                                  Update Exam Type
                                </label>

                                <input
                                  className="Ac-set-input"
                                  type="text"
                                  id="categoryInput"
                                  placeholder="Update Exam Type"
                                  value={
                                    selectedExam ? selectedExam.exam_name : ""
                                  }
                                  onChange={(e) =>
                                    setSelectedExam({
                                      ...selectedExam,
                                      exam_name: e.target.value,
                                    })
                                  }
                                />
                                <button
                                  id="set-btn"
                                  type="button"
                                  onClick={handleUpdateExamType}
                                >
                                  UPDATE NOW
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
    </>
  );
}

export default AddExamType;
