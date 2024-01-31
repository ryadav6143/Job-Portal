import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Reports() {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);

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

  const [masterTable, setMasterTable] = useState([...MasterTable]);
  const handleDelete = (index) => {
    const updatedMasterTable = [...masterTable];
    updatedMasterTable.splice((page - 1) * rowsPerPage + index, 1);
    setMasterTable(updatedMasterTable);
  };

  return (
    <>
      <div className="center-container">
        <div className="master-table ">
          <p className="table-heading">APPLIED CANDIDATES</p>
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
                    <td>{data.category}</td>
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

export default Reports;
/*
candidate full name 
gender
email
contact1
contact1
city
Education------- Filter 
total exp
Acacemic 
Industrial
Resuem Link
Specialization-----------Filter
Category (Category of Appointment)
Applide Post (post_applied_for)----------Filter 

Applied Date^^^^
*/
