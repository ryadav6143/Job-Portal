import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"; // Importing required components from Material-UI
import candidatesApiService from "../../../../candidateService";
function AddAttendForm({ handleCloseAttendClick,fetchData }) {
    const [formData, setFormData] = useState({
        attend_date_from: "",
        attend_date_to: "",
        name_of_course: "",
        sponsered_by: ""
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
        <Dialog open={true}>
            <DialogTitle>Add Attendd Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>


                    <label>Attend Date From</label>
                    <input
                        label="Attend Date From"
                        type="date"
                        name="attend_date_from"
                        value={formData.attend_date_from}
                        onChange={handleChange}
                        fullWidth
                    />
                    <label>Attend Date To</label>
                    <input
                        label="Attend Date To"
                        type="date"
                        name="attend_date_to"
                        value={formData.attend_date_to}
                        onChange={handleChange}
                        fullWidth
                    />
                    <label>Name of Course</label>
                    <input
                        label="Name of Course"
                        type="text"
                        name="name_of_course"
                        value={formData.name_of_course}
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
