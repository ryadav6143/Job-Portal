import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MasterCurrentOpening.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function MasterCurrentOpening() {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    navigate("/add-openings");
  };
  //-----------------------------------Adding Table-------------------------------
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const MasterTable = [
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Civil Engineering",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Electrical Engineering",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Computer Application",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Management",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Commerce",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Pharmacy",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Agriculture",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Computer Science",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Physics",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Chemistry",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Mathematics",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Forensic Science",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Language",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },

    {
      category:
        "Bio-Technology (Assistant Professor, Associate Professor and Professor)",
      department: "Department Of Chemistry",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Computer Science & Engineering",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
    {
      category: "Assistant Professor, Associate Professor and Professor",
      department: "Department Of Information Technology",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const MasterData = MasterTable.slice(startIndex, endIndex);
  //-----------------------------------Adding Table-------------------------------
  //-----------------------------------Delete Table Data-------------------------------
  const [masterTable, setMasterTable] = useState([...MasterTable]);
  const handleDelete = (index) => {
    const updatedMasterTable = [...masterTable];
    updatedMasterTable.splice((page - 1) * rowsPerPage + index, 1);
    setMasterTable(updatedMasterTable);
  };
  //-----------------------------------Delete Table Data-------------------------------

  //-----------------------------------Delete Table Data-------------------------------
  return (
    <>
      <div className="center-container">
        <div className="new-opening-btn">
          <button >
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
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {MasterData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <b> {data.category} </b>
                    </td>
                    <td>{data.department}</td>
                    <td>{data.lastDate}</td>

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
