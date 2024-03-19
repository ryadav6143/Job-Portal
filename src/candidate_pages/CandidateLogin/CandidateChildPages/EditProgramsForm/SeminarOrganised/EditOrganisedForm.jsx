import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  input,
} from "@mui/material";
// import close from "../../../assets/logos/close.png";
import close from "../../../../../assets/logos/close.png";
import candidatesApiService from "../../../../candidateService";
function EditOrganisedForm({ filteredItem, handleClose }) {
  const [formData, setFormData] = useState({
    name_of_course: "",
    name_of_industry: "",
    name_of_institute: "",
    organise_date_from: "",
    organise_date_to: "",
    participants_number: "",
    sponsered_by: "",
  });
  const [updateField, setUpdateField] = useState({});

  useEffect(() => {
    if (filteredItem) {
      setFormData({
        name_of_course: filteredItem.name_of_course || "",
        name_of_industry: filteredItem.name_of_industry || "",
        name_of_institute: filteredItem.name_of_institute || "",
        organise_date_from: filteredItem.organise_date_from || "",
        organise_date_to: filteredItem.organise_date_to || "",
        participants_number: filteredItem.participants_number || "",
        sponsered_by: filteredItem.sponsered_by || "",
      });
    }
  }, [filteredItem]);

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //     setUpdateField((prev) => ({ ...prev, [fieldName]: value.toString() }));
  // };

  const handleChange = (fieldName, value, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
    setUpdateField((prevUpdateField) => ({
      ...prevUpdateField,
      [fieldName]: value.toString(),
    }));

    // Console mein changes dikhaane ke liye
    console.log(`Field '${fieldName}' updated to:`, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Modify formData to include seminar_organised as an array
      const updatedFormData = {
        seminar_organised: [formData], // Put formData inside an array
      };

      // Make a PUT request to update the data with updatedFormData
      await candidatesApiService.updateOrganisedForm(updatedFormData);

      handleClose(); // Close the dialog upon successful update
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle error here (e.g., show error message to the user)
    }
  };

  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);

    // Check if dateString is empty or dateObject is invalid
    if (!dateString || isNaN(dateObject.getTime())) {
      return ""; // Return an empty string for invalid or empty dates
    }

    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    return `${year}-${month}-${day}`;
  };
  return (
    <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
      <DialogTitle className="HS-heading">Edit Organised Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Name of Course</label>
              <input  className="set-input"
                label="Name of Course"
                type="text"
                name="name_of_course"
                value={formData.name_of_course}
                onChange={(e) => handleChange("name_of_course", e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Name of Industry</label>
              <input  className="set-input"
                label="Name of Industry"
                type="text"
                name="name_of_industry"
                value={formData.name_of_industry}
                onChange={(e) =>
                  handleChange("name_of_industry", e.target.value)
                }
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Name of Institute</label>
              <input  className="set-input"
                label="Name of Institute"
                type="text"
                name="name_of_institute"
                value={formData.name_of_institute}
                onChange={(e) =>
                  handleChange("name_of_institute", e.target.value)
                }
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <label className="SetLabel-Name">Organise Date From</label>
              <input  className="set-input"
                label="Organise Date From"
                type="date"
                name="organise_date_from"
                value={formatDateForInput(formData.organise_date_from)}
                onChange={(e) =>
                  handleChange("organise_date_from", e.target.value)
                }
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Organise Date To</label>
              <input  className="set-input"
                label="Organise Date To"
                type="date"
                name="organise_date_to"
                value={formatDateForInput(formData.organise_date_to)}
                onChange={(e) =>
                  handleChange("organise_date_to", e.target.value)
                }
                fullWidth
              />
            </div>

            <div className="col-md-6">
              <label className="SetLabel-Name">Participants Number</label>
              <input  className="set-input"
                label="Participants Number"
                type="text"
                name="participants_number"
                value={formData.participants_number}
                onChange={(e) =>
                  handleChange("participants_number", e.target.value)
                }
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Sponsored By</label>
              <input className="set-input"
                label="Sponsored By"
                type="text"
                name="sponsered_by"
                value={formData.sponsered_by}
                onChange={(e) => handleChange("sponsered_by", e.target.value)}
                fullWidth
              />
            </div>
          </div>

          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
            <Button onClick={handleClose}>Cancle</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditOrganisedForm;
