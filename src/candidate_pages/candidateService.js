import axios from "axios";

const BASE_URL = "http://192.168.1.8:8090/v1/api"; // Set your base API URL here

const candidatesService = {



    loginCandidate: (data) => {
        return axios.post(`${BASE_URL}/login/candidate_login`, data);
      },

      getCandidateById: async (candidateId, accessToken) => {
        try {
          const response = await axios.get(`${BASE_URL}/candidates/getCandidateById/${candidateId}`, {
            headers: {
              'access-token': accessToken,
            },
          });
    
          return response.data;
        } catch (error) {
          throw new Error(`Error fetching data: ${error.message}`);
        }
      },

      uploadProfileImage: async (file, candidatesId, accessToken) => {
        try {
          let formData = new FormData();
          formData.append('profile_image', file);
          formData.append('candidate_id', candidatesId);
    
          const response = await fetch(`${BASE_URL}/candidates/profile_image`, {
            method: 'PUT',
            body: formData,
            headers: {
              'access-token': accessToken,
            },
          });
    
          if (response.ok) {
            return await response.json();
          } else {
            throw new Error(`Image upload failed: ${response.statusText}`);
          }
        } catch (error) {
          throw new Error(`Error uploading image: ${error.message}`);
        }
      },
    };



export default candidatesService;