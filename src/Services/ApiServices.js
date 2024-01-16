// apiService.js
import axios from "axios";

const BASE_URL = "http://192.168.1.8:8090/v1/api"; // Set your base API URL here

const apiService = {
  getJobCategories: () => {
    return axios.get(`${BASE_URL}/jobCategory`);  
  },

  getSubjectMaster: () => {
    return axios.get(`${BASE_URL}/subjectMaster`);
  },

  getCountries: () => {
    return axios.get("https://countriesnow.space/api/v0.1/countries");
  },

  getCandidates: () => {
    return axios.post(`${BASE_URL}/candidates`);
  },

  getExamTypes: () => {
    return axios.get(`${BASE_URL}/examTypeMaster`);
  },

  generateOTP: (otpData) => {
    return axios.post(`${BASE_URL}/otp/generateOTP`, otpData);
  },
  verifyContactOTP: (verificationData) => {
    return axios.post(`${BASE_URL}/otp/verifyCandidateContactOTP`, verificationData);
  },
  submitCandidateData: (formData) => {
    return axios.post(`${BASE_URL}/candidates/drop_cv`, formData);
  },
};



export default apiService;
