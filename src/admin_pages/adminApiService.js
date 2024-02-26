import axios from "axios";

import { ADMIN_BASE_URL } from "../config/config";

const adminApiService = {
  getJobCategories: () => {
    return axios.get(`${ADMIN_BASE_URL}/jobCategory`);
  },
  getDepartments: () => {
    return axios.get(`${ADMIN_BASE_URL}/departmentMaster`);
  },
  getJobProfile: () => {
    return axios.get(`${ADMIN_BASE_URL}/jobProfileMaster`);
  },
  postJobProfile: (formValues) => {
    return axios.post(`${ADMIN_BASE_URL}/jobProfileMaster`,formValues);
  },
  // getJobProfile: () => {
  //   return axios.get(`${ADMIN_BASE_URL}/jobProfileMaster`);
  // },
  getJobProfileById: (id) => {
    return axios.get(`${ADMIN_BASE_URL}/jobProfileMaster/${id}`);
  },
  deleteJobProfileById: (profileID) => {
    return axios.delete(`${ADMIN_BASE_URL}/jobProfileMaster/${profileID}`);
  },
  updateJobProfile: async (updatedData) => {
  try {
    const response = await axios.put(`${ADMIN_BASE_URL}/jobProfileMaster`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error("Error updating job profile:", error);
  }
  },
  addApplied: async (requestData, accessToken) => {
    try {
      const response = await axios.post(
        `${ADMIN_BASE_URL}/candidateAppliedPost/addApplied`,
        requestData,
        {
          headers: {
            'access-token': accessToken
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCandidatesAppliedPost: async () => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/candidateAppliedPost/getCandidatesAppliedPost`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
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
  getAdminList: async (accessToken) => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/admin/getAdmin`, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getRoleList: async (accessToken) => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/adminRole/getRole`, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getRightsList: async (accessToken) => {
    try {
      const response = await axios.get(`${ADMIN_BASE_URL}/adminRights/getRights`, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  createRole: async (accessToken,data) => {
    try {
      const response = await axios.post(`${ADMIN_BASE_URL}/adminRole/createRole`,data, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  createRights: async (accessToken,data) => {
    try {
      const response = await axios.post(`${ADMIN_BASE_URL}/adminRights/createRights`,data, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  updateRights: async (accessToken,data) => {
    try {
      const response = await axios.put(`${ADMIN_BASE_URL}/adminRights/updateRights`,data, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  deleteAdminRoleById: (accessToken,roleID) => {
    return axios.delete(`${ADMIN_BASE_URL}/adminRole/removeRoleById/${roleID}`,{
      headers: {
        'access-token': accessToken,
      },
    }
   
    );
  },
  deleteRightsById: (accessToken,rightsID) => {
    return axios.delete(`${ADMIN_BASE_URL}/adminRights/removeRights/${rightsID}`,{
      headers: {
        'access-token': accessToken,
      },
    }
   
    );
  },
  deleteAdminById: (accessToken,adminID) => {
    return axios.delete(`${ADMIN_BASE_URL}/admin/removeAdmin/${adminID}`,{
      headers: {
        'access-token': accessToken,
      },
    }
   
    );
  },
  updateRoleById: (accessToken,data) => {
    return axios.put(`${ADMIN_BASE_URL}/adminRole/updateRoleById`,data,{
      headers: {
        'access-token': accessToken,
      },
    }
   
    );
  },
  updateAdminBySuperAdmin: async (accessToken,updateData) => {
    try {
      const response = await axios.put(`${ADMIN_BASE_URL}/admin/updateAdminBySuperAdmin`,updateData, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  },
  getCandidatesById: (accessToken,listID) => {
    return axios.get(`${ADMIN_BASE_URL}/admin/getCandidatesById/${listID}`,{
      headers: {
        'access-token': accessToken,
      },
    }
   
    );
  },
  fetchData: async (currentPage, itemsPerPage, selectedCategory, selectedPost) => {
    try {
      let accessToken = localStorage.getItem("Token");
      accessToken = JSON.parse(accessToken);
      const response = await axios.get(`${ADMIN_BASE_URL}/candidateAppliedPost/getCandidatesAppliedPostSorted?page=${currentPage}&limit=${itemsPerPage}&category=${selectedCategory}&appliedPost=${selectedPost}`, {
        headers: {
          'access-token': accessToken.token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  }



};


export default adminApiService;
