import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"; // Importing required components from Material-UI
import candidatesApiService from "../../../../candidateService";

function AddOtherInfoForm({ handleCloseOtherInfoClick, fetchData }) {
  const [formData, setFormData] = useState({
    member_of_institute_name: "",
    membership_date_from: "",
    membership_date_to: "",
    position_held: "",
    contribution: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (!value.trim()) {
        validationErrors[key] = "This field is required";
      } else if (key === "membership_date_from" && !isValidDate(value)) {
        validationErrors[key] = "Please enter a valid date (YYYY-MM-DD)";
      } else if (key === "membership_date_to" && !isValidDate(value)) {
        validationErrors[key] = "Please enter a valid date (YYYY-MM-DD)";
      }
    });

    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      return; // Don't proceed with submission if there are validation errors
    }

    try {
      const response = await candidatesApiService.addCandidateOtherinfo(
        formData
      );
      console.log(response.data);

      handleCloseOtherInfoClick();
      fetchData();
    } catch (error) {
      console.error(`Error submitting data: ${error.message}`);
    }
  };

  const isValidDate = (dateString) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  };
  return (
    <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
      <DialogTitle className="HS-heading">
        Add Other Information Form
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Member Of Institute Name</label>
              <input
                className="set-input"
                label="Member Of Institute Name"
                type="text"
                name="member_of_institute_name"
                value={formData.member_of_institute_name}
                onChange={handleChange}
                fullWidth
              />
              {errors.member_of_institute_name && (
                <span className="error">{errors.member_of_institute_name}</span>
              )}
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Membership Date From</label>
              <input
                className="set-input"
                label="Membership Date From"
                type="date"
                name="membership_date_from"
                value={formData.membership_date_from}
                onChange={handleChange}
                fullWidth
              /> 
               {errors.membership_date_from && (
                <span className="error">{errors.membership_date_from}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Membership Date To</label>
              <input
                className="set-input"
                label="Membership Date To"
                type="date"
                name="membership_date_to"
                value={formData.membership_date_to}
                onChange={handleChange}
                fullWidth
              /> 
               {errors.membership_date_to && (
                <span className="error">{errors.membership_date_to}</span>
              )}
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Position Held</label>
              <input
                className="set-input"
                label="Position Held"
                type="text"
                name="position_held"
                value={formData.position_held}
                onChange={handleChange}
                fullWidth
              />
               {errors.position_held && (
                <span className="error">{errors.position_held}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Contribution</label>
              <input
                className="set-input"
                label="Contribution"
                type="text"
                name="contribution"
                value={formData.contribution}
                onChange={handleChange}
                fullWidth
              />
               {errors.contribution && (
                <span className="error">{errors.contribution}</span>
              )}
            </div>
          </div>

          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button onClick={handleCloseOtherInfoClick}>Cancle</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddOtherInfoForm;
