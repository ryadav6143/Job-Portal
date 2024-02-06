import React, { useState, useEffect } from "react";
import axios from "axios";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";

import { BASE_URL } from "../../../config/config";

function AddDegree() {
  const [data, setData] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [newDegree, setNewDegree] = useState("");

  // ------------------GET DATA FROM API--------------------------------
  const degreeTypeMaster = () => {
    axios
      .get(`${BASE_URL}/degreeTypeMaster`)
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
      .get(`${BASE_URL}/examTypeMaster`)
      .then((response) => {
        setExamTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
              onChange={(e) => setSelectedExamType(e.target.value)}
            >
              <option value="">Select Exam Type</option>
              {Array.from(
                new Set(examTypes.map((examType) => examType.exam_name))
              ).map((uniqueExamName, index) => (
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
        <button type="button">ADD NOW</button>
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
                    <button id="table-btns">
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
