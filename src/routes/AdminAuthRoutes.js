import React from "react";
import { Route } from "react-router-dom";
import AdminAuthGaurd from "../gaurd/AdminAuthGaurd";
import Adminpanel from "../admin_pages/AdminLogin/Adminpanel";
import EditOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
import AddOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";
import MasterCurrentOpening from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/MasterCurrentOpening";


console.log("inside Candidate-Auth Routes")
const AdminAuthRoutes = [
    
    <Route path="adminpanel" element= {<AdminAuthGaurd component ={<Adminpanel />} />}></Route>,
    <Route
    path="add-openings"
    element={<AdminAuthGaurd component={<AddOpenings />} />}
  ></Route>,
  <Route
  path="edit-openings/:id"
  element={<AdminAuthGaurd component={<EditOpenings />} />}
></Route>,
  <Route
  path="master-currentopening"
  element={<AdminAuthGaurd component={<MasterCurrentOpening />} />}
></Route>,

]

export default AdminAuthRoutes;