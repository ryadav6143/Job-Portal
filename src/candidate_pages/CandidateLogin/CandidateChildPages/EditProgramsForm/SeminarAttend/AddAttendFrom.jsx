import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"; // Importing required components from Material-UI
import candidatesApiService from "../../../../candidateService";
function AddAttendForm({ handleCloseAttendClick, fetchData }) {
  const [formData, setFormData] = useState({
    attend_date_from: "",
    attend_date_to: "",
    name_of_course: "",
    sponsered_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await candidatesApiService.addCandidateAttend(formData);
      console.log(response.data);

      handleCloseAttendClick();
      fetchData();
    } catch (error) {
      console.error(`Error submitting data: ${error.message}`);
    }
  };

  return (
    <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
      <DialogTitle className="HS-heading">Add Attendd Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Attend Date From</label>
              <input
                className="set-input"
                label="Attend Date From"
                type="date"
                name="attend_date_from"
                value={formData.attend_date_from}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Attend Date To</label>
              <input
                className="set-input"
                label="Attend Date To"
                type="date"
                name="attend_date_to"
                value={formData.attend_date_to}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Name of Course</label>
              <input
                className="set-input"
                label="Name of Course"
                type="text"
                name="name_of_course"
                value={formData.name_of_course}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Sponsored By</label>
              <input
                className="set-input"
                label="Sponsored By"
                type="text"
                name="sponsered_by"
                value={formData.sponsered_by}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button onClick={handleCloseAttendClick}>Close</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddAttendForm;
