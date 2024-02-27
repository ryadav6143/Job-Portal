import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import { ADMIN_BASE_URL } from "../../../config/config";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import close from "../../../assets/logos/close.png";

function AddDegree() {
  const [data, setData] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [newDegree, setNewDegree] = useState("");
  const [selectedExamId, setSelectedExamId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // ------------------GET DATA FROM API--------------------------------
  const degreeTypeMaster = () => {
    axios
      .get(`${ADMIN_BASE_URL}/degreeTypeMaster`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    degreeTypeMaster();
  }, []);

  // ------------------GET DATA FROM API--------------------------------
  useEffect(() => {
    fetchexamType();
  }, []);
  const fetchexamType = () => {
    axios
      .get(`${ADMIN_BASE_URL}/examTypeMaster`)
      .then((response) => {
        setExamTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleAddDegree = () => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .post(
        `${ADMIN_BASE_URL}/degreeTypeMaster`,
        {
          exam_types_master_id: selectedExamId,
          degree_name: newDegree,
        },
        {
          headers: {
            "access-token": accessToken.token,
          },
        }
      )
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  const handleDelete = (id) => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .delete(`${ADMIN_BASE_URL}/degreeTypeMaster/${id}`, {
        headers: {
          "access-token": accessToken.token,
        },
      })
      .then((response) => {
        // Update state after successful deletion
        // setSubject(subject.filter((subj) => subj.id !== id));
        console.log("degree deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting Subject:", error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
   
  };
  const handleOpenUpdateModal = () => {
    setUpdateModalOpen(true);
    // Additional logic if needed
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

      <div className="master-table ">
        <p className="table-heading">CURRENT DEGREES AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Exam Name</th>
                <th scope="col">Degree Name</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.exam_types_master?.exam_name}</td>
                  <td>{category.degree_name}</td>
                  <td>
                    <button onClick={handleOpenUpdateModal} id="table-btns">
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>

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
                    <option value="">Update Exam Type</option>
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
                  Update Degree
                </label>
                <input
                  className="Ac-set-input"
                  type="text"
                  placeholder="Update Required Degree"
                  value={newDegree}
                  onChange={(e) => setNewDegree(e.target.value)}
                />

                <button id="set-btn" type="button" onClick={handleAddDegree}>
                  Update NOW
                </button>
              </form>
                          </div>
                        </FormControl>
                      </Box>
                    </Modal>
                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDelete(category.id)}
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

export default AddDegree;
