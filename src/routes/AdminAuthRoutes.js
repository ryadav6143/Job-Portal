import React from "react";
import { Route } from "react-router-dom";
import AdminAuthGaurd from "../gaurd/AdminAuthGaurd";
import Adminpanel from "../admin_pages/AdminLogin/Adminpanel";
import EditOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
import AddOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";


console.log("inside Candidate-Auth Routes")
const AdminAuthRoutes = [
    // <Route exact path="/" element={<UnAuthGuards component ={<Home/>} />}></Route>,
    // <Route path="user-login" element={<AdminAuthGaurd component ={<CandidatePanel />} />} ></Route>
    <Route path="adminpanel" element= {<AdminAuthGaurd component ={<Adminpanel />} />}></Route>,
    <Route
    path="add-openings"
    element={<AdminAuthGaurd component={<AddOpenings />} />}
  ></Route>,
  <Route
  path="edit-openings/:id"
  element={<AdminAuthGaurd component={<EditOpenings />} />}
></Route>,

]

export default AdminAuthRoutes;