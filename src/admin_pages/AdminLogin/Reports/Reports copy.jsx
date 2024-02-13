import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Reports() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCurrentPage(1);
  };

  const handleEducationChange = (e) => {
    setSelectedEducation(e.target.value);
    setCurrentPage(1);
  };

  const data = [
    { id: 1, name: 'John Doe', contact: 'john.doe@example.com', phone: '123-456-7890', city: 'New York', education: 'Bachelor' },
    { id: 2, name: 'Jane Smith', contact: 'jane.smith@example.com', phone: '987-654-3210', city: 'Los Angeles', education: 'Master' },
    { id: 3, name: 'Alice Johnson', contact: 'alice.johnson@example.com', phone: '345-678-9012', city: 'Chicago', education: 'Ph.D.' },
    { id: 4, name: 'Robert Williams', contact: 'robert.williams@example.com', phone: '789-012-3456', city: 'Miami', education: 'Bachelor' },
    { id: 5, name: 'Emily Davis', contact: 'emily.davis@example.com', phone: '234-567-8901', city: 'San Francisco', education: 'Master' },
    { id: 6, name: 'Daniel Brown', contact: 'daniel.brown@example.com', phone: '567-890-1234', city: 'Seattle', education: 'Bachelor' },
    { id: 7, name: 'Sophia Miller', contact: 'sophia.miller@example.com', phone: '890-123-4567', city: 'Boston', education: 'Master' },
    { id: 8, name: 'Liam Taylor', contact: 'liam.taylor@example.com', phone: '123-234-5678', city: 'Austin', education: 'Bachelor' },
    { id: 9, name: 'Olivia Anderson', contact: 'olivia.anderson@example.com', phone: '345-456-7890', city: 'Denver', education: 'Ph.D.' },
    { id: 10, name: 'Noah Wilson', contact: 'noah.wilson@example.com', phone: '567-678-9012', city: 'Portland', education: 'Master' },
    { id: 11, name: 'Ava Lee', contact: 'ava.lee@example.com', phone: '890-901-2345', city: 'Houston', education: 'Bachelor' },
    { id: 12, name: 'Ethan Turner', contact: 'ethan.turner@example.com', phone: '123-345-6789', city: 'Phoenix', education: 'Master' },
    { id: 13, name: 'Sophie Wright', contact: 'sophie.wright@example.com', phone: '456-789-0123', city: 'Atlanta', education: 'Ph.D.' },
    { id: 14, name: 'Mason Harris', contact: 'mason.harris@example.com', phone: '789-012-3456', city: 'San Diego', education: 'Bachelor' },
    { id: 15, name: 'Isabella Hill', contact: 'isabella.hill@example.com', phone: '234-567-8901', city: 'Dallas', education: 'Master' },
    { id: 16, name: 'Jackson Clark', contact: 'jackson.clark@example.com', phone: '567-890-1234', city: 'Philadelphia', education: 'Bachelor' },
    { id: 17, name: 'Amelia Lewis', contact: 'amelia.lewis@example.com', phone: '890-123-4567', city: 'Detroit', education: 'Ph.D.' },
    { id: 18, name: 'Logan Moore', contact: 'logan.moore@example.com', phone: '123-234-5678', city: 'Minneapolis', education: 'Bachelor' },
    { id: 19, name: 'Ella Carter', contact: 'ella.carter@example.com', phone: '345-456-7890', city: 'Raleigh', education: 'Master' },
    { id: 20, name: 'Lucas Cooper', contact: 'lucas.cooper@example.com', phone: '567-678-9012', city: 'Nashville', education: 'Bachelor' },
  ];
  

  const filteredData = data.filter((user) => {
    return (
      (selectedCity === '' || user.city === selectedCity) &&
      (selectedEducation === '' || user.education === selectedEducation)
    );
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
    <div className="row mb-3">
      <div className="col-md-6">
        <label>Select City:</label>
        <select className="form-control" value={selectedCity} onChange={handleCityChange}>
          <option value="">All</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          {/* Add more city options */}
        </select>
      </div>

      <div className="col-md-6">
        <label>Select Education:</label>
        <select className="form-control" value={selectedEducation} onChange={handleEducationChange}>
          <option value="">All</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          {/* Add more education options */}
        </select>
      </div>
    </div>

    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Phone</th>
          <th>City</th>
          <th>Education</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.contact}</td>
            <td>{user.phone}</td>
            <td>{user.city}</td>
            <td>{user.education}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Pagination>
      {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  </div>
);
}

export default Reports;
/*
candidate full name 
gender
email
contact1
contact1

Education------- Filter 
total exp
Acacemic 
Industrial
Resuem Link
Specialization
Category (Category of Appointment)-----------Filter
Applide Post (post_applied_for)----------Filter 

Applied Date^^^^
*/
