import React from "react";
import { Route } from "react-router-dom";
import CandidateAuthGaurd from "../gaurd/CandidateAuthGaurd";
import CandidatePanel from "../candidate_pages/CandidateLogin/CandidatePanel";

console.log("inside Candidate-Auth Routes")
const CandidateAuthRoutes = [
    // <Route exact path="/" element={<UnAuthGuards component ={<Home/>} />}></Route>,
    <Route path="user-login" element={<CandidateAuthGaurd component ={<CandidatePanel />} />} ></Route>

]

export default CandidateAuthRoutes;