import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import { ADMIN_BASE_URL } from "../../../config/config";

function AddDegree() {
  const [data, setData] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [newDegree, setNewDegree] = useState("");
  const [selectedExamId, setSelectedExamId] = useState("");

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
      .post(`${ADMIN_BASE_URL}/degreeTypeMaster`, {
        exam_types_master_id: selectedExamId,
        degree_name: newDegree,
      }, {
        headers: {
          'access-token': accessToken.token
        }
      })
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  const handleDelete = (id) => {
    let accessToken = localStorage.getItem("Token");
    accessToken = JSON.parse(accessToken);
    axios
      .delete(`${ADMIN_BASE_URL}/degreeTypeMaster/${id}`,{
        headers: {           
          "access-token": accessToken.token 
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
  return (
    <>
      <div className="container-1">
        <form action="">
          <div>
            <label>Select Exam Type</label>
            <select
              name="examType"
              className="select-jc "
              value={selectedExamType}
              onChange={(e) => {
                const selectedId = examTypes.find(exam => exam.exam_name === e.target.value)?.id || "";
                setSelectedExamId(selectedId);
                setSelectedExamType(e.target.value);
              }}
            >
              <option value="">Select Exam Type</option>
              {[...new Set(examTypes.map((examType) => examType.exam_name))].map((uniqueExamName, index) => (
                <option key={index} value={uniqueExamName}>
                  {uniqueExamName}
                </option>
              ))}
            </select>

          </div>

          <label htmlFor="">Add Degree</label>
          <input
            type="text"
            placeholder="Add Required Degree"
            value={newDegree}
            onChange={(e) => setNewDegree(e.target.value)}
          />
        </form>
        <div className="new-opening-btn">
          <button type="button" onClick={handleAddDegree}>ADD NOW</button>
        </div>
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
                    <button id="table-btns">
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                  <td>
                    <button id="table-btns"  onClick={() => handleDelete(category.id)}>
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
