import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import candidatesApiService from "../../../../candidateService";

function EditAttendForm({ filteredItem, handleClose,fetchData }) {
    const [formData, setFormData] = useState({
        attend_date_from:"",
        attend_date_to:"",
        name_of_course: "",      
        sponsered_by: ""
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                name_of_course: filteredItem.name_of_course || "",              
                attend_date_from: filteredItem.attend_date_from || "",
                attend_date_to: filteredItem.attend_date_to || "",               
                sponsered_by: filteredItem.sponsered_by || ""
            });
        }
    }, [filteredItem]);




    const handleChange = (fieldName, value, index) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value
        }));
        setUpdateField((prevUpdateField) => ({
            ...prevUpdateField,
            [fieldName]: value.toString()
        }));
        
        // Console mein changes dikhaane ke liye
        console.log(`Field '${fieldName}' updated to:`, value);
    };
    

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {

            const updatedFormData = {
                ...updateField,
                attend_id: filteredItem.id
            };

            await candidatesApiService.updateAttendForm(updatedFormData);
            fetchData();
            handleClose();
        } catch (error) {
            console.error("Error updating data:", error);

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
        <Dialog open={true} >
            <DialogTitle>Edit Attendd Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
                <input
                        label="Attend Date From"
                        type="date"
                        name="attend_date_from"
                        value={formatDateForInput(formData.attend_date_from)}
                           onChange={(e) =>
                            handleChange("attend_date_from",e.target.value)}
                        fullWidth
                    />
                      <input
                        label="Attend Date To"
                        type="date"
                        name="attend_date_to"
                        value={formatDateForInput(formData.attend_date_to)}
                           onChange={(e) =>
                            handleChange("attend_date_to",e.target.value)}
                        fullWidth
                    />
                    <input
                        label="Name of Course"
                        type="text"
                        name="name_of_course"
                        value={formData.name_of_course}                        
                        onChange={(e) =>
                            handleChange("name_of_course",e.target.value)}
                        fullWidth
                    />                
                
                    <input
                        label="Sponsored By"
                        type="text"
                        name="sponsered_by"
                        value={formData.sponsered_by}
                        onChange={(e) =>
                            handleChange("sponsered_by",e.target.value)}
                        fullWidth
                    />
                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit">
                            Update
                        </Button>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditAttendForm;
