import axios from "axios";
import {BASE_URL} from "../config/config"

// const BASE_URL = "http://192.168.1.8:8090/v1/api";

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
  ForgetCandidatePassword: (data) => {
    return axios.put(`${BASE_URL}/candidates/candidate_forgot_password`, data);
  },

  getCandidateById: async (accessToken) => {
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
  updateCandidateEducation: async (accessToken, updateField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatEducation/updateCandidateEducation`,
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

  updateCandidateExperience: async (accessToken, updateField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatExperience/updateCandidateExperience`,
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
  updateCandidateResearches: async (accessToken, researchField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatResearch/updateCandidateResearchWork`,
        researchField,
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
  updateCandidateJournalPublications: async (accessToken, journalPublicationField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatJournalPublication/updateCandidateJournalPublications`,
        journalPublicationField,
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
  updateCandidateConferancePublications: async (accessToken, ConferancePublicationField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatConferancePublication/updateCandidateConferancePublications`,
        ConferancePublicationField,
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
  updateCandidatePatent: async (accessToken, patentField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatPatent/updateCandidatePatent`,
        patentField,
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
  updateCandidateCopyright: async (accessToken, copyrightField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidatCopyright/updateCandidateCopyright`,
        copyrightField,
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
  updateCandidateMembershipInfo: async (accessToken, membershipInfoField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidateMembershipInfo/updateCandidateMembershipInfo`,
        membershipInfoField,
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
  updateCandidateSeminarOrganised: async (accessToken, seminarOrganisedField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidateSeminarOrganised/updateCandidateSeminarOrganised`,
        seminarOrganisedField,
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
  updateCandidateSeminarAttend: async (accessToken, seminarAttendField) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/candidateSeminarAttend/updateCandidateSeminarAttend`,
        seminarAttendField,
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