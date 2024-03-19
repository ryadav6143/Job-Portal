import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, input } from "@mui/material";
// import close from "../../../assets/logos/close.png";
import close from "../../../../../assets/logos/close.png"
import candidatesApiService from "../../../../candidateService";
function EditOtherInfoForm({ filteredItem, handleClose,fetchData }) {
    const [formData, setFormData] = useState({
         member_of_institute_name: "",
    membership_date_from: "",
    membership_date_to: "",
    position_held: "",
    contribution: "",
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                member_of_institute_name: filteredItem.member_of_institute_name || "",
                membership_date_from: filteredItem.membership_date_from || "",
                membership_date_to: filteredItem.membership_date_to || "",
                position_held: filteredItem.position_held || "",
                contribution: filteredItem.contribution || "",
              
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
            [fieldName]: value
        }));
        setUpdateField((prevUpdateField) => ({
            ...prevUpdateField,
            [fieldName]: value.toString()
        }));       
        
        console.log(`Field '${fieldName}' updated to:`, value);
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {

            const updatedFormData = {
                ...updateField,
                member_id: filteredItem.id
            };

            await candidatesApiService.updateOtherInfoForm(updatedFormData);
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
            <DialogTitle>Edit Other Information Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
                    <input
                        label="Member Of Institute Name"
                        type="text"
                        name="member_of_institute_name"
                        value={formData.member_of_institute_name}                        
                        onChange={(e) =>
                            handleChange("member_of_institute_name",e.target.value)}
                        fullWidth
                    />
                    <input
                        label="Membership Date From"
                        type="date"
                        name="membership_date_from"
                        value={formatDateForInput(formData.membership_date_from)}
                        onChange={(e) =>
                            handleChange("membership_date_from",e.target.value)}
                        fullWidth
                    />
                    <input
                        label="Membership Date To"
                        type="date"
                        name="membership_date_to"
                        value={formatDateForInput(formData.membership_date_to)}
                           onChange={(e) =>
                            handleChange("membership_date_to",e.target.value)}
                        fullWidth
                    />
                   <input
                        label="Position Held"
                        type="text"
                        name="position_held"
                        value={formData.position_held}
                           onChange={(e) =>
                            handleChange("position_held",e.target.value)}
                        fullWidth
                    />
                    <input
                        label="contribution"
                        type="text"
                        name="contribution"
                        value={formData.contribution}
                           onChange={(e) =>
                            handleChange("contribution",e.target.value)}
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

export default EditOtherInfoForm;
