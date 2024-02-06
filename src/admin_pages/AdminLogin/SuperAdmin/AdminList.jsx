import React from "react";
import "./Super.css";
function AdminList() {
  const Admins = [
    {
      name: "Rahul Patni",
      email: "rahul.patni@corusview.com",
      contact: "9876543210",
      role: "Super Admin",
      rights: "All",
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      contact: "9876543211",
      role: "Admin",
      rights: ["View", "Edit"],
    },
    {
      name: "Amit Singh",
      email: "amit.singh@example.com",
      contact: "9876543212",
      role: "Admin",
      rights: ["View", "Delete"],
    },
    {
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      contact: "9876543213",
      role: "Admin",
      rights: ["View"],
    },
    {
      name: "Sachin Patel",
      email: "sachin.patel@example.com",
      contact: "9876543214",
      role: "Admin",
      rights: ["Edit", "Delete"],
    },
    {
      name: "Deepika Mishra",
      email: "deepika.mishra@example.com",
      contact: "9876543215",
      role: "Admin",
      rights: ["View", "Edit"],
    },
    {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      contact: "9876543216",
      role: "Admin",
      rights: ["View", "Delete"],
    },
    {
      name: "Anjali Gupta",
      email: "anjali.gupta@example.com",
      contact: "9876543217",
      role: "Admin",
      rights: ["View"],
    },
    {
      name: "Vivek Sharma",
      email: "vivek.sharma@example.com",
      contact: "9876543218",
      role: "Admin",
      rights: ["Edit", "Delete"],
    },
    {
      name: "Shreya Singh",
      email: "shreya.singh@example.com",
      contact: "9876543219",
      role: "Admin",
      rights: ["View", "Edit"],
    },
    {
      name: "Arun Patel",
      email: "arun.patel@example.com",
      contact: "9876543220",
      role: "Admin",
      rights: ["View", "Delete"],
    },
    {
      name: "Anita Das",
      email: "anita.das@example.com",
      contact: "9876543221",
      role: "Admin",
      rights: ["View"],
    },
    {
      name: "Ravi Gupta",
      email: "ravi.gupta@example.com",
      contact: "9876543222",
      role: "Admin",
      rights: ["Edit", "Delete"],
    },
    {
      name: "Pooja Singh",
      email: "pooja.singh@example.com",
      contact: "9876543223",
      role: "Admin",
      rights: ["View", "Edit"],
    },
    {
      name: "Alok Sharma",
      email: "alok.sharma@example.com",
      contact: "9876543224",
      role: "Admin",
      rights: ["View", "Delete"],
    },
    {
      name: "Riya Patel",
      email: "riya.patel@example.com",
      contact: "9876543225",
      role: "Admin",
      rights: ["View"],
    },
  ];

  return (
    <>
      <div className="admin-list">
        <table className="table table-responsive">
          <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">CONTACT</th>
              <th scope="col">ROLE</th>
              <th scope="col">RIGHTS</th>
            </tr>
          </thead>
          <tbody>
            {Admins.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.role}</td>
                <td>{data.rights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminList;
