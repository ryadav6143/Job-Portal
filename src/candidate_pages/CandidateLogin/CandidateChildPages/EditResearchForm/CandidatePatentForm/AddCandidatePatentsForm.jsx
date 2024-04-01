import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddCandidatePatentsForm({ handleClosePatentClick }) {
    const [formData, setFormData] = useState({
        patent_applicationid: "",
        patent_application_title: "",
        patent_application_year: "",
        patent_granted_by: "",
        patent_incountry: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        //   try {
        //       const response = await candidatesApiService.addCandidateOrganised(formData);
        //       console.log(response.data); 

        //       handleCloseOrganizedClick();
        //       fetchData();

        //     } catch (error) {
        //       console.error(`Error submitting data: ${error.message}`);

        //     }
    };

    return (
        <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
            <DialogTitle className="HS-heading">Add Patents Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Application ID</label>
                            <input
                                className="set-input"
                                label="patent_applicationid"
                                type="text"
                                name="patent_applicationid"
                                value={formData.patent_applicationid}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Title</label>
                            <input
                                className="set-input"
                                label="patent_application_title"
                                type="text"
                                name="patent_application_title"
                                value={formData.patent_application_title}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Year</label>
                            <input
                                className="set-input"
                                label="patent_application_year"
                                type="text"
                                name="patent_application_year"
                                value={formData.patent_application_year}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Published/Granted</label>
                            <input
                                className="set-input"
                                label="patent_granted_by"
                                type="text"
                                name="patent_granted_by"
                                value={formData.patent_granted_by}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Country</label>
                            <input
                                className="set-input"
                                label="patent_incountry"
                                type="text"
                                name="patent_incountry"
                                value={formData.patent_incountry}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>                      
                    </div>
                  



                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button onClick={handleClosePatentClick}>Cancle</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddCandidatePatentsForm;