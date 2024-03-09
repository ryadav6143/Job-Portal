import React from "react";
import { Route } from "react-router-dom";
import AdminAuthGaurd from "../gaurd/AdminAuthGaurd";
import Adminpanel from "../admin_pages/AdminLogin/Adminpanel";
import EditOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
import AddOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";
import AdminDashboard from "../admin_pages/AdminLogin/AdminDashboard/AdminDashboard.jsx";
import MasterCurrentOpening from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/MasterCurrentOpening";
import MasterJobProfile from "../admin_pages/AdminLogin/AdminChildPages/MasterJobProfile/MasterJobProfile";
import MasterInterviewSchedule from "../admin_pages/AdminLogin/AdminChildPages/MasterInterviewSchedule/MasterInterviewSchedule";
import Reports from "../admin_pages/AdminLogin/Reports/Reports.jsx"; 
console.log("inside Candidate-Auth Routes");
const AdminAuthRoutes = [
  // <Route path="adminpanel" element= {<AdminAuthGaurd component ={<Adminpanel />} />}></Route>,
  <Route
    path="/admin-dashboard"
    element={<AdminAuthGaurd component={<AdminDashboard />} />}
  >
   {/* <Route path="" element={<AdminDashboard />}/> */}
   <Route path="current-openings" element={<AdminAuthGaurd component={<MasterCurrentOpening />} />}    />
   <Route path="job-profile" element={<AdminAuthGaurd component={<MasterJobProfile />} />}    />
   <Route path="interview-schedule" element={<AdminAuthGaurd component={<MasterInterviewSchedule />} />}    />
   <Route path="reports" element={<AdminAuthGaurd component={<Reports />} />}    />
   <Route path= 'add-openings' element= {<AddOpenings />} />,
      
  </Route>,
];

export default AdminAuthRoutes;


 /* <Route
      path="add-openings"
      element={<AdminAuthGaurd component={<AddOpenings />} />}
    ></Route>
    ,
    <Route
      path="edit-openings/:id"
      element={<AdminAuthGaurd component={<EditOpenings />} />}
    ></Route> */