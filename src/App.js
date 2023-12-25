import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./Adminpages/Home/Home"
import CurrentOpening from "./Adminpages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./Adminpages/InterviewSchedule/InterviewSchedule"
import FAQ from"./Adminpages/FAQ/FAQ"
import DropCV from "./Adminpages/DropCV/Dropcv"
import ScheduledAcademics from "./Adminpages/InterviewSchedule/ScheduledAcademics/ScheduledAcademics";
import OTPVerification from "./Adminpages/DropCV/OTPVerifivation/OTPVerification";
import Submitsuccess from "./Adminpages/DropCV/OTPVerifivation/Submitsuccess";
import JobProfile from "./Adminpages/JobProfile/JobProfile";
import Academics from "./Adminpages/JobProfile/Academics/Academics";
import Administrative from "./Adminpages/JobProfile/Administrative/Administrative";
import Research from "./Adminpages/JobProfile/Research/Research";
import Technical from "./Adminpages/JobProfile/Technical/Technical";
import ApplyNow from "./Adminpages/ApplyNowForm/ApplyNow";

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
           <Route path="scheduled-academics" element={< ScheduledAcademics/>}></Route>
           <Route path="success" element={< Submitsuccess/>}></Route>
           <Route path="otp-verifivation" element={< OTPVerification/>}></Route>
           <Route path="academics-jobs" element={< Academics/>}></Route>
           <Route path="administrative-jobs" element={< Administrative/>}></Route>
           <Route path="research-jobs" element={< Research/>}></Route>      
           <Route path="technical-jobs" element={< Technical/>}></Route>      
           <Route path="apply-now" element={< ApplyNow/>}></Route>      
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
