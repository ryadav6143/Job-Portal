import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import candidatesApiService from "../../../../candidateService";

function EditCandidatePatentsForm({ filteredItem, handleClose }) {
    const [formData, setFormData] = useState({
        patent_applicationid: "",
        patent_application_title: "",
        patent_application_year: "",
        patent_granted_by: "",
        patent_incountry: "",
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                patent_applicationid: filteredItem.patent_applicationid || "",                                 
                patent_application_title: filteredItem.patent_application_title || "",
                patent_application_year: filteredItem.patent_application_year || "",
                patent_granted_by: filteredItem.patent_granted_by || "",
                patent_incountry: filteredItem.patent_incountry || "",
            
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
        // try {

        //     const updatedFormData = {
        //         ...updateField,
        //         attend_id: filteredItem.id
        //     };

        //     await candidatesApiService.updateAttendForm(updatedFormData);
        //     fetchData();
        //     handleClose();
        // } catch (error) {
        //     console.error("Error updating data:", error);

        // }
    };


    return (
        <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
            <DialogTitle className="HS-heading">Edit Patents Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
              
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">patent_applicationid</label>
                        <input className="set-input"
                        label="patent_applicationid"
                        type="text"
                        name="patent_applicationid"
                        value={formData.patent_applicationid}                        
                        onChange={(e) =>
                            handleChange("patent_applicationid",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">patent_application_title</label>
                        <input className="set-input"
                        label="patent_application_title"
                        type="text"
                        name="patent_application_title"
                        value={formData.patent_application_title}
                        onChange={(e) =>
                            handleChange("patent_application_title",e.target.value)}
                        fullWidth
                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">patent_application_year</label>
                        <input className="set-input"
                        label="patent_application_year"
                        type="text"
                        name="orcid"
                        value={formData.patent_application_year}                        
                        onChange={(e) =>
                            handleChange("patent_application_year",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">patent_granted_by</label>
                        <input className="set-input"
                        label="patent_granted_by"
                        type="text"
                        name="orcid"
                        value={formData.patent_granted_by}                        
                        onChange={(e) =>
                            handleChange("patent_granted_by",e.target.value)}
                        fullWidth
                    />   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">patent_incountry</label>
                        <input className="set-input"
                        label="patent_incountry"
                        type="text"
                        name="orcid"
                        value={formData.patent_incountry}                        
                        onChange={(e) =>
                            handleChange("patent_incountry",e.target.value)}
                        fullWidth
                    />   
                        </div>
                     
                    </div>
                                       
                 
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

export default EditCandidatePatentsForm;
