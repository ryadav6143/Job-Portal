// https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4
// Net Ninja

import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./Adminpages/Home/Home"
import CurrentOpening from "./Adminpages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./Adminpages/InterviewSchedule/InterviewSchedule"
import FAQ from"./Adminpages/FAQ/FAQ"
import DropCV from "./Adminpages/DropCV/Dropcv"
import ScheduledAcademics from "./Adminpages/InterviewSchedule/ScheduledAcademics/ScheduledAcademics";
import ScheduledAdministration from "./Adminpages/InterviewSchedule/ScheduledAdministration/ScheduledAdministration";
import ScheduledResearch from "./Adminpages/InterviewSchedule/ScheduledResearch/ScheduledResearch";
import OTPVerification from "./Adminpages/DropCV/OTPVerifivation/OTPVerification";
function App() {
  
  return (
    <>
      <Main>
        <Header></Header>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>
           <Route path="current-opening" element={<CurrentOpening />}></Route>
           <Route path="interview-schedule" element={<InterviewShedule />}></Route>
           <Route path="faq-section" element={<FAQ />}></Route>
           <Route path="drop-cv" element={<DropCV />}></Route>
           <Route path="scheduled-academics" element={< ScheduledAcademics/>}></Route>
           <Route path="otp-verifivation" element={< OTPVerification/>}></Route>
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
