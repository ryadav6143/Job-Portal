// import React from "react";
// import { createContext, useContext, useState, useEffect } from "react";
// import candidatesApiService from "../candidate_pages/candidateService";

// export const ApiDataContext = createContext({});

// export const ApiDataProvider = ({ children }) => {
//   const [apiData, setApiData] = useState("");
//   const [loading, setLoading] = useState(true);
//   const updateApiData = (newData) => {
//     setApiData(newData);
//     setLoading(false);
//   };
//   const fetchCandidateData = async () => {
//     try {
//       let accessToken = sessionStorage.getItem("Token");
//       accessToken = JSON.parse(accessToken);
   
//       const fetchedData = await candidatesApiService.getCandidateById(
//         accessToken.token
//       );

//       updateApiData(fetchedData);
  
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchCandidateData();
//   }, []);
 
//   return (
   
//     <ApiDataContext.Provider value={{ apiData, loading, fetchCandidateData }}>
//       {loading ? (
//         <div className="loader-container">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         children
//       )}
//     </ApiDataContext.Provider>
//   );
// };

// export const useApiData = () => {
//   return useContext(ApiDataContext);
// };
