import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./admin_pages/Home/Home"
import CurrentOpening from "./admin_pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./admin_pages/InterviewSchedule/InterviewSchedule"
import FAQ from"./admin_pages/FAQ/FAQ"
import DropCV from "./admin_pages/DropCV/Dropcv"
import Login from "./admin_pages/AdminLogin/Login";
import UserLogin from "./candidate_pages/UserLogin/UserLogin";

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
           <Route path="login" element={<Login />}></Route>
           <Route path="userlogin" element={<UserLogin />}></Route>
           
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
