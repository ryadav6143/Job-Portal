import axios from "axios";

const BASE_URL = "http://192.168.1.15:8090/v1/api"; 

const adminApiService = {

    getJobCategories: () => {
        return axios.get(`${BASE_URL}/jobCategory`);
      },

      getDepartments: () => {
        return axios.get(`${BASE_URL}/departmentMaster`);
      },

}

export default adminApiService;