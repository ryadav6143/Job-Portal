import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./ScheduledAdministration.css"

function ScheduledAdministration() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const ScheduledAdministrationTable = [
    {
      "S.No": "1",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "2",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "3",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "4",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "5",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "6",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "7",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "8",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "9",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "10",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "11",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "12",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
    {
      "S.No": "13",
      "Discipline / Subject": "Computer Science Engineering/IT",
      "Eligibility criteria": "B.Tech. + M.Tech with 60% marks",
      "Day 1": "20 December 2023",
      "Day 2": "24 December 2023",
      "Day 3": "27 December 2023",
    },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const ScheduledAdministrationData = ScheduledAdministrationTable.slice(
    startIndex,
    endIndex
  );
  return (
   <>
    <div className="SCADM-table">
          <p className="SCADM-heading">Administration</p>
          <p className="table-des">A descriptive body text comes here</p>
          <div className="table-responsive">
            <table className="table">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                <tr>
                  <th scope="col">S.No &#x2193;</th>
                  <th scope="col">Discipline / Subject &#x2193;</th>
                  <th scope="col">Eligibility criteria &#x2193;</th>
                  <th scope="col">Day 1 &#x2193;</th>
                  <th scope="col">Day 2 &#x2193;</th>
                  <th scope="col">Day 3 &#x2193;</th>
                </tr>
              </thead>
              <tbody>
              {ScheduledAdministrationData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <b> {data["S.No"]} </b>
                  </td>
                  <td>{data["Discipline / Subject"]}</td>
                  <td>{data["Eligibility criteria"]}</td>
                  <td>{data["Day 1"]}</td>
                  <td>{data["Day 2"]}</td>
                  <td>{data["Day 3"]}</td>
                </tr>
              ))}
            </tbody>
            </table>
            <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(ScheduledAdministrationTable.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                shape="rounded"
              />
            </Stack>
          </div>
          </div>
        </div>
   </>
  )
}

export default ScheduledAdministration
