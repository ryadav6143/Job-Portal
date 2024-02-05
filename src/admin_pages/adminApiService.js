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
};

export default adminApiService;
