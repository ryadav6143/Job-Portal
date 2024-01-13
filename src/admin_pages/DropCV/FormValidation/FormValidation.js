// FormValidation.js
import React, { useEffect } from "react";

const FormValidation = ({ formData, setFormValid }) => {
  useEffect(() => {
    // Your validation logic based on formData
    const isFormValid = validateForm(formData);
    setFormValid(isFormValid);
  }, [formData, setFormValid]);

  const validateForm = (data) => {
    // Add your validation logic here
    // For example, check if required fields are filled

    if (
      !data.title_first_name ||
      !data.first_name ||
      !data.dob ||
      !data.gender ||
      !data.email ||
      !data.contact_1 ||
      !data.country ||
      !data.city ||
      !data.job_category_master_id ||
      !data.applied_post_masters_id ||
      !data.subjects_master_id
    ) {
      return false;
    }

    // Add more specific validation if needed

    return true; // If all required fields are filled
  };

  // You can return null or some UI elements if needed
  return null;
};

export default FormValidation;
