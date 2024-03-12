import axios from "axios";
import Notification from "../Notification/Notification";
import { ADMIN_BASE_URL } from "../config/config";

const adminApiService = {


  
  getJobCategories: () => {
    return axios.get(`${ADMIN_BASE_URL}/jobCategory`,{});
  },
  getDepartments: () => {
    return axios.get(`${ADMIN_BASE_URL}/departmentMaster`);
  },
  getJobProfile: () => {
    return axios.get(`${ADMIN_BASE_URL}/jobProfileMaster`);
  },
  postJobProfile: async (formValues) => {
    try {
      const response = await axios.post(`${ADMIN_BASE_URL}/jobProfileMaster`,formValues, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      Notification({
        open: true,
        handleClose: () => {}, // Define handleClose function if needed
        alertMessage: `Error posting job profile: ${error.message}`,
        alertSeverity: "error",
      });
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }, 
  getJobProfileById: (profileId) => {
    return axios.get(`${ADMIN_BASE_URL}/jobProfileMaster/${profileId}`);
  },
  deleteJobProfileById: (profileID) => {
    return axios.delete(`${ADMIN_BASE_URL}/jobProfileMaster/${profileID}`);
  },
  updateJobProfile: async (profileID) => {
    try {
      const response = await axios.put(`${ADMIN_BASE_URL}/jobProfileMaster`,profileID, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  addApplied: async (requestData) => {
    try {
      const response = await axios.post(
        `${ADMIN_BASE_URL}/candidateAppliedPost/addApplied`,
        requestData,
        {
          headers: {
            'access-token': getAccessToken(),
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // getCandidatesAppliedPost: async () => {
  //   try {
  //     const response = await axios.get(`${ADMIN_BASE_URL}/candidateAppliedPost/getCandidatesAppliedPost`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  renderCandidateResume: async (candidateId) => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/candidates/renderCandidateResume?candidate_id=${candidateId}`, {
        responseType: 'blob'
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAdminList: async () => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/admin/getAdmin`, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getRoleList: async () => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/adminRole/getRole`, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getRightsList: async () => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/adminRights/getRights`, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  createRole: async (data) => {
    try {
      const response = await axios.post(`${ADMIN_BASE_URL}/adminRole/createRole`,data, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  createRights: async (data) => {
    try {
      const response = await axios.post(`${ADMIN_BASE_URL}/adminRights/createRights`,data, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  updateRights: async (data) => {
    try {
      const response = await axios.put(`${ADMIN_BASE_URL}/adminRights/updateRights`,data, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  deleteAdminRoleById: (roleID) => {
    return axios.delete(`${ADMIN_BASE_URL}/adminRole/removeRoleById/${roleID}`,{
      headers: {
        'access-token': getAccessToken(),
      },
    }
   
    );
  },
  deleteRightsById: (rightsID) => {
    return axios.delete(`${ADMIN_BASE_URL}/adminRights/removeRights/${rightsID}`,{
      headers: {
        'access-token': getAccessToken(),
      },
    }
   
    );
  },
  deleteAdminById: (adminID) => {
    return axios.delete(`${ADMIN_BASE_URL}/admin/removeAdmin/${adminID}`,{
      headers: {
        'access-token': getAccessToken(),
      },
    }
   
    );
  },
  updateRoleById: (data) => {
    return axios.put(`${ADMIN_BASE_URL}/adminRole/updateRoleById`,data,{
      headers: {
        'access-token': getAccessToken(),
      },
    }
   
    );
  },
  updateAdminBySuperAdmin: async (updateData) => {
    try {
      const response = await axios.put(`${ADMIN_BASE_URL}/admin/updateAdminBySuperAdmin`,updateData, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getCandidatesById: (listID) => {
    return axios.get(`${ADMIN_BASE_URL}/admin/getCandidatesById/${listID}`,{
      headers: {
        'access-token': getAccessToken(),
      },
    }
   
    );
  },

  fetchData: async (currentPage, itemsPerPage, selectedCategory, selectedPost) => {
    try {
  
      const response = await axios.get(`${ADMIN_BASE_URL}/candidateAppliedPost/getCandidatesAppliedPostSorted?page=${currentPage}&limit=${itemsPerPage}&category=${selectedCategory}&appliedPost=${selectedPost}`, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  },
  getAllInterview: async (currentPage, itemsPerPage) => {
    try {
  
      const response = await axios.get(`${ADMIN_BASE_URL}/jobProfileMaster/getJobProfilePaginatedNSorted?limit=${itemsPerPage}&page=${currentPage}`, {
        headers: {
          'access-token': getAccessToken(),
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  }

};

function getAccessToken() {
  const accessToken = localStorage.getItem("Token");
  return accessToken ? JSON.parse(accessToken).token : null;
}
export default adminApiService;
