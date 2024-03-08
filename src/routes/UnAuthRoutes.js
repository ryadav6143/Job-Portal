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
import CandidatePanel from "../candidate_pages/CandidateLogin/CandidatePanel";
import Adminpanel from "../admin_pages/AdminLogin/Adminpanel";
import CandidateLogin from "../candidate_pages/CandidateLogin/CandidateLogin/CandidateLogin";
import Login from "../admin_pages/AdminLogin/Login/Login";
import Qualification from "../admin_pages/DropCV/Qualification/Qualification";
import CurrentExperience from "../admin_pages/DropCV/CurrentExperience/CurrentExperience";
import UserDetails from "../admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";
import Academics from "../admin_pages/JobProfile/Academics/Academics";
import PersonalDetails from "../admin_pages/DropCV/PersonalDetails/PersonalDeatils";
console.log("inside UnAuthRoutes")
const UnAuthRoutes =[
    <Route exact path="/" element={<UnAuthGuards component ={<Home/>} />}></Route>,
    <Route path="/current-opening" element={<UnAuthGuards component ={<CurrentOpening/>} />}></Route>,
    <Route path="/job-profile" element={<UnAuthGuards component ={<JobProfile/>} />}></Route>,
    <Route path="/interview-schedule" element={<UnAuthGuards component ={<InterviewShedule/>} />}></Route>,
    <Route path="/faq-section" element={<UnAuthGuards component = {<FAQ />} />}  ></Route>,
    <Route path="/drop-cv" element={<UnAuthGuards component = {<DropCV />}/>}></Route>,
    <Route path="/forgetpassword" element= {<UnAuthGuards component = {<ForgottenPassword />}/>}   ></Route>,
    <Route path="/candidate-login" element={<UnAuthGuards component ={<CandidateLogin />} />} ></Route>,
    <Route path="/admin-login" element= {<UnAuthGuards component ={<Login />} />}></Route>,
    <Route path="personaldetails" element= {<UnAuthGuards component ={<PersonalDetails />} />}  ></Route>,
    <Route path="qualification" element=   {<Qualification />}></Route>,
    <Route path="currentexperience"  element= {<UnAuthGuards component ={<CurrentExperience />} />}   ></Route>,
    <Route path="userdetails" element= {<UnAuthGuards component ={<UserDetails />} />}  ></Route>,
    <Route path="academics-jobs" element= {<UnAuthGuards component = {<Academics />} />} ></Route>,


]

export default UnAuthRoutes