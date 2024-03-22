import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddCandidateConfrenceForm({ handleCloseConfrenceClick }) {
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
            <DialogTitle className="HS-heading">Add Confrence Publications Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Year</label>
                            <input
                                className="set-input"
                                label="conference_publication_year"
                                type="text"
                                name="conference_publication_year"
                                value={formData.conference_publication_year}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Title</label>
                            <input
                                className="set-input"
                                label="conference_publication_title"
                                type="text"
                                name="conference_publication_title"
                                value={formData.conference_publication_title}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Author Role/ Inventor</label>
                            <input
                                className="set-input"
                                label="conference_publication_author"
                                type="text"
                                name="conference_publication_author"
                                value={formData.conference_publication_author}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Indexing</label>
                            <input
                                className="set-input"
                                label="conference_publication_index"
                                type="text"
                                name="conference_publication_index"
                                value={formData.conference_publication_index}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Journal Name</label>
                            <input
                                className="set-input"
                                label="conference_publication_name"
                                type="text"
                                name="conference_publication_name"
                                value={formData.conference_publication_name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">ISSN</label>
                            <input
                                className="set-input"
                                label="conference_publication_issn"
                                type="text"
                                name="conference_publication_issn"
                                value={formData.conference_publication_issn}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Volume</label>
                            <input
                                className="set-input"
                                label="conference_publication_volume"
                                type="text"
                                name="conference_publication_volume"
                                value={formData.conference_publication_volume}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Issue</label>
                            <input
                                className="set-input"
                                label="conference_publication_issue"
                                type="text"
                                name="conference_publication_issue"
                                value={formData.conference_publication_issue}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                    </div>



                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button onClick={handleCloseConfrenceClick}>Cancle</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddCandidateConfrenceForm;
