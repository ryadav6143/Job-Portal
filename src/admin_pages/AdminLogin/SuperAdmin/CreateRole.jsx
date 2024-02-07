import React, { useState } from "react";
import "./Super.css";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";

function CreateRole() {
  const [newRoleName, setNewRoleName] = useState("");
  const Role = [
    {
      role_id: "1",
      role_name: "Admin",
      rights: "All",
    },
    {
      role_id: "2",
      role_name: "User",
      rights: "Limited",
    },
    {
      role_id: "3",
      role_name: "Moderator",
      rights: "Moderate",
    },
    {
      role_id: "4",
      role_name: "Guest",
      rights: "Read Only",
    },
    {
      role_id: "5",
      role_name: "Editor",
      rights: "Edit",
    },
    {
      role_id: "6",
      role_name: "Manager",
      rights: "Management",
    },
    {
      role_id: "7",
      role_name: "Supervisor",
      rights: "Supervise",
    },
    {
      role_id: "8",
      role_name: "Developer",
      rights: "Develop",
    },
    {
      role_id: "9",
      role_name: "Analyst",
      rights: "Analyze",
    },
    {
      role_id: "10",
      role_name: "Tester",
      rights: "Test",
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Construct the data object to be sent to the API
    const newRoleData = {
      role_name: newRoleName,
      // You may include other fields here if needed
    };

    try {
      // Send a POST request to your API endpoint
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed (e.g., authentication token)
        },
        body: JSON.stringify(newRoleData),
      });

      if (!response.ok) {
        throw new Error("Failed to add new role");
      }

      // Optionally, you can handle success response here (e.g., show a success message)
      console.log("New role added successfully");
    } catch (error) {
      // Handle any errors that occur during the API call (e.g., show an error message)
      console.error("Error adding new role:", error.message);
    }
  };
  return (
    <>
      <div className="super-container">
        <div className="super-admin-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="roleNameInput">Create New Role</label>
            <input
              type="text"
              id="roleNameInput"
              name="role_name"
              placeholder="Role Name"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
            />
            <button type="submit" id="set-btn">
              ADD
            </button>
          </form>
        </div>

        <div className="super-admin-table">
          <p className="table-heading">Current Role Available</p>
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ROLE</th>
                <th scope="col">RIGHTS</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {Role.map((data) => (
                <tr key={data.role_id}>
                  <td>{data.role_id}</td>
                  <td>{data.role_name}</td>
                  <td>{data.rights}</td>
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

export default CreateRole;
