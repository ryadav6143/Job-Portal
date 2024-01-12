import React, { useState } from "react";
import "./MasterCurrentOpening.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function MasterCurrentOpening() {
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [departmant, setDepartmant] = useState("");
  const [post, setPost] = useState("");
  const [subPost, setSubPost] = useState("");
  const handleJobType = (event) => {
    setJobType(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDepartmant = (event) => {
    setDepartmant(event.target.value);
  };
  const handlePost = (event) => {
    setPost(event.target.value);
  };
  const handleSubPost = (event) => {
    setSubPost(event.target.value);
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
        <div className="new-openings">
          <p className="master-heading">Add New Opening</p>
          <div className="new-openings-form">
            <form action="">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">No. Of Openings</label>
                  <input type="number" placeholder="Add No. Of Openings"/>
                </div>

                <div className="col-6">
                  <label htmlFor="dropdown2">Category</label>
                  <select
                    id="dropdown2"
                    value={category}
                    onChange={handleCategory}
                  >
                    <option value="">-- Select Category --</option>
                    <option value="optionA">Category 1</option>
                    <option value="optionB">Category 2</option>
                    <option value="optionC">Category 3</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="dropdown2">Department</label>
                  <select
                    id="dropdown2"
                    value={departmant}
                    onChange={handleDepartmant}
                  >
                    <option value="">-- Select Department --</option>
                    <option value="optionA">Department 1</option>
                    <option value="optionB">Department 2</option>
                    <option value="optionC">Department 3</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="">Post</label>
                  <select id="dropdown" value={post} onChange={handlePost}>
                    <option value="">-- Select Post --</option>
                    <option value="option1">Post 1</option>
                    <option value="option2">Post 2</option>
                    <option value="option3">Post 3</option>
                    <option value="option4">Post 4</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="dropdown2">SubPost</label>
                  <select
                    id="dropdown2"
                    value={subPost}
                    onChange={handleSubPost}
                  >
                    <option value="">-- Select SubPost --</option>
                    <option value="optionA">SubPost 1</option>
                    <option value="optionB">SubPost 2</option>
                    <option value="optionC">SubPost 3</option>
                    <option value="optionC">SubPost 4</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor=""> Qualification & Experience</label>
                  <input
                    type="text"
                    placeholder=" Add Qualification And Experience
"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <label htmlFor=""> Highly Desirable</label>
                  <input type="text" placeholder="Add Highly Desirable" />
                </div>
                <div className="col-6">
                  <label htmlFor="">Last Date</label>
                  <input type="date" />
                </div>
              </div>
              <div>
                <p id="master-sub-headings">
                  Required Fields For Interview Schedule
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="">Eligibility criteria</label>
                  <input type="text" placeholder="Add Eligibility Criteria" />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label htmlFor="">Day-1</label>
                  <input type="date" />
                </div>
                <div className="col-4">
                  <label htmlFor="">Day-2</label>
                  <input type="date" />
                </div>
                <div className="col-4">
                  <label htmlFor="">Day-3</label>
                  <input type="date" />
                </div>
              </div>
              <div className="row toggle-btns">
                <div className="col-6">
                  <p>Add To Current Opening</p>
                  <label class="switch">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                  </label>
                </div>
                <div className="col-6">
                  <p>Add to Interview Schedule</p>
                  <label class="switch">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                  </label>
                </div>
              </div>
              <div>
                <button type="submit" id="add-job">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="master-table ">
          <p className="table-heading">Master-Table</p>
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
