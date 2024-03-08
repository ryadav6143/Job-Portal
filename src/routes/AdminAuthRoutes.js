import React from "react";
import { Route } from "react-router-dom";
import AdminAuthGaurd from "../gaurd/AdminAuthGaurd";
import Adminpanel from "../admin_pages/AdminLogin/Adminpanel";

console.log("inside Candidate-Auth Routes")
const AdminAuthRoutes = [
    // <Route exact path="/" element={<UnAuthGuards component ={<Home/>} />}></Route>,
    // <Route path="user-login" element={<AdminAuthGaurd component ={<CandidatePanel />} />} ></Route>
    <Route path="adminpanel" element= {<AdminAuthGaurd component ={<Adminpanel />} />}></Route>
]

export default AdminAuthRoutes;