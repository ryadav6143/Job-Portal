import axios from "axios";
import { BASE_URL } from "../config/config";

const adminApiService = {
  getJobCategories: () => {
    return axios.get(`${BASE_URL}/jobCategory`);
  },

  getDepartments: () => {
    return axios.get(`${BASE_URL}/departmentMaster`);
  },
  getJobProfile: () => {
    return axios.get(`${BASE_URL}/jobProfileMaster`);
  },
  postJobProfile: (formValues) => {
    return axios.post(`${BASE_URL}/jobProfileMaster`,formValues);
  },
  getJobProfile: () => {
    return axios.get(`${BASE_URL}/jobProfileMaster`);
  },
  getJobProfileById: (id) => {
    return axios.get(`${BASE_URL}/jobProfileMaster/${id}`);
  },
  deleteJobProfileById: (profileID) => {
    return axios.delete(`${BASE_URL}/jobProfileMaster/${profileID}`);
  },
  updateJobProfile: async (updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/jobProfileMaster`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error("Error updating job profile:", error);
  }
  },
  addApplied: async (requestData, accessToken) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/candidateAppliedPost/addApplied`,
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
  }
  // addApplied: async (tokenFromLocalStorage, requestData) => {
  //   try {
  //     const response = await axios.post(
  //       `${BASE_URL}/candidateAppliedPost/addApplied`,
  //       requestData,
  //       {
  //         headers: {
  //           'access-token': tokenFromLocalStorage,
  //         },
  //       }
  //     );

  //     console.log('Save Changes Response:', response);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error saving changes:', error.message);
  //     throw error;
  //   }
  // },
 
  
};


export default adminApiService;
