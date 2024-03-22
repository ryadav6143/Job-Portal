import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import candidatesApiService from "../../../../candidateService";

function EditCandidatePatentsForm({ filteredItem, handleClose }) {
    const [formData, setFormData] = useState({
        copyright_applicationid: "",
        copyright_title: "",
        copyright_year: "",
        copyright_granted_by: "",
        copyright_incountry: "",
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                copyright_applicationid: filteredItem.copyright_applicationid || "",                                 
                copyright_title: filteredItem.copyright_title || "",
                copyright_year: filteredItem.copyright_year || "",
                copyright_granted_by: filteredItem.copyright_granted_by || "",
                copyright_incountry: filteredItem.copyright_incountry || "",
            
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
            <DialogTitle className="HS-heading">Edit Copyrights Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
              
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Application ID</label>
                        <input className="set-input"
                        label="copyright_applicationid"
                        type="text"
                        name="copyright_applicationid"
                        value={formData.copyright_applicationid}                        
                        onChange={(e) =>
                            handleChange("copyright_applicationid",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Title</label>
                        <input className="set-input"
                        label="copyright_title"
                        type="text"
                        name="copyright_title"
                        value={formData.copyright_title}
                        onChange={(e) =>
                            handleChange("copyright_title",e.target.value)}
                        fullWidth
                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Year</label>
                        <input className="set-input"
                        label="copyright_year"
                        type="text"
                        name="orcid"
                        value={formData.copyright_year}                        
                        onChange={(e) =>
                            handleChange("copyright_year",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Published/Granted</label>
                        <input className="set-input"
                        label="copyright_granted_by"
                        type="text"
                        name="orcid"
                        value={formData.copyright_granted_by}                        
                        onChange={(e) =>
                            handleChange("copyright_granted_by",e.target.value)}
                        fullWidth
                    />   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Country</label>
                        <input className="set-input"
                        label="copyright_incountry"
                        type="text"
                        name="orcid"
                        value={formData.copyright_incountry}                        
                        onChange={(e) =>
                            handleChange("copyright_incountry",e.target.value)}
                        fullWidth
                    />   
                        </div>
                     
                    </div>
                                       
                 
                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit">
                            Update
                        </Button>
                        <Button onClick={handleClose}>
                        Cancle
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditCandidatePatentsForm;
