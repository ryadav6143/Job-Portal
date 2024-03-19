import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"; // Importing required components from Material-UI

function AddOrganisedForm({ handleCloseOrganizedClick }) {
  const [formData, setFormData] = useState({
    name_of_course: "",
    name_of_industry: "",
    name_of_institute: "",
    organise_date_from: "",
    organise_date_to: "",
    participants_number: "",
    sponsered_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
      <DialogTitle className="HS-heading">Add Organised Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
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
              <label className="SetLabel-Name">Name of Industry</label>
              <input
              className="set-input"
                label="Name of Industry"
                type="text"
                name="name_of_industry"
                value={formData.name_of_industry}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Name of Institute</label>
              <input
              className="set-input"
                label="Name of Institute"
                type="text"
                name="name_of_institute"
                value={formData.name_of_institute}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Organise Date From</label>
              <input
              className="set-input"
                label="Organise Date From"
                type="date"
                name="organise_date_from"
                value={formData.organise_date_from}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Organise Date To</label>
              <input
              className="set-input"
                label="Organise Date To"
                type="date"
                name="organise_date_to"
                value={formData.organise_date_to}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Participants Number</label>
              <input
              className="set-input"
                label="Participants Number"
                type="text"
                name="participants_number"
                value={formData.participants_number}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <div className="row">
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
            <Button onClick={handleCloseOrganizedClick}>Cancle</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrganisedForm;
