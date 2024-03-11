import React from "react";
import { Route } from "react-router-dom";
import CandidateAuthGaurd from "../gaurd/CandidateAuthGaurd";
import CandidatePanel from "../candidate_pages/CandidateLogin/CandidatePanel";
import CandidateDashboard from "../candidate_pages/CandidateLogin/CandidateDashboard/CandidateDashboard"
// import  {ApiDataProvider}  from "../candidate_pages/CandidateLogin/ApiDataContext";
import {ApiDataProvider} from "../context/CandidateContext.js"
import EditPersonalDetails from "../candidate_pages/CandidateLogin/CandidateChildPages/EditPersonalDetails/EditPersonalDetails";

import EditProgramsForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditProgramsForm/EditProgramsForm";
import EditQualificationForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditQualificationForm/EditQualificationForm.jsx";
import EditExperience from "../candidate_pages/CandidateLogin/CandidateChildPages/EditExperienceForm/EditExperience.jsx";
import EditResearchForm from "../candidate_pages/CandidateLogin/CandidateChildPages/EditResearchForm/EditResearchForm.jsx";
import EditReference from "../candidate_pages/CandidateLogin/CandidateChildPages/EditReference/EditReference.jsx";
console.log("inside Candidate-Auth Routes")
const CandidateAuthRoutes = [
  
    <Route path="candidate-dashboard" element={<CandidateAuthGaurd component ={<CandidateDashboard />} />} >
        <Route path="personal-details" element={<ApiDataProvider component ={<EditPersonalDetails />} />} />
        <Route path="personal-programs" element={<CandidateAuthGaurd component ={<EditProgramsForm />} />} />
        <Route path="personal-qualification" element={<CandidateAuthGaurd component ={<EditQualificationForm />} />} />
        <Route path="personal-experience" element={<CandidateAuthGaurd component ={<EditExperience />} />} />
        <Route path="personal-research" element={<CandidateAuthGaurd component ={<EditResearchForm />} />} />
        <Route path="personal-reference" element={<CandidateAuthGaurd component ={<EditReference />} />} />

        
    </Route>

]

export default CandidateAuthRoutes;