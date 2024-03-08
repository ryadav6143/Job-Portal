import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";




import Administrative from "./admin_pages/JobProfile/Administrative/Administrative";
import Research from "./admin_pages/JobProfile/Research/Research";
import Technical from "./admin_pages/JobProfile/Technical/Technical";
import ApplyNow from "./admin_pages/CurrentOpening/ApplyNowForm/ApplyNow";



import ContactUs from "./admin_pages/Contactus/ContactUs";
import Submitsuccess from "./admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import OTPVerification from "./admin_pages/DropCV/OTPVerifivation/OTPVerification";
import TestPages from "./admin_pages/TestPages/TestPages";
import AddOpenings from "./admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";


import PageNotFound from "./admin_pages/PageNotFound/PageNotFound";
import EditOpenings from "./admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
import RegisterAdmin from "./admin_pages/AdminRegister/RegisterAdmin";
import Sidenav from "./admin_pages/TestPages/Sidenav";
import Notification from "./Notification/Notification";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import CandidateAuthRoutes from "./routes/CandidateAuthRoutes";
import AdminAuthRoutes from "./routes/AdminAuthRoutes";
function App() {
  return (
    <>
      <Main>
        <Routes>
          {UnAuthRoutes}
          {CandidateAuthRoutes}
          {AdminAuthRoutes}
          {/* <Route path="login" element={<Login />}></Route> */}
          
         
          <Route
            path="administrative-jobs"
            element={<Administrative />}
          ></Route>
          <Route path="research-jobs" element={<Research />}></Route>
          <Route path="technical-jobs" element={<Technical />}></Route>
          <Route path="apply-now" element={<ApplyNow />}></Route>
         
      
          {/* <Route path="forgetpassword" element={<ForgottenPassword />}></Route> */}

          

        
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="submit" element={<Submitsuccess />}></Route>
          <Route path="verify" element={<OTPVerification />}></Route>
          <Route
            path="verification-successfull"
            element={<Submitsuccess />}
          ></Route>
          <Route path="add-openings" element={<AddOpenings />}></Route>
          <Route path="edit-openings/:id" element={<EditOpenings />}></Route>
          <Route path="test" element={<TestPages />}></Route>
          <Route path="admin_register" element={<RegisterAdmin />}></Route>
          <Route path="sidenav" element={<Sidenav />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
