import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CurrentOpening.css";

function NonAcademictable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const NonAcademicTable = [
    {
      category: "Admission Counsellor Appointment",
      department: "Non Teaching Staff",
      applyLink: "/apply-now",
      lastDate: "20/01/2024",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const NonAcademicData = NonAcademicTable.slice(startIndex, endIndex);
  return (
    <>
      <div className="non-academin-table">
          <p className="table-heading">NON-ACADEMICS</p>
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
                {NonAcademicData.map((data, index) => (
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
                  count={Math.ceil(NonAcademicTable.length / rowsPerPage)}
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

export default NonAcademictable;
