/* eslint-disable no-sparse-arrays */
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
import EditOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/EditOpeningForm/EditOpenings";
// import RegisterAdmin from "../admin_pages/AdminRegister/RegisterAdmin";
import PageNotFound from "../admin_pages/PageNotFound/PageNotFound";
import ContactUs from "../admin_pages/Contactus/ContactUs";
import Submitsuccess from "../admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import OTPVerification from "../admin_pages/DropCV/OTPVerifivation/OTPVerification";
import TestPages from "../admin_pages/TestPages/TestPages";
import AddOpenings from "../admin_pages/AdminLogin/AdminChildPages/MasterCurrentOpening/AddOpeningForm/AddOpenings";
import Sidenav from "../admin_pages/TestPages/Sidenav";
import NonAcademicForm from "../admin_pages/CurrentOpening/NonAcademicForm/NonAcademicForm";

// console.log("inside UnAuthRoutes");
const UnAuthRoutes = [
  <Route
    exact
    key="home"
    path="/"
    element={<UnAuthGuards component={<Home />} />}
  ></Route>,
  <Route
    key="current-opening"
    path="/current-opening"
    element={<UnAuthGuards component={<CurrentOpening />} />}
  ></Route>,
  <Route
    key="job-profile"
    path="/job-profile"
    element={<UnAuthGuards component={<JobProfile />} />}
  ></Route>,
  <Route
    key="interview-schedule"
    path="/interview-schedule"
    element={<UnAuthGuards component={<InterviewShedule />} />}
  ></Route>,
  <Route
    key="faq-section"
    path="/faq-section"
    element={<UnAuthGuards component={<FAQ />} />}
  ></Route>,
  <Route
    key="drop-cv"
    path="/drop-cv"
    element={<UnAuthGuards component={<DropCV />} />}
  ></Route>,
  <Route
    key="forgetpassword"
    path="/forgetpassword"
    element={<UnAuthGuards component={<ForgottenPassword />} />}
  ></Route>,
  <Route
    key="candidate-login"
    path="/candidate-login"
    element={<UnAuthGuards component={<CandidateLogin />} />}
  ></Route>,
  <Route
    key="admin-login"
    path="/admin-login"
    element={<UnAuthGuards component={<Login />} />}
  ></Route>,
  <Route
    key="personaldetails"
    path="personaldetails"
    element={<UnAuthGuards component={<PersonalDetails />} />}
  ></Route>,
  <Route
    key="qualification"
    path="qualification"
    element={<Qualification />}
  ></Route>,
  <Route
    key="currentexperience"
    path="currentexperience"
    element={<UnAuthGuards component={<CurrentExperience />} />}
  ></Route>,
  <Route
    key="userdetails"
    path="userdetails"
    element={<UnAuthGuards component={<UserDetails />} />}
  ></Route>,
  <Route
    key="academics-jobs"
    path="academics-jobs"
    element={<UnAuthGuards component={<Academics />} />}
  ></Route>,
  <Route
    key="administrative-jobs"
    path="administrative-jobs"
    element={<UnAuthGuards component={<Administrative />} />}
  ></Route>,
  <Route
    key="research-jobs"
    path="research-jobs"
    element={<UnAuthGuards component={<Research />} />}
  ></Route>,
  <Route
    key="technical-jobs"
    path="technical-jobs"
    element={<UnAuthGuards component={<Technical />} />}
  ></Route>,
  <Route
    key="apply-now"
    path="apply-now"
    element={<UnAuthGuards component={<ApplyNow />} />}
  ></Route>,
  <Route
    key="non-academic-form"
    path="non-academic-form"
    element={<UnAuthGuards component={<NonAcademicForm />} />}
  ></Route>,
  <Route
    key="contact-us"
    path="contact-us"
    element={<UnAuthGuards component={<ContactUs />} />}
  ></Route>,
  <Route
    key="submit"
    path="submit"
    element={<UnAuthGuards component={<Submitsuccess />} />}
  ></Route>,
  <Route
    key="verify"
    path="verify"
    element={<UnAuthGuards component={<OTPVerification />} />}
  ></Route>,
  <Route
    key="verification-successfull"
    path="verification-successfull"
    element={<UnAuthGuards component={<Submitsuccess />} />}
  ></Route>,
  <Route
    key="add-openings"
    path="add-openings"
    element={<UnAuthGuards component={<AddOpenings />} />}
  ></Route>,
  <Route
    key="edit-openings/:id"
    path="edit-openings/:id"
    element={<UnAuthGuards component={<EditOpenings />} />}
  ></Route>,
  <Route
    key="sidenav"
    path="sidenav"
    element={<UnAuthGuards component={<Sidenav />} />}
  ></Route>,

  <Route
    key="PageNotFound"
    path="*"
    element={<UnAuthGuards component={<PageNotFound />} />}
  ></Route>,
];

export default UnAuthRoutes;
