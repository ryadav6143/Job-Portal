import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import adminApiService from "../../../../adminApiService";
import updatebtn from "../../../../../assets/logos/update.png";
import deletebtn from "../../../../../assets/logos/delete.png";

function MasterTable() {
  // const navigate = useNavigate();
  // const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
  const [counts, setCounts] = useState("");
  const [jobProfiles, setJobProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditFormOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [profileIdToDelete, setProfileIdToDelete] = useState(null);
  // const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApiService.getAllInterview(
          currentPage,
          itemsPerPage
        );
        // console.log(response, "<<<<<<<check data")
        setJobProfiles(response.jobprofileData);
        setCounts(response);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  // useEffect(() => {
  //   const fetchJobProfiles = async () => {
  //     try {
  //       const response = await adminApiService.getJobProfile();
  //       console.log("response get", response.data);
  //       setJobProfiles(response.data);

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching job profiles:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobProfiles();
  // }, []);

  // const handleNavigation = () => {
  //   if (isAdminLoggedIn) {
  //     navigate("/add-openings");
  //   } else {
  //     alert("Admin not logged in. Redirect to login.");
  //   }
  // };

  // const handleEditForm = (profileId) => {
  //   console.log("Job Profile ID:", profileId);
  //   navigate(`/edit-openings/${profileId}`); // Include the profileId in the URL
  //   setIsEditFormOpen(true);
  //   setSelectedProfileId(profileId);
  // };
  const handleDelete = async (profileId) => {
    setProfileIdToDelete(profileId); // Set the profileId to delete
    setDeleteDialogOpen(true); // Open the delete dialog
  };
  const confirmDelete = async () => {
    try {
      await adminApiService.deleteJobProfileById(profileIdToDelete);
      setJobProfiles(
        jobProfiles.filter((profile) => profile.id !== profileIdToDelete)
      );
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error("Error deleting job profile:", error);
      alert("Failed to delete job profile. Please try again later.");
    }
  };
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };
  // const handleDelete = async (profileId) => {
  //   try {
  //     const confirmDelete = window.confirm(
  //       "Are you sure you want to delete this job profile?"
  //     );
  //     if (confirmDelete) {
  //       await adminApiService.deleteJobProfileById(profileId);

  //       setJobProfiles(
  //         jobProfiles.filter((profile) => profile.id !== profileId)
  //       );
  //       alert("Job profile deleted successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting job profile:", error);
  //     alert("Failed to delete job profile. Please try again later.");
  //   }
  // };

  //-----------------------------------Adding Table-------------------------------
  // const [page, setPage] = useState(1);
  // const itemsPerPage = 5;

  // const MasterTable = jobProfiles.map((profile) => ({
  //   id: profile.id,
  //   category: profile.job_category_master?.category_name || "N/A",
  //   department: profile.department_master?.dept_name || "N/A",
  //   applyLink: "/apply-now",
  //   lastDate: profile.last_date_to_apply || "N/A",
  //   isActive: profile.is_active ? "Yes" : "No",
  //   listToCurrentOpening: profile.publish_to_vacancy ? "Yes" : "No",
  //   listToInterviewSchedule: profile.publish_to_schedule_interview
  //     ? "Yes"
  //     : "No",
  // }));
  // console.log("MasterTable:", MasterTable);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // Debugging line to check MasterTable array

  // const MasterData = MasterTable.slice(startIndex, endIndex);

  // const [masterTable, setMasterTable] = useState([...MasterTable]);
  // const handleDelete = (index) => {
  //   const updatedMasterTable = [...masterTable];
  //   updatedMasterTable.splice((page - 1) * itemsPerPage + index, 1);
  //   setMasterTable(updatedMasterTable);
  // };

  // const itemsPerPage = 4;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // const MasterData = jobProfiles
  //   .map((profile) => ({
  //     id: profile.id,
  //     category: profile.job_category_master?.category_name || "N/A",
  //     department: profile.department_master?.dept_name || "N/A",
  //     applyLink: "/apply-now",
  //     lastDate: profile.last_date_to_apply || "N/A",
  //     isActive: profile.is_active ? "Yes" : "No",
  //     listToCurrentOpening: profile.publish_to_vacancy ? "Yes" : "No",
  //     listToInterviewSchedule: profile.publish_to_schedule_interview
  //       ? "Yes"
  //       : "No",
  //   }))
  //   .slice(startIndex, endIndex);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const jobProfilesData = jobProfiles.slice(startIndex, endIndex);

  const isNextPageAvailable = jobProfiles.length === itemsPerPage;
  const nextPage = () => {
    if (isNextPageAvailable) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
  const toggleIsActive = async (jobProfileId, isActive) => {
    try {
      await adminApiService.changeJobProfileIsActive(jobProfileId, isActive);
      // Refresh jobProfiles after updating isActive status
      const updatedJobProfiles = jobProfiles.map((profile) => {
        if (profile.id === jobProfileId) {
          return {
            ...profile,
            is_active: isActive,
          };
        }
        return profile;
      });
      setJobProfiles(updatedJobProfiles);
    } catch (error) {
      console.error("Error toggling isActive status:", error);
    }
  };
  const handleCheckboxChange = async (jobProfileId, isActive) => {
    await toggleIsActive(jobProfileId, isActive);
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
          <p className="SCA-heading" style={{ marginBottom: "15px" }}>
            Current Openings
          </p>
          <div className="row sizeofrow">
            <div className="col-md countbox">
              <label className="labelbox">Total JobTypes Count:</label>
              <input
                className="form-control showcountbox"
                disabled
                value={counts?.TotalJobTypesCount || ""}
              />
            </div>
            <div className="col-md countbox">
              <label className="labelbox">Total Vacancy:</label>
              <input
                className="form-control showcountbox"
                disabled
                value={counts?.TotalVacancy || ""}
              />
            </div>
            <div className="col-md countbox">
              <label className="labelbox">Total Active Vacancy:</label>
              <input
                className="form-control showcountbox"
                disabled
                value={counts?.TotalActiveVacancy || ""}
              />
            </div>
          </div>
          <div className="table-responsive fixe-table">
            <table className="table ">
              <thead style={{ color: "rgba(0, 0, 0, 0.63)" }} className="thead">
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Category</th>
                  <th scope="col">Department</th>
                  <th scope="col">Last Date</th>
                  <th scope="col">isActive</th>
                  <th scope="col">List to Current Opening</th>
                  <th scope="col">List to Interview Schedule</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Is Active</th>
                </tr>
              </thead>
              <tbody>
                {jobProfilesData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <b>{(currentPage - 1) * itemsPerPage + index + 1}</b>
                    </td>
                    <td>{data.job_category_master?.category_name || "N/A"}</td>
                    <td>{data.department_master?.dept_name || "N/A"}</td>
                    <td>
                      {formatDateForInput(data.last_date_to_apply) || "N/A"}
                    </td>
                    <td>{data.is_active ? "Yes" : "No"}</td>
                    <td>{data.publish_to_vacancy ? "Yes" : "No"}</td>
                    <td>{data.publish_to_schedule_interview ? "Yes" : "No"}</td>
                    <td>
                      <button
                        type="button"
                        id="table-btns"
                        // onClick={() => handleEditForm(data.id)}
                      >
                        <Link
                          to={{
                            pathname: `/admin-dashboard/current-openings/edit-openings/${data.id}`,
                            state: { profileId: data.id },
                          }}
                        >
                          {" "}
                          <img className="up-del-btn" src={updatebtn} alt="" />
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        id="table-btns"
                        onClick={() => handleDelete(data.id)}
                      >
                        <img className="up-del-btn" src={deletebtn} alt="" />
                      </button>
                    </td>
                    <td style={{ paddingTop: "18px" }}>
                      <label className="switch">
                        <input
                          type="checkbox"
                          id={`checkbox${index}`}
                          checked={data.is_active} // Set the checkbox state based on isActive status
                          onChange={() =>
                            handleCheckboxChange(data.id, !data.is_active)
                          }
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-4">
                <label>Row:</label>
                <input
                  className="set-row-input "
                  id="specific-input"
                  type="number"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                />
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Pagination>
                  <Pagination.Prev onClick={prevPage} />
                  <Pagination.Item>{currentPage}</Pagination.Item>
                  <Pagination.Next onClick={nextPage} />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Current Opening</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this Current Opening?
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} variant="contained" color="error">
            Delete
          </Button>
          <Button
            onClick={handleCloseDeleteDialog}
            variant="text"
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MasterTable;
