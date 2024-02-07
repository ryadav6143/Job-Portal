import React, { useState,useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CurrentOpening.css";
import adminApiService from "../adminApiService";
function Academictable() {

  const [jobProfiles, setJobProfiles] = useState([]);
  useEffect(() => {
    const fetchJobProfiles = async () => {
      try {
        const response = await adminApiService.getJobProfile();
        console.log("response get", response.data);
        setJobProfiles(response.data);

      } catch (error) {
        console.error('Error fetching job profiles:', error);
      }
    };

    fetchJobProfiles();
  }, []);

  const [page, setPage] = useState(1);
  
  const rowsPerPage = 10;

  const AcademicTable = jobProfiles
  .filter((profile) => profile.publish_to_vacancy) 
  .map((profile) => ({
    category: profile.job_category_master?.category_name || "N/A",
    department: profile.department_master?.dept_name || "N/A",
    applyLink: "/apply-now",
    lastDate: profile.last_date_to_apply || "N/A",
  }));
  console.log("AcademicTable:", AcademicTable);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const AcademicData = AcademicTable.slice(startIndex, endIndex);

  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject.getTime())) {
      return "";
    }
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };
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
                  <td>{data.category}</td>
                  <td>{data.department}</td>
                  <td>
                    <button type="button" className="apn-btn">
                      <a href={data.applyLink}>APPLY NOW</a>
                    </button>
                  </td>
                  <td>{formatDateForInput(data.lastDate)}</td>
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
