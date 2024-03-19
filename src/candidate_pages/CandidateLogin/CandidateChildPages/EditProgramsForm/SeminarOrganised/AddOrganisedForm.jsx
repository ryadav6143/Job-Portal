import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddOrganisedForm({ handleCloseOrganizedClick,fetchData }) {
  const [formData, setFormData] = useState({
    name_of_course: "",
    name_of_industry: "",
    name_of_institute: "",
    organise_date_from: "",
    organise_date_to: "",
    participants_number: "",
    sponsered_by: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
      const response = await candidatesApiService.addCandidateOrganised(formData);
      console.log(response.data); 

      handleCloseOrganizedClick();
      fetchData();

    } catch (error) {
      console.error(`Error submitting data: ${error.message}`);
    
    }
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Add Organised Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <label>Name of Course</label>
          <input
            label="Name of Course"
            type="text"
            name="name_of_course"
            value={formData.name_of_course}
            onChange={handleChange}
            fullWidth
          />
           <label>Name of Industry</label>
          <input
            label="Name of Industry"
            type="text"
            name="name_of_industry"
            value={formData.name_of_industry}
            onChange={handleChange}
            fullWidth
          />
           <label>Name of Institute</label>
          <input
            label="Name of Institute"
            type="text"
            name="name_of_institute"
            value={formData.name_of_institute}
            onChange={handleChange}
            fullWidth
          />
            <label>Organise Date From</label>
          <input
            label="Organise Date From"
            type="date"
            name="organise_date_from"
            value={formData.organise_date_from}
            onChange={handleChange}
            fullWidth
          />
           <label>Organise Date To</label>
          <input
            label="Organise Date To"
            type="date"
            name="organise_date_to"
            value={formData.organise_date_to}
            onChange={handleChange}
            fullWidth
          />
          <label>Participants Number</label>
          <input
            label="Participants Number"
            type="text"
            name="participants_number"
            value={formData.participants_number}
            onChange={handleChange}
            fullWidth
          />
           <label>Sponsored By</label>
          <input
            label="Sponsored By"
            type="text"
            name="sponsered_by"
            value={formData.sponsered_by}
            onChange={handleChange}
            fullWidth
          />
          <DialogActions>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={handleCloseOrganizedClick}>Close</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrganisedForm;
