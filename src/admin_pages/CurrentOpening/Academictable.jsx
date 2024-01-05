import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./CurrentOpening.css";

function Academictable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const AcademicTable = [
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
  const AcademicData = AcademicTable.slice(startIndex, endIndex);
  return (
    <>
      <div className="academic-table">
        <p className="table-heading">ACADEMICS</p>
        <div className="table-responsive">
          <table className="table table-responsive">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Detartment</th>
                <th scope="col">Apply</th>
                <th scope="col">Last Date</th>
              </tr>
            </thead>
            <tbody>
              {AcademicData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <b> {data.category} </b>
                  </td>
                  <td>{data.department}</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href={data.applyLink}>APPLY NOW</a>
                    </button>
                  </td>
                  <td>{data.lastDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(AcademicTable.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default Academictable;
