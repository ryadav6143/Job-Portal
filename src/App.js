import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./admin_pages/Home/Home"
import CurrentOpening from "./admin_pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./admin_pages/InterviewSchedule/InterviewSchedule"
import FAQ from"./admin_pages/FAQ/FAQ"
import DropCV from "./admin_pages/DropCV/Dropcv"

import UserLogin from "./candidate_pages/UserLogin/UserLogin";
import PersonalDeatils from "./admin_pages/DropCV/PersonalDetails/PersonalDeatils";
import Qualification from "./admin_pages/DropCV/Qualification/Qualification"
import CurrentExperience from "./admin_pages/DropCV/CurrentExperience/CurrentExperience"
import UserDetails from "./admin_pages/CurrentOpening/ApplyNowForm/UserDetails/UserDetails";
import Adminpanel from "./admin_pages/AdminLogin/Adminpanel";


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
      
           <Route path="userlogin" element={<UserLogin />}></Route>
           <Route path="personaldetails" element={<PersonalDeatils />}></Route>
           <Route path="qualification" element={<Qualification />}></Route>
           <Route path="currentexperience" element={<CurrentExperience />}></Route>
           <Route path="userdetails" element={<UserDetails />}></Route>
           <Route path="adminpanel" element={<Adminpanel />}></Route>
          
           
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
