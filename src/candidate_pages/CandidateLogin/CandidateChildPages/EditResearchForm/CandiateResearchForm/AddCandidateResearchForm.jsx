import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"; // Importing required components from Material-UI

import candidatesApiService from "../../../../candidateService";

function AddCandidateResearchForm({ handleCloseResearchClick }) {
  const [formData, setFormData] = useState({
    orcid: "",
    scopusid: "",
    researchid: "",
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
      <DialogTitle className="HS-heading">Add Research Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Orcid Id</label>
              <input
              className="set-input"
                label="Orcid Id"
                type="text"
                name="orcid"
                value={formData.orcid}
                onChange={handleChange}
                fullWidth
              />
            </div>

            <div className="col-md-6">
              <label className="SetLabel-Name">Scopus Id</label>
              <input
              className="set-input"
                label="Scopus Id"
                type="text"
                name="scopusid"
                value={formData.scopusid}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="SetLabel-Name">Research Id</label>
              <input
              className="set-input"
                label="Research Id"
                type="text"
                name="researchid"
                value={formData.researchid}
                onChange={handleChange}
                fullWidth
              />
            </div>
         
          </div>

 

          <DialogActions>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={handleCloseResearchClick}>Cancle</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddCandidateResearchForm;
