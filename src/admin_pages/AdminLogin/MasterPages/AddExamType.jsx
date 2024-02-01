import React, { useState, useEffect } from "react";

function AddExamType() {
  const [data, setData] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // -----------------------------FETCHING EXAMTYPEMASTER API----------
  function examType() {
    fetch("http://192.168.1.8:8090/v1/api/examTypeMaster")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    examType();
  }, []);
  // -----------------------------FETCHING EXAMTYPEMASTER API-----------

  // --------------------ADD DATA TO API--------------------------------

  const handleAddExamType = () => {
    // Ensure newCategory is not empty before making the request
    if (!newCategory.trim()) {
      alert("Please enter a valid exam type.");
      return;
    }

    fetch("http://192.168.1.8:8090/v1/api/examTypeMaster", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exam_name: newCategory }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData([...data, responseData]);
        setNewCategory("");
      })
      .catch((error) => console.error("Error adding category:", error));
  };
  // --------------------ADD DATA TO API--------------------------------

  // --------------------DELETE DATA FROM API--------------------------------
  const handleDeleteExamType = (examTypeId) => {
    fetch(`http://192.168.1.8:8090/v1/api/examTypeMaster/${examTypeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted exam type from the state
          setData(data.filter((examType) => examType.id !== examTypeId));
        } else {
          console.error("Error deleting exam type");
        }
      })
      .catch((error) => console.error("Error deleting exam type:", error));
  };
  // --------------------DELETE DATA FROM API--------------------------------
  return (
    <>
      <div className="container-1">
        <form>
          <label htmlFor="categoryInput">Add Exam Type</label>
          <input
            type="text"
            id="categoryInput"
            placeholder="Add Your Exam Type"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="button" onClick={handleAddExamType}>
            ADD NOW
          </button>
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT CATEGORIES AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">EXAM TYPE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index+1}</td>
                  <td>{category.exam_name}</td>
                  <td>
                    <button id="update-btn">UPDATE</button>
                  </td>
                  <td>
                    <button
                      id="delete-btn"
                      onClick={() => handleDeleteExamType(category.id)}
                    >
                      DELETE
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
