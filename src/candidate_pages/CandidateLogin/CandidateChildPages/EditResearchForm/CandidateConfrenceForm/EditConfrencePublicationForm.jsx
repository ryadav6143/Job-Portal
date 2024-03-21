import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import candidatesApiService from "../../../../candidateService";

function EditConfrencePublicationForm({ filteredItem, handleClose }) {
    const [formData, setFormData] = useState({
        conference_publication_year: "",
        conference_publication_title: "",
        conference_publication_author: "",
        conference_publication_index: "",
        conference_publication_name: "",
        conference_publication_issn: "",
        conference_publication_volume: "",
        conference_publication_issue: "",
    });
    const [updateField, setUpdateField] = useState({});

    useEffect(() => {
        if (filteredItem) {
            setFormData({
                conference_publication_year: filteredItem.conference_publication_year || "",                                 
                conference_publication_title: filteredItem.conference_publication_title || "",
                conference_publication_author: filteredItem.conference_publication_author || "",
                conference_publication_index: filteredItem.conference_publication_index || "",
                conference_publication_name: filteredItem.conference_publication_name || "",
                conference_publication_issn: filteredItem.conference_publication_issn || "",
                conference_publication_volume: filteredItem.conference_publication_volume || "",
                conference_publication_issue: filteredItem.conference_publication_issue || "",
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
            <DialogTitle className="HS-heading">Edit Confrence Publication Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
              
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_year</label>
                        <input className="set-input"
                        label="conference_publication_year"
                        type="text"
                        name="conference_publication_year"
                        value={formData.conference_publication_year}                        
                        onChange={(e) =>
                            handleChange("conference_publication_year",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_title</label>
                        <input className="set-input"
                        label="conference_publication_title"
                        type="text"
                        name="conference_publication_title"
                        value={formData.conference_publication_title}
                        onChange={(e) =>
                            handleChange("conference_publication_title",e.target.value)}
                        fullWidth
                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_author</label>
                        <input className="set-input"
                        label="conference_publication_author"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_author}                        
                        onChange={(e) =>
                            handleChange("conference_publication_author",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_index</label>
                        <input className="set-input"
                        label="conference_publication_index"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_index}                        
                        onChange={(e) =>
                            handleChange("conference_publication_index",e.target.value)}
                        fullWidth
                    />   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_name</label>
                        <input className="set-input"
                        label="conference_publication_name"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_name}                        
                        onChange={(e) =>
                            handleChange("conference_publication_name",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_issn</label>
                        <input className="set-input"
                        label="conference_publication_issn"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_issn}                        
                        onChange={(e) =>
                            handleChange("conference_publication_issn",e.target.value)}
                        fullWidth
                    />   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_volume</label>
                        <input className="set-input"
                        label="conference_publication_volume"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_volume}                        
                        onChange={(e) =>
                            handleChange("conference_publication_volume",e.target.value)}
                        fullWidth
                    />   
                        </div>
                        <div className="col-md-6">
                        <label className="SetLabel-Name">conference_publication_issue</label>
                        <input className="set-input"
                        label="conference_publication_issue"
                        type="text"
                        name="orcid"
                        value={formData.conference_publication_issue}                        
                        onChange={(e) =>
                            handleChange("conference_publication_issue",e.target.value)}
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

export default EditConfrencePublicationForm;
