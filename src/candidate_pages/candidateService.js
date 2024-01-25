import axios from "axios";

const BASE_URL = "http://192.168.1.8:8090/v1/api";

const candidatesApiService = {

  uploadCV: async (formData, accessToken) => {
    try {
      const response = await axios.put(`${BASE_URL}/candidates/upload_cv`, formData, {
        headers: {
          'access-token': accessToken,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

    loginCandidate: (data) => {
        return axios.post(`${BASE_URL}/login/candidate_login`, data);
      },

      getCandidateById: async ( accessToken) => {
        try {
          const response = await axios.get(`${BASE_URL}/candidates/getCandidateById/`, {
            headers: {
              'access-token': accessToken,
            },
          });
    
          return response.data;
        } catch (error) {
          throw new Error(`Error fetching data: ${error.message}`);
        }
      },

      uploadProfileImage: async (file, accessToken) => {
        try {
          let formData = new FormData();
          formData.append('profile_image', file);
          // formData.append('candidate_id', candidatesId);
    
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
            console.error('Image upload failed:', response.status, response.statusText);
            throw new Error(`Image upload failed: ${response.statusText}`);
          }          
        } catch (error) {
          throw new Error(`Error uploading image: ${error.message}`);
        }
      },
      
      getCandidatesCountries: () => {
        return axios.get("https://countriesnow.space/api/v0.1/countries");
      },
      fetchCandidateImage: async (accessToken) => {
        try {
          const response = await axios.get(`${BASE_URL}/candidates/renderCandidatePic`, {
            headers: {
              'access-token': accessToken,
            },
            responseType: 'blob',
          });
    
          if (response.status === 200 && response.data) {
            const imageUrl = URL.createObjectURL(response.data);
            return imageUrl;
          } else {
            // If there is no image, return null or use a default image URL
            return null;
          }
        } catch (error) {
          console.error('Error fetching image:', error);
          throw error; // You might want to handle this error in the component that calls this function
        }
      },

      updateCandidatePersonalInfo: async (accessToken, updateField) => {
        try {
          const response = await axios.put(
            `${BASE_URL}/candidates/updateCandidatePersonalById`,
            updateField,
            {
              headers: {
                'access-token': accessToken,
              },
            }
          );
    
          console.log('Save Changes Response:', response);
          return response.data; // Assuming your API returns some data upon successful update
        } catch (error) {
          console.error('Error saving changes:', error.message);
          throw error;
        }
      },

    };



export default candidatesApiService;