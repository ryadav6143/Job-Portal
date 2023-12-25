import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./ScheduledTechnical.css";

function ScheduledTechnical() {
  return (
    <>
      <div className="SCTEC-table">
        <p className="SCTEC-heading">Technical</p>
        <p className="table-des">A descriptive body text comes here</p>
        <div className="table-responsive">
          <table className="table">
            <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
              <tr>
                <th scope="col">S.No&#x2193;</th>
                <th scope="col">Discipline / Subject &#x2193;</th>
                <th scope="col">Eligibility criteria &#x2193;</th>
                <th scope="col">Day 1 &#x2193;</th>
                <th scope="col">Day 2 &#x2193;</th>
                <th scope="col">Day 3 &#x2193;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Computer Science Engineering/IT</td>
                <td>B.Tech. + M.Tech with 60% marks</td>
                <td>20 December 2023 </td>
                <td>26 December 2023 </td>
                <td>29 December 2023 </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination count={10} shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduledTechnical;
