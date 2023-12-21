// https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4
// Net Ninja

import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footers from "./components/Footer/Footers";
import Home from "./pages/Home/Home"
import CurrentOpening from "./pages/CurrentOpening/CurrentOpening";
import InterviewShedule from "./pages/InterviewSchedule/InterviewSchedule"
import FAQ from"./pages/FAQ/FAQ"
import DropCV from "./pages/DropCV/Dropcv"
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
         </Routes>
         <Footers></Footers>
       </Main>
    </>
   );
}

export default App;
