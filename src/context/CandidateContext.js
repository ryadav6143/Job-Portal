import { createContext, useContext, useState, useEffect } from 'react';
import candidatesApiService from '../candidate_pages/candidateService';

export const ApiDataContext = createContext({});

export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState("");
  const [loading, setLoading] = useState(true);
  const updateApiData = (newData) => {
    setApiData(newData);
    setLoading(false);
  };
  const fetchData = async () => {
    try {
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      // setLoading(true);
      const fetchedData = await candidatesApiService.getCandidateById(
        accessToken.token
      );
      updateApiData(fetchedData);
      console.log("fetchedData", fetchedData); 

    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false); 
    }
  };
  useEffect(() => {
   

    fetchData();
  }, [apiData]);
console.log("context api Data_>>",apiData)
  return (
//     <ApiDataContext.Provider value={{ apiData,loading }}>
//       {children}
//     </ApiDataContext.Provider>
//   );
// };
<ApiDataContext.Provider value={{ apiData, loading, fetchData }}>
{loading ? (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
) : (
  children
)}
</ApiDataContext.Provider>
);
};

export const useApiData = () => {
  return useContext(ApiDataContext);
};
