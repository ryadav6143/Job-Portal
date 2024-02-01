import React, { useState, useEffect } from "react";

function AddDegree() {
  const [data, setData] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [newDegree, setNewDegree] = useState("");

  // ------------------GET DATA FROM API--------------------------------
  function degreeTypeMaster() {
    fetch("http://192.168.1.8:8090/v1/api/degreeTypeMaster")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }
  useEffect(() => {
    degreeTypeMaster();
  }, [data]);
  // ------------------GET DATA FROM API--------------------------------
  useEffect(() => {
    fetch("http://192.168.1.8:8090/v1/api/examTypeMaster")
      .then((response) => response.json())
      .then((data) => setExamTypes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // --------------------------ADDING DATA TO API-------------------------
  const handleAddDegree = () => {
    if (!selectedExamType || !newDegree.trim()) {
      alert("Please select Exam Type and enter Degree.");
      return;
    }

    fetch("http://192.168.1.8:8090/v1/api/degreeTypeMaster", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        examType: selectedExamType,
        degreeName: newDegree,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Update your data state or perform any other necessary actions
        setData([...data, responseData]);
        // Clear the form fields
        setSelectedExamType("");
        setNewDegree("");
      })
      .catch((error) => console.error("Error adding degree:", error));
  };
  // --------------------------ADDING DATA TO API-------------------------
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
              {examTypes.map((examType) => (
                <option key={examType.id} value={examType.exam_name}>
                  {examType.exam_name}
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
        <button type="button" onClick={handleAddDegree}>
          ADD NOW
        </button>
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
              {/* {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index+1}</td>
                  <td>{category.exam_types_master.exam_name}</td>
                  <td>{category.degree_name}</td>
                  <td>
                    <button id="update-btn">UPDATE</button>
                  </td>
                  <td>
                    <button id="delete-btn">DELETE</button>
                  </td>
                </tr>
              ))} */}
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.exam_types_master?.exam_name}</td>
                  <td>{category.degree_name}</td>
                  <td>
                    <button id="update-btn">UPDATE</button>
                  </td>
                  <td>
                    <button id="delete-btn">DELETE</button>
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
