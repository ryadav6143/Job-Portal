import React from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CurrentOpening.css";

function CurrentOpening() {
  return (
    <>
    <Header></Header>
      <div>
        <div className="cop-heading">
          <p>CURRENT OPENING</p>
        </div>
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
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Mechanical Engineering</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Electronics Engineering</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Civil Engineering</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Electrical Engineering</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Computer Application</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Management</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Commerce</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Management</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Pharmacy</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Agriculture</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Computer Science</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Physics</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Chemistry</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Mathematics</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Forensic Science</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Forensic Science</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Language</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
                <tr>
                  <th scope="row">Associate Professor and Professor</th>
                  <td>Department Of Chemistry</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <Stack spacing={3}>
                <Pagination count={10} shape="rounded" />
              </Stack>
            </div>
          </div>
        </div>
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
                <tr>
                  <th scope="row">Admission Counsellor Appointment</th>
                  <td>Non Teaching Staff</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href="/apply-now">APPLY NOW</a>
                    </button>
                  </td>
                  <td>20/01/2024</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <Stack spacing={1}>
                <Pagination count={10} shape="rounded" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
}

export default CurrentOpening;
