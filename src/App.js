import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./admin_pages/Home/Home"
import CurrentOpening from "./admin_pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./admin_pages/InterviewSchedule/InterviewSchedule"
import FAQ from"./admin_pages/FAQ/FAQ"
import DropCV from "./admin_pages/DropCV/Dropcv"
import ScheduledAcademics from "./admin_pages/InterviewSchedule/ScheduledAcademics/ScheduledAcademics";
import OTPVerification from "./admin_pages/DropCV/OTPVerifivation/OTPVerification";
import Submitsuccess from "./admin_pages/DropCV/OTPVerifivation/Submitsuccess";
import JobProfile from "./admin_pages/JobProfile/JobProfile";
import Academics from "./admin_pages/JobProfile/Academics/Academics";
import Administrative from "./admin_pages/JobProfile/Administrative/Administrative";
import Research from "./admin_pages/JobProfile/Research/Research";
import Technical from "./admin_pages/JobProfile/Technical/Technical";
import ApplyNow from "./admin_pages/CurrentOpening/ApplyNowForm/ApplyNow";
import PersonalDeatils from "./admin_pages/DropCV/PersonalDetails/PersonalDeatils";
import Adminpanel from "./admin_pages/AdminLogin/Adminpanel";
import Login from "./admin_pages/AdminLogin/Login/Login";
import Qualification from "./admin_pages/DropCV/Qualification/Qualification";
import CurrentExperience from "./admin_pages/DropCV/CurrentExperience/CurrentExperience";
import UserDetails from "./admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";


function App() {
  
  return (
    <>
      <Main>
        <Header></Header>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>
           <Route path="current-opening" element={<CurrentOpening />}></Route>
           <Route path="job-profile" element={<JobProfile />}></Route>
           <Route path="interview-schedule" element={<InterviewShedule />}></Route>
           <Route path="faq-section" element={<FAQ />}></Route>
           <Route path="drop-cv" element={<DropCV />}></Route>
           <Route path="login" element={<Login />}></Route>
           <Route path="personaldetails" element={<PersonalDeatils />}></Route>
           <Route path="qualification" element={<Qualification />}></Route>
           <Route path="currentexperience" element={<CurrentExperience />}></Route>
           <Route path="userdetails" element={<UserDetails />}></Route>
           <Route path="adminpanel" element={<Adminpanel />}></Route>
           <Route path="scheduled-academics" element={< ScheduledAcademics/>}></Route>
           <Route path="success" element={< Submitsuccess/>}></Route>
           <Route path="otp-verifivation" element={< OTPVerification/>}></Route>
           <Route path="academics-jobs" element={< Academics/>}></Route>
           <Route path="administrative-jobs" element={< Administrative/>}></Route>
           <Route path="research-jobs" element={< Research/>}></Route>      
           <Route path="technical-jobs" element={< Technical/>}></Route>      
           <Route path="apply-now" element={< ApplyNow/>}></Route>      
           <Route path="PersonalDeatils" element={< PersonalDeatils/>}></Route>      
           <Route path="adminpanel" element={< Adminpanel/>}></Route>      
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
