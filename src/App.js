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
import Login from "./admin_pages/AdminLogin/Login/Login";
import Qualification from "./admin_pages/DropCV/Qualification/Qualification";
import CurrentExperience from "./admin_pages/DropCV/CurrentExperience/CurrentExperience";
import UserDetails from "./admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";
import ContactUs from "./admin_pages/Contactus/ContactUs";
import EditPersonalDetails from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditPersonalDetails/EditPersonalDetails";
import EditQualificationForm from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditQualificationForm/EditQualificationForm";
import EditExperience from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditExperienceForm/EditExperience";
import EditResearch from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditResearchForm/EditResearchForm";
import EditProgramsForm from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditProgramsForm/EditProgramsForm";
import EditReference from "./candidate_pages/Login/UserDashboard/EditProfileForm/EditReference/EditReference";
import UserDashboard from "./candidate_pages/Login/UserDashboard/UserDashboard";
import UserLogin from "./candidate_pages/Login/UserLogin/UserLogin";
import Submitsuccess from "./admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import OTPVerification from "./admin_pages/DropCV/OTPVerifivation/OTPVerification";
import TestPages from "./admin_pages/TestPages/TestPages";

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
          <Route path="login" element={<Login />}></Route>
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
          {/* ----------------UserDashboard Routing source ---------------     */}

          <Route path="dashboard" element={<UserDashboard />}></Route>
          <Route
            path="editpersonaldetails"
            element={<EditPersonalDetails />}
          ></Route>
          <Route
            path="editqualification"
            element={<EditQualificationForm />}
          ></Route>
          <Route path="editexperience" element={<EditExperience />}></Route>
          <Route path="editresearch" element={<EditResearch />}></Route>
          <Route path="editprogram" element={<EditProgramsForm />}></Route>
          <Route path="editreference" element={<EditReference />}></Route>
          <Route path="user-login" element={<UserLogin />}></Route>

          {/* ------------------ end UserDashboard Routing source--------------- */}

          <Route path="adminpanel" element={<Adminpanel />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="submit" element={<Submitsuccess />}></Route>
          <Route path="verify" element={<OTPVerification />}></Route>
          <Route
            path="verification-successfull"
            element={<Submitsuccess />}
          ></Route>

          <Route path="test" element={<TestPages />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
