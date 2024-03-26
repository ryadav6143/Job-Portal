import { useState } from 'react'
import axios from "axios";
// import {CANDIDATE_BASE_URL} from "../config/config"
import { CANDIDATE_BASE_URL } from "../config/config";
// const CANDIDATE_BASE_URL = "http://192.168.1.8:8090/v1/api";


const candidatesApiService = (() => {
  // const [accessToken,setAccessToken]=useState("");
  let accessToken = sessionStorage.getItem('Token') ? JSON.parse(sessionStorage.getItem('Token')) : null;
  console.log("candidatesApiService-accessToken", accessToken)
  return {

    setAccessToken: (token) => {
      console.log("setAccessToken", token)
      accessToken = token
    },

    getAccessToken: () => {
      accessToken = sessionStorage.getItem('Token')
      return accessToken;
    },

    uploadCV: async (formData) => {
      try {
        const response = await axios.put(`${CANDIDATE_BASE_URL}/candidates/upload_cv`, formData, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response;
      } catch (error) {
        throw error;
      }
    },

    loginCandidate: (data) => {
      return axios.post(`${CANDIDATE_BASE_URL}/login/candidate_login`, data);
    },
    ForgetCandidatePassword: (data) => {
      return axios.put(`${CANDIDATE_BASE_URL}/candidates/candidate_forgot_password`, data);
    },

    getCandidateById: async () => {
      try {
        // console.log("getCandidateById-accessToken",accessToken)
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidates/getCandidatePersonal`, {
          headers: {
            'access-token': accessToken.token,
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getEducationById: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatEducation/getCandidateEducation`, {
          headers: {
            'access-token': accessToken.token,
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getExperienceById: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatExperience/getCandidateExperience`, {
          headers: {
            'access-token': accessToken.token,
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getCandidateResearchWork: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidates/getCandidateResearchPageById`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getCandidateSeminarPage: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidates/getCandidateSeminarPageById`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    uploadProfileImage: async (file) => {
      try {
        let formData = new FormData();
        formData.append('profile_image', file);
        // formData.append('candidate_id', candidatesId);

        const response = await fetch(`${CANDIDATE_BASE_URL}/candidates/profile_image`, {
          method: 'PUT',
          body: formData,
          headers: {
            'access-token': accessToken.token,
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

    fetchCandidateImage: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidates/renderCandidatePic`, {
          headers: {
            'access-token': accessToken.token,
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

    updateCandidatePersonalInfo: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidates/updateCandidatePersonalById`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateEducation: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatEducation/updateCandidateEducation`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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

    updateCandidateExperience: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatExperience/updateCandidateExperience`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateResearches: async (researchField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatResearch/updateCandidateResearchWork`,
          researchField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateJournalPublications: async (journalPublicationField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatJournalPublication/updateCandidateJournalPublications`,
          journalPublicationField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateConferancePublications: async (ConferancePublicationField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatConferancePublication/updateCandidateConferancePublications`,
          ConferancePublicationField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidatePatent: async (patentField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatPatent/updateCandidatePatent`,
          patentField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateCopyright: async (copyrightField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatCopyright/updateCandidateCopyright`,
          copyrightField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateMembershipInfo: async (membershipInfoField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateMembershipInfo/updateCandidateMembershipInfo`,
          membershipInfoField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateSeminarOrganised: async (seminarOrganisedField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateSeminarOrganised/updateCandidateSeminarOrganised`,
          seminarOrganisedField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateCandidateSeminarAttend: async (seminarAttendField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateSeminarAttend/updateCandidateSeminarAttend`,
          seminarAttendField,
          {
            headers: {
              'access-token': accessToken.token,
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
    addCandidateOrganised: async (formData) => {
      try {
        const response = await axios.post(`${CANDIDATE_BASE_URL}/candidateSeminarOrganised/addCandidateSeminarOrganised`, formData, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    addCandidateAttend: async (formData) => {
      try {
        const response = await axios.post(`${CANDIDATE_BASE_URL}/candidateSeminarAttend/addCandidateSeminarAttend`, formData, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    addCandidateOtherinfo: async (formData) => {
      try {
        const response = await axios.post(`${CANDIDATE_BASE_URL}/candidateMembershipInfo/addCandidateMembershipInfo`, formData, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getCandidateOrganised: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidateSeminarOrganised/getCandidateSeminarOrganised`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getCandidateAttend: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidateSeminarAttend/getCandidateSeminarAttend`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    getCandidateMembershipInfo: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidateMembershipInfo/getCandidateMembershipInfo`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateOrganisedForm: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateSeminarOrganised/updateSeminarOrganized`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateAttendForm: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateSeminarAttend/updateSeminarAttend`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    updateOtherInfoForm: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidateMembershipInfo/updateOtherMembershipInfo`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    DeleteOrganisedForm: async (organisedId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidateSeminarOrganised/removeCandidateSeminarOrganised`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              organised_id: organisedId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },
    DeleteAttendForm: async (attendId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidateSeminarAttend/removeCandidateSeminarAttend`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              attend_id: attendId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },
    DeleteOtherInfoForm: async (OtherInfoId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidateMembershipInfo/removeCandidateMembershipInfo`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              member_id: OtherInfoId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },

    getCandidateResearch: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatResearch/getCandidateResearchWork`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateCandidateResearch: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatResearch/updateCandidateResearchWork`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    DeleteResearchForm: async (researchId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidatResearch/removeCandidateResearchWork`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              research_id: researchId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },
    

    getCandidateCopyright: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatCopyright/getCandidateCopyright`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateCandidateCopyright: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatCopyright/updateCandidateCopyright`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    removeCandidateCopyright: async (copyrightsId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidatCopyright/removeCandidateCopyright`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              copyright_id: copyrightsId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },

    getCandidateJournalPublications: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatJournalPublication/getCandidateJournalPublications`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateCandidateJournalPublications: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatJournalPublication/updateCandidateJournalPublications`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    removeCandidateJournalPublications: async (journalPublicationId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidatJournalPublication/removeCandidateJournalPublications`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              journal_publication_id: journalPublicationId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },


    getCandidateConferancePublications: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatConferancePublication/getCandidateConferancePublications`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateCandidateConferancePublications: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatConferancePublication/updateCandidateConferancePublications`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    removeCandidateConferancePublications: async (conferancePublicationId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidatConferancePublication/removeCandidateConferancePublications`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              copyright_id: conferancePublicationId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },

    getCandidatePatent: async () => {
      try {
        const response = await axios.get(`${CANDIDATE_BASE_URL}/candidatPatent/getCandidatePatent`, {
          headers: {
            'access-token': accessToken.token,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
    updateCandidatePatent: async (updateField) => {
      try {
        const response = await axios.put(
          `${CANDIDATE_BASE_URL}/candidatPatent/updateCandidatePatent`,
          updateField,
          {
            headers: {
              'access-token': accessToken.token,
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
    removeCandidatePatent: async (PatentsId) => {
      try {
        const response = await axios.delete(
          `${CANDIDATE_BASE_URL}/candidatPatent/removeCandidatePatent`,
          {
            headers: {
              'access-token': accessToken.token,
            },
            data: {
              copyright_id: PatentsId
            }
          }
        );
    
        console.log('Save Changes Response:', response);
        return response.data; 
      } catch (error) {
        console.error('Error saving changes:', error.message);
        throw error;
      }
    },


  };
})();



export default candidatesApiService;