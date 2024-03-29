import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddCandidateCopyrights({ handleClosecopyrightsClick,fetchData,setNotificationOpen,setNotificationMessage,setNotificationSeverity }) {
    const [formData, setFormData] = useState({
        copyright_applicationid: "",
        copyright_title: "",
        copyright_year: "",
        copyright_granted_by: "",
        copyright_incountry: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
          try {
              const response = await candidatesApiService.addCandidateCopyright(formData);
              console.log(response.data); 
              if (response) {
                setNotificationMessage(`added successfully`);
                setNotificationSeverity("success");
                setNotificationOpen(true);
                handleClosecopyrightsClick();
                fetchData();
              }
         

            } catch (error) {
              console.error(`Error submitting data: ${error.message}`);

            }
    };

    return (
        <Dialog open={true} PaperProps={{ style: { width: "100%" } }}>
            <DialogTitle className="HS-heading">Add Copyrights Form</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Application ID</label>
                            <input
                                className="set-input"
                                label="copyright_applicationid"
                                type="text"
                                name="copyright_applicationid"
                                value={formData.copyright_applicationid}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Title</label>
                            <input
                                className="set-input"
                                label="copyright_title"
                                type="text"
                                name="copyright_title"
                                value={formData.copyright_title}
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
                                label="copyright_year"
                                type="text"
                                name="copyright_year"
                                value={formData.copyright_year}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="SetLabel-Name">Published/Granted</label>
                            <input
                                className="set-input"
                                label="copyright_granted_by"
                                type="text"
                                name="copyright_granted_by"
                                value={formData.copyright_granted_by}
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
                                label="copyright_incountry"
                                type="text"
                                name="copyright_incountry"
                                value={formData.copyright_incountry}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>                      
                    </div>
                  

                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button onClick={handleClosecopyrightsClick}>Cancle</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}   

export default AddCandidateCopyrights;
