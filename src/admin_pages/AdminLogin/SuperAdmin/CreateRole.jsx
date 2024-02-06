import React from "react";
import "./Super.css";
import updatebtn from "../../../assets/logos/update.png";
import deletebtn from "../../../assets/logos/delete.png";

function CreateRole() {
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

  return (
    <>
      <div className="super-container">
        <div className="super-admin-form">
          <form action="">
            <label htmlFor="">Create New Role</label>
            <input type="text" placeholder="Role Name " />
          </form>
          <button type="submit" id="set-btn">
            ADD
          </button>
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
