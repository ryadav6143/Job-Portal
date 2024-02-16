import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./admin_pages/Home/Home";
import CurrentOpening from "./admin_pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./admin_pages/InterviewSchedule/InterviewSchedule";
import FAQ from "./admin_pages/FAQ/FAQ";
import DropCV from "./admin_pages/DropCV/Dropcv";
import JobProfile from "./admin_pages/JobProfile/JobProfile";
import Academics from "./admin_pages/JobProfile/Academics/Academics";
import Administrative from "./admin_pages/JobProfile/Administrative/Administrative";
import Research from "./admin_pages/JobProfile/Research/Research";
import Technical from "./admin_pages/JobProfile/Technical/Technical";
import ApplyNow from "./admin_pages/CurrentOpening/ApplyNowForm/ApplyNow";
import PersonalDetails from "./admin_pages/DropCV/PersonalDetails/PersonalDeatils";
import Adminpanel from "./admin_pages/AdminLogin/Adminpanel";
import Qualification from "./admin_pages/DropCV/Qualification/Qualification";
import CurrentExperience from "./admin_pages/DropCV/CurrentExperience/CurrentExperience";
import UserDetails from "./admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";
import ContactUs from "./admin_pages/Contactus/ContactUs";
import Submitsuccess from "./admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import OTPVerification from "./admin_pages/DropCV/OTPVerifivation/OTPVerification";
import TestPages from "./admin_pages/TestPages/TestPages";
import AddOpenings from "./admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";
import CandidatePanel from "./candidate_pages/CandidateLogin/CandidatePanel";
import ForgottenPassword from "./candidate_pages/CandidateLogin/CandidateLogin/ForgottenPassword";
import PageNotFound from "./admin_pages/PageNotFound/PageNotFound";
import EditOpenings from "./admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
import RegisterAdmin from "./admin_pages/AdminRegister/RegisterAdmin";
import Sidenav from "./admin_pages/TestPages/Sidenav";
function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="current-opening" element={<CurrentOpening />}></Route>
          <Route path="job-profile" element={<JobProfile />}></Route>
          <Route
            path="interview-schedule"
            element={<InterviewShedule />}
          ></Route>
          <Route path="faq-section" element={<FAQ />}></Route>
          <Route path="drop-cv" element={<DropCV />}></Route>
          {/* <Route path="login" element={<Login />}></Route> */}
          <Route path="forgetpassword" element={<ForgottenPassword />}></Route>
          <Route path="personaldetails" element={<PersonalDetails />}></Route>
          <Route path="qualification" element={<Qualification />}></Route>
          <Route
            path="currentexperience"
            element={<CurrentExperience />}
          ></Route>
          <Route path="userdetails" element={<UserDetails />}></Route>
          <Route path="adminpanel" element={<Adminpanel />}></Route>
          <Route path="academics-jobs" element={<Academics />}></Route>
          <Route
            path="administrative-jobs"
            element={<Administrative />}
          ></Route>
          <Route path="research-jobs" element={<Research />}></Route>
          <Route path="technical-jobs" element={<Technical />}></Route>
          <Route path="apply-now" element={<ApplyNow />}></Route>
          <Route path="PersonalDeatils" element={<PersonalDetails />}></Route>
          <Route path="adminpanel" element={<Adminpanel />}></Route>
          <Route path="forgetpassword" element={<ForgottenPassword />}></Route>

          <Route path="user-login" element={<CandidatePanel />}></Route>

          <Route path="adminpanel" element={<Adminpanel />}></Route>
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
