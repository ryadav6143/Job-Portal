// apiService.js
import axios from "axios";

import { CANDIDATE_BASE_URL } from "../config/config";

const apiService = {
  
  // -------------------
  getJobCategories: (signal) => {
    return axios.get(`${CANDIDATE_BASE_URL}/jobCategory`,{signal});
  },

  getSubjectMaster: (signal) => {
    return axios.get(`${CANDIDATE_BASE_URL}/subjectMaster`,{signal});
  },

  getCountries: (signal) => {
    return axios.get("https://countriesnow.space/api/v0.1/countries",{signal});
  },

  getCandidates: () => {
    return axios.post(`${CANDIDATE_BASE_URL}/candidates`);
  },

  getExamTypes: (signal) => {
    return axios.get(`${CANDIDATE_BASE_URL}/examTypeMaster`,{signal});
  },

  generateOTP: (otpData) => {
    return axios.post(`${CANDIDATE_BASE_URL}/otp/generateOTP`, otpData);
  },
  verifyContactOTP: (verificationData) => {
    return axios.post(
      `${CANDIDATE_BASE_URL}/otp/verifyCandidateContactOTP`,
      verificationData
    );
  },
  verifyEmailOTP: (emaildataOTP) => {
    return axios.post(
      `${CANDIDATE_BASE_URL}/otp/verifyCandidateEmailOTP`,
      emaildataOTP
    );
  },
  submitCandidateData: (formData) => {
    return axios.post(`${CANDIDATE_BASE_URL}/candidates/drop_cv`, formData);
  },
  submitApplyNowData: (formData) => {
    return axios.post(`${CANDIDATE_BASE_URL}/candidates/apply_now`, formData);
  },
  getAppliedPosts: () => {
    return axios.get(`${CANDIDATE_BASE_URL}/appliedPost`);
  },
  getDepartments: () => {
    return axios.get(`${CANDIDATE_BASE_URL}/departmentMaster`);
  },
};

export default apiService;
// export { checkEmailExistence };
