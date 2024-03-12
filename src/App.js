import React from "react";
import { BrowserRouter as Main, Routes } from "react-router-dom";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import CandidateAuthRoutes from "./routes/CandidateAuthRoutes";
import AdminAuthRoutes from "./routes/AdminAuthRoutes";
import EditPersonalDetails from "./candidate_pages/CandidateLogin/CandidateChildPages/EditPersonalDetails/EditPersonalDetails";
function App() {
  return (
    <>
      <Main>
        <Routes>
          {UnAuthRoutes}
          {CandidateAuthRoutes}
          {AdminAuthRoutes}
        </Routes>
      
      </Main>
    </>
  );
}

export default App;
