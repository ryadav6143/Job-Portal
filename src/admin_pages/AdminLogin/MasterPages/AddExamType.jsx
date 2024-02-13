import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ADMIN_BASE_URL } from "../../../config/config";
import { ADMIN_BASE_URL } from "../../../config/config";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";

function AddExamType() {
  const [data, setData] = useState([]);
  const [newExamType, setNewExamType] = useState("");

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

    axios
      .post(`${ADMIN_BASE_URL}/examTypeMaster`, {
        exam_name: newExamType,
      })
      .then((response) => {
        setData([...data, response.data]);
        setNewExamType("");
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  // --------------------ADD DATA TO API--------------------------------

  // --------------------DELETE DATA FROM API--------------------------------
  const handleDeleteExamType = (examId) => {
    axios
      .delete(`${ADMIN_BASE_URL}/examTypeMaster/${examId}`)
      .then(() => {
        // Remove the deleted item from the state
        const updatedData = data.filter((exam) => exam.id !== examId);
        setData(updatedData);
      })
      .catch((error) => console.error("Error deleting exam type:", error));
  };
  // --------------------DELETE DATA FROM API--------------------------------

  // --------------------UPDATE DATA IN API--------------------------------

  // --------------------UPDATE DATA IN API--------------------------------
  return (
    <>
      <div className="container-1">
        <form>
          <label htmlFor="categoryInput">Add Exam Type</label>
          <input
            type="text"
            id="categoryInput"
            placeholder="Add Your Exam Type"
            value={newExamType}
            onChange={(e) => setNewExamType(e.target.value)}
          />
          <button type="button" onClick={handleAddExamType}>
            ADD NOW
          </button>
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT EXAM TYPE AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">EXAM TYPE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
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
                      <button id="table-btns">
                        {" "}
                        <img src={updatebtn} className="up-del-btn" alt="" />
                      </button>
                    </td>
                    <td>
                      <button
                        id="table-btns"
                        onClick={() => handleDeleteExamType(parseInt(exam.id))}
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

export default AddExamType;
