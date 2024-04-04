import React from "react";
import { Route } from "react-router-dom";
import AdminAuthGaurd from "../gaurd/AdminAuthGaurd";

import AddOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";
import AdminDashboard from "../admin_pages/AdminLogin/AdminDashboard/AdminDashboard.jsx";
import MasterCurrentOpening from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/MasterCurrentOpening";
import MasterJobProfile from "../admin_pages/AdminLogin/AdminChildPages/MasterJobProfile/MasterJobProfile";
import MasterInterviewSchedule from "../admin_pages/AdminLogin/AdminChildPages/MasterInterviewSchedule/MasterInterviewSchedule";
import Reports from "../admin_pages/AdminLogin/Reports/Reports.jsx";
import AddPostApplied from "../admin_pages/AdminLogin/MasterPages/AddPostApplied.jsx";
import AddSubPostApplied from "../admin_pages/AdminLogin/MasterPages/AddSubPostApplied.jsx";
import AddDepartment from "../admin_pages/AdminLogin/MasterPages/AddDepartment.jsx";
import AddExamType from "../admin_pages/AdminLogin/MasterPages/AddExamType.jsx";
import AddDegree from "../admin_pages/AdminLogin/MasterPages/AddDegree.jsx";
import AddCategories from "../admin_pages/AdminLogin/MasterPages/AddCategories.jsx";
import AddSubjects from "../admin_pages/AdminLogin/MasterPages/AddSubjects.jsx";
import AdminList from "../admin_pages/AdminLogin/SuperAdmin/AdminList.jsx";
import GetRights from "../admin_pages/AdminLogin/SuperAdmin/GetRights.jsx";
import GetRole from "../admin_pages/AdminLogin/SuperAdmin/GetRole.jsx";
import EditOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings.jsx";
import MasterTable from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/MasterCurrentOpeningChild/MasterTable.jsx";
// import RegisterAdmin from "../admin_pages/AdminRegister/RegisterAdmin.jsx";
import AdminRegister from "../admin_pages/AdminLogin/AdminChildPages/RegisterAdmin/AdminRegister.jsx";



// console.log("inside Candidate-Auth Routes");
const AdminAuthRoutes = [
  // <Route path="adminpanel" element= {<AdminAuthGaurd component ={<Adminpanel />} />}></Route>,
  <Route
    path="/admin-dashboard"
    element={<AdminAuthGaurd component={<AdminDashboard />} />}
  >
    {/* <Route path="" element={<AdminDashboard />}/> */}
    <Route
      path="current-openings"
      element={<AdminAuthGaurd component={<MasterCurrentOpening />} />}>
             <Route path="" element={<AdminAuthGaurd component={<MasterTable />} />}/>
            <Route path="add-openings" element={<AdminAuthGaurd component={<AddOpenings />} />}/>
            <Route path="edit-openings/:profileId" element={<AdminAuthGaurd component={<EditOpenings />} />}/>
    </Route>
    <Route
      path="job-profile"
      element={<AdminAuthGaurd component={<MasterJobProfile />} />}
    />
    <Route
      path="interview-schedule"
      element={<AdminAuthGaurd component={<MasterInterviewSchedule />} />}
    />
    <Route
      path="reports"
      element={<AdminAuthGaurd component={<Reports />} />}
    />
    <Route
      path="add-post-applied"
      element={<AdminAuthGaurd component={<AddPostApplied />} />}
    />
    <Route
      path="add-sub-post-applied"
      element={<AdminAuthGaurd component={<AddSubPostApplied />} />}
    />
    <Route
      path="add-departments"
      element={<AdminAuthGaurd component={<AddDepartment />} />}
    />
    <Route
      path="add-exam-type"
      element={<AdminAuthGaurd component={<AddExamType />} />}
    />
    <Route
      path="add-degree"
      element={<AdminAuthGaurd component={<AddDegree />} />}
    />
    <Route
      path="add-categories"
      element={<AdminAuthGaurd component={<AddCategories />} />}
    />
    <Route
      path="add-subjects"
      element={<AdminAuthGaurd component={<AddSubjects />} />}
    />
    <Route
      path="admin-list"
      element={<AdminAuthGaurd component={<AdminList />} />}
    />
    <Route
      path="right-list"
      element={<AdminAuthGaurd component={<GetRights />} />}
    />
    <Route
      path="role-list"
      element={<AdminAuthGaurd component={<GetRole />} />}
    />
    <Route path="add-openings" element={<AddOpenings />} />,
    <Route path="admin_register" element={<AdminAuthGaurd component={<AdminRegister />} />}
  ></Route>,
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
