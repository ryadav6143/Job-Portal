import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import candidatesApiService from "../../../../candidateService";

function EditCandidateResearchForm({ filteredItem, handleClose }) {
    const [formData, setFormData] = useState({
        orcid: "",
        scopusid: "",
        researchid: "",
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                orcid: filteredItem.orcid || "",                                 
                scopusid: filteredItem.scopusid || "",
                researchid: filteredItem.researchid || "",
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
            <DialogTitle className="HS-heading">Edit Research Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
              
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Orcid Id</label>
                        <input className="set-input"
                        label="orcid"
                        type="text"
                        name="orcid"
                        value={formData.orcid}                        
                        onChange={(e) =>
                            handleChange("orcid",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Scopus Id</label>
                        <input className="set-input"
                        label="scopusid"
                        type="text"
                        name="scopusid"
                        value={formData.scopusid}
                        onChange={(e) =>
                            handleChange("scopusid",e.target.value)}
                        fullWidth
                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">Research Id</label>
                        <input className="set-input"
                        label="researchid"
                        type="text"
                        name="orcid"
                        value={formData.researchid}                        
                        onChange={(e) =>
                            handleChange("researchid",e.target.value)}
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

export default EditCandidateResearchForm;
