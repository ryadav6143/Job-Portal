import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./MasterCurrentOpening.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import adminApiService from "../../../../adminApiService";
import EditOpenings from "../EditOpeningForm/EditOpenings";
import updatebtn from "../../../../../assets/logos/update.png"
import deletebtn from "../../../../../assets/logos/delete.png";


function MasterTable() {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
  const [jobProfiles, setJobProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  useEffect(() => {
    const fetchJobProfiles = async () => {
      try {
        const response = await adminApiService.getJobProfile();
        console.log("response get", response.data);
        setJobProfiles(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching job profiles:", error);
        setLoading(false);
      }
    };

    fetchJobProfiles();
  }, []);

  const handleNavigation = () => {
    if (isAdminLoggedIn) {
      navigate("/add-openings");
    } else {
      alert("Admin not logged in. Redirect to login.");
    }
  };

  const handleEditForm = (profileId) => {
    // console.log("Job Profile ID:", profileId);
    // navigate(`/edit-openings/${profileId}`); // Include the profileId in the URL
    setIsEditFormOpen(true);
    setSelectedProfileId(profileId);
  };

  const handleDelete = async (profileId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this job profile?"
      );
      if (confirmDelete) {
        await adminApiService.deleteJobProfileById(profileId);

        setJobProfiles(
          jobProfiles.filter((profile) => profile.id !== profileId)
        );
        alert("Job profile deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting job profile:", error);
      alert("Failed to delete job profile. Please try again later.");
    }
  };

  //-----------------------------------Adding Table-------------------------------
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const MasterTable = jobProfiles.map((profile) => ({
    id: profile.id,
    category: profile.job_category_master?.category_name || "N/A",
    department: profile.department_master?.dept_name || "N/A",
    applyLink: "/apply-now",
    lastDate: profile.last_date_to_apply || "N/A",
    isActive: profile.is_active ? "Yes" : "No",
    listToCurrentOpening: profile.publish_to_vacancy ? "Yes" : "No",
    listToInterviewSchedule: profile.publish_to_schedule_interview
      ? "Yes"
      : "No",
  }));
  // console.log("MasterTable:", MasterTable);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  // Debugging line to check MasterTable array

  const MasterData = MasterTable.slice(startIndex, endIndex);

  const [masterTable, setMasterTable] = useState([...MasterTable]);
  // const handleDelete = (index) => {
  //   const updatedMasterTable = [...masterTable];
  //   updatedMasterTable.splice((page - 1) * rowsPerPage + index, 1);
  //   setMasterTable(updatedMasterTable);
  // };

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
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {!isEditFormOpen && (
        <div className="master-table ">
          <p className="table-heading">Current Openings</p>
          <div className="">
            <div className="row">
              <label>Non-Active:</label>
              <div >
                <input
                  className="set-input"
                  type="number"
                  placeholder="non-Active count"
                  name=""
                  id=""
                ></input>
              </div>

              <div >
              <label>schedule for interview:</label>
                <input
                  className="set-input"
                  type="number"
                  placeholder="schedule for interview count"
                  name=""
                  id=""
                ></input>
              </div>
            </div>

            <table className="table table-responsive">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }}>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Department</th>
                  <th scope="col">Last Date</th>
                  <th scope="col">isActive</th>
                  <th scope="col">List to Current Opening</th>
                  <th scope="col">List to Interview Schedule</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {MasterData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.category}</td>
                    <td>{data.department}</td>
                    <td>{formatDateForInput(data.lastDate)}</td>
                    <td>{data.isActive}</td>
                    <td>{data.listToCurrentOpening}</td>
                    <td>{data.listToInterviewSchedule}</td>
                    <td>
                      <button
                        type="button"
                       
                        id="table-btns"
                        onClick={() => handleEditForm(data.id)}
                      >
                        
                        <a> <img className="up-del-btn" src={updatebtn}  alt="" /></a>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        id="table-btns"
                        onClick={() => handleDelete(data.id)}
                      >
                    <img className="up-del-btn" src={deletebtn}  alt="" />
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
      )}
      {isEditFormOpen && (
        <div className="edit-form-container">
          <EditOpenings profileId={selectedProfileId} />
        </div>
      )}
    </>
  );
}

export default MasterTable;
