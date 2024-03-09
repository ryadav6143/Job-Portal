import React from "react";
import { Route } from "react-router-dom";
import UnAuthGuards from "../gaurd/UnAuthGuards";
import Home from "../admin_pages/Home/Home";
import CurrentOpening from "../admin_pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "../admin_pages/InterviewSchedule/InterviewSchedule";
import JobProfile from "../admin_pages/JobProfile/JobProfile";
import FAQ from "../admin_pages/FAQ/FAQ";
import DropCV from "../admin_pages/DropCV/Dropcv";
import ForgottenPassword from "../candidate_pages/CandidateLogin/CandidateLogin/ForgottenPassword";
import CandidateLogin from "../candidate_pages/CandidateLogin/CandidateLogin/CandidateLogin";
import Login from "../admin_pages/AdminLogin/Login/Login";
import Qualification from "../admin_pages/DropCV/Qualification/Qualification";
import CurrentExperience from "../admin_pages/DropCV/CurrentExperience/CurrentExperience";
import UserDetails from "../admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";
import Academics from "../admin_pages/JobProfile/Academics/Academics";
import PersonalDetails from "../admin_pages/DropCV/PersonalDetails/PersonalDeatils";
import Administrative from "../admin_pages/JobProfile/Administrative/Administrative";
import Research from "../admin_pages/JobProfile/Research/Research";
import Technical from "../admin_pages/JobProfile/Technical/Technical";
import ApplyNow from "../admin_pages/CurrentOpening/ApplyNowForm/ApplyNow";

import RegisterAdmin from "../admin_pages/AdminRegister/RegisterAdmin"
import PageNotFound from "../admin_pages/PageNotFound/PageNotFound";
import ContactUs from "../admin_pages/Contactus/ContactUs";
import Submitsuccess from "../admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import OTPVerification from "../admin_pages/DropCV/OTPVerifivation/OTPVerification";
import TestPages from "../admin_pages/TestPages/TestPages";

console.log("inside UnAuthRoutes");
const UnAuthRoutes = [
  <Route
    exact
    path="/"
    element={<UnAuthGuards component={<Home />} />}
  ></Route>,
  <Route
    path="/current-opening"
    element={<UnAuthGuards component={<CurrentOpening />} />}
  ></Route>,
  <Route
    path="/job-profile"
    element={<UnAuthGuards component={<JobProfile />} />}
  ></Route>,
  <Route
    path="/interview-schedule"
    element={<UnAuthGuards component={<InterviewShedule />} />}
  ></Route>,
  <Route
    path="/faq-section"
    element={<UnAuthGuards component={<FAQ />} />}
  ></Route>,
  <Route
    path="/drop-cv"
    element={<UnAuthGuards component={<DropCV />} />}
  ></Route>,
  <Route
    path="/forgetpassword"
    element={<UnAuthGuards component={<ForgottenPassword />} />}
  ></Route>,
  <Route
    path="/candidate-login"
    element={<UnAuthGuards component={<CandidateLogin />} />}
  ></Route>,
  <Route
    path="/admin-login"
    element={<UnAuthGuards component={<Login />} />}
  ></Route>,
  <Route
    path="personaldetails"
    element={<UnAuthGuards component={<PersonalDetails />} />}
  ></Route>,
  <Route path="qualification" element={<Qualification />}></Route>,
  <Route
    path="currentexperience"
    element={<UnAuthGuards component={<CurrentExperience />} />}
  ></Route>,
  <Route
    path="userdetails"
    element={<UnAuthGuards component={<UserDetails />} />}
  ></Route>,
  <Route
    path="academics-jobs"
    element={<UnAuthGuards component={<Academics />} />}
  ></Route>,
  <Route
    path="administrative-jobs"
    element={<UnAuthGuards component={<Administrative />} />}
  ></Route>,
  <Route
    path="research-jobs"
    element={<UnAuthGuards component={<Research />} />}
  ></Route>,
  <Route
    path="technical-jobs"
    element={<UnAuthGuards component={<Technical />} />}
  ></Route>,
  <Route
    path="apply-now"
    element={<UnAuthGuards component={<ApplyNow />} />}
  ></Route>,

  <Route
    path="contact-us"
    element={<UnAuthGuards component={<ContactUs />} />}
  ></Route>,
  <Route
    path="submit"
    element={<UnAuthGuards component={<Submitsuccess />} />}
  ></Route>,
  <Route
    path="verify"
    element={<UnAuthGuards component={<OTPVerification />} />}
  ></Route>,
  <Route
    path="verification-successfull"
    element={<UnAuthGuards component={<Submitsuccess />} />}
  ></Route>,
 ,

  <Route
    path="test"
    element={<UnAuthGuards component={<TestPages />} />}
  ></Route>,
  <Route
    path="admin_register"
    element={<UnAuthGuards component={<RegisterAdmin />} />}
  ></Route>,

  <Route
    path="*"
    element={<UnAuthGuards component={<PageNotFound />} />}
  ></Route>,
];

export default UnAuthRoutes;
