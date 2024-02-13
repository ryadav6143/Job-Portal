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
 
  
};


export default adminApiService;
