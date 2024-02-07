import React, { useState, useEffect } from "react";
import "./Master.css";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

function AddSubjects() {
  const [subject, setSubject] = useState([]);
  const [newSubject, setNewSubjectName] = useState("");
  const [editingSubjectId, setEditingSubjectId] = useState(null);
  const [newSubjectType, setNewSubjectType] = useState("");
  const [newSubjectDescription, setNewSubjectDescription] = useState("");
  const [editingSubject, setEditingSubject] = useState(null);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${BASE_URL}/subjectMaster`)
      .then((response) => {
        // Update state with the fetched data
        setSubject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures the useEffect runs only once when the component mounts

  const handleAdd = () => {
    // Send a post request to the API to add a new department
    axios
      .post(`${BASE_URL}/subjectMaster`, {
        subject_name: newSubject,
        subject_type: newSubjectType,
        description: newSubjectDescription,
      })
      .then((response) => {
        // Update state after successful addition
        setSubject([...subject, response.data]);
        console.log("Department added successfully!");
        // Clear the input field
        setNewSubjectName("");
      })
      .catch((error) => {
        console.error("Error adding department:", error);
      });
  };
  const handleUpdate = (subject) => {
    setEditingSubject(subject);
    setNewSubjectName(subject.subject_name);
    setNewSubjectType(subject.subject_type);
    setNewSubjectDescription(subject.description);
  };
  const handleSubmitUpdate = () => {
    axios
      .put(`${BASE_URL}/subjectMaster/${editingSubject.id}`, {
        subject_name: newSubject,
        subject_type: newSubjectType,
        description: newSubjectDescription,
      })
      .then((response) => {
        const updatedSubjects = subject.map((subj) =>
          subj.id === editingSubject.id ? response.data : subj
        );
        setSubject(updatedSubjects);
        setEditingSubject(null);
        setNewSubjectName("");
        setNewSubjectType("");
        setNewSubjectDescription("");
        console.log("Subject updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating subject:", error);
      });
  };

  const handleDelete = (id) => {
    // Send a delete request to the API
    axios
      .delete(`${BASE_URL}/subjectMaster/${id}`)
      .then((response) => {
        // Update state after successful deletion
        setSubject(subject.filter((subj) => subj.id !== id));
        console.log("Subject deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting Subject:", error);
      });
  };
  return (
    <>
      <div className="container-1">
        <form>
          <label htmlFor="SubjectName">Add Subject Name</label>
          <input
            type="text"
            id="SubjectName"
            placeholder="Add Your Subject Name"
            value={newSubject}
            onChange={(e) => setNewSubjectName(e.target.value)}
          />
          <label htmlFor="SubjectType">Add Subject Type</label>
          <input
            type="text"
            id="SubjectType"
            placeholder="Add Subject Type"
            value={newSubjectType}
            onChange={(e) => setNewSubjectType(e.target.value)}
          />
          <label htmlFor="SubjectDescription">Add Subject Description</label>
          <input
            type="text"
            id="SubjectDescription"
            placeholder="Add Description"
            value={newSubjectDescription}
            onChange={(e) => setNewSubjectDescription(e.target.value)}
          />
          {editingSubject ? (
            <button type="button" onClick={handleSubmitUpdate}>
              UPDATE
            </button>
          ) : (
            <button type="button" onClick={handleAdd}>
              ADD
            </button>
          )}
        </form>
      </div>

      <div className="master-table ">
        <p className="table-heading">CURRENT Subjects AVAILABLE</p>
        <div className="">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">SUBJECT NAME</th>
                <th scope="col">SUBJECT TYPE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {subject.map((subject) => (
                <tr key={subject.id}>
                  <td>{subject.id}</td>
                  <td>{subject.subject_name}</td>
                  <td>{subject.subject_type}</td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleUpdate(subject)}
                    >
                      <img src={updatebtn} className="up-del-btn" alt="" />
                    </button>
                  </td>
                  <td>
                    <button
                      id="table-btns"
                      onClick={() => handleDelete(subject.id)}
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

export default AddSubjects;
