import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MasterCurrentOpening.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import adminApiService from "../../../adminApiService";

function MasterCurrentOpening() {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
  const [jobProfiles, setJobProfiles] = useState([]);



  useEffect(() => {
    const fetchJobProfiles = async () => {
      try {
        const response = await adminApiService.getJobProfile();
        setJobProfiles(response.data);
        console.log("response get", response.data)
      } catch (error) {
        console.error('Error fetching job profiles:', error);
      }
    };

    fetchJobProfiles();
  }, []);

  const handleNavigation = () => {
    // Step 2: Use a protected route
    if (isAdminLoggedIn) {
      navigate("/add-openings");
    } else {
      // Redirect to login or show an error message
      alert("Admin not logged in. Redirect to login.");
      // Example: navigate("/login");
    }
  };
  const handleEditForm = () => {

  
      navigate("/edit-openings");
   
  };
  //-----------------------------------Adding Table-------------------------------
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  // const MasterTable = [


  //   {
  //     category: "Assistant Professor, Associate Professor and Professor",
  //     department: "Department Of Information Technology",
  //     applyLink: "/apply-now",
  //     lastDate: "20/01/2024",
  //   },
  // ];
  const MasterTable = jobProfiles.map((profile) => ({
    category: profile.job_category_master?.category_name || "N/A",
    department: profile.department_master?.dept_name || "N/A",
    applyLink: "/apply-now",
    lastDate: profile.last_date_to_apply || "N/A",
    isActive: profile.is_active ? "Yes" : "No",
    listToCurrentOpening: profile.publish_to_vacancy ? "Yes" : "No",
    listToInterviewSchedule: profile.publish_to_schedule_interview ? "Yes" : "No",

  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const MasterData = MasterTable.slice(startIndex, endIndex);

  const [masterTable, setMasterTable] = useState([...MasterTable]);
  const handleDelete = (index) => {
    const updatedMasterTable = [...masterTable];
    updatedMasterTable.splice((page - 1) * rowsPerPage + index, 1);
    setMasterTable(updatedMasterTable);
  };

  return (
    <>
      <div className="center-container">
        <div className="new-opening-btn">
          <button>
            <a onClick={handleNavigation}>Add New Openings</a>
          </button>
        </div>

        <div className="master-table ">
          <p className="table-heading">Admin-Table</p>
          <div className="">
            <table className="table table-responsive">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Detartment</th>
                  <th scope="col">Last Date</th>
                  <th scope="col">edit</th>

                  <th scope="col">isActive</th>
                  <th scope="col">List to Current Opening</th>
                  <th scope="col">List to Interview Schedule</th>

                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {MasterData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.category}</td>
                    <td>{data.department}</td>
                    <td>{data.lastDate}</td>
                    <td>
                      <button type="button" id="edit-btn">
                        <a onClick={handleEditForm}> EDIT</a>
                      </button>
                    </td>
                    <td>{data.isActive}</td>
                    <td>{data.listToCurrentOpening}</td>
                    <td>{data.listToInterviewSchedule}</td>


                    <td>
                      <button type="button" id="del-btn">
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(MasterTable.length / rowsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  shape="rounded"
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterCurrentOpening;

{
  // delete functionality
  /*import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  // Function to fetch data from the database
  const fetchData = async () => {
    try {
      // Fetch data from the database (replace with your API endpoint)
      const response = await fetch('your-api-endpoint');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  // Function to delete data
  const deleteData = async (id) => {
    try {
      // Send a request to delete data from the database
      await fetch(`your-delete-endpoint/${id}`, {
        method: 'DELETE',
      });

      // Remove the deleted item from the displayed data
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2>Your Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
 */
}
