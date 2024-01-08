import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import "./DropCV.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import PersonalDeatils from "./PersonalDetails/PersonalDeatils";
import PersonalDeatils from "./PersonalDetails/PersonalDeatils";
import Qualification from "./Qualification/Qualification";
import CurrentExperience from "./CurrentExperience/CurrentExperience";
// import ApiServices from './Services/ApiServices';
import apiService from "../../Services/ApiServices";
import { data } from "jquery";

const steps = ["", "", ""];

function Dropcv() {
  // .......................................................................................................
  const navigate = useNavigate();
  const [formDataPersonal, setFormDataPersonal] = useState({});
  const [formDataQualification, setFormDataQualification] = useState({});
  const [formDataExperience, setFormDataExperience] = useState({});

  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);

  const isStep1Complete = () => {
    return (
      data.title_first_name &&
      data.first_name &&
      data.dob &&
      data.gender &&
      data.email &&
      data.contact_1 &&
      data.country &&
      data.city
    );
  };

  const isStep2Complete = (data) => {
    return (
      data.selectedExam &&
      data.selectedDegree &&
      data.formData.highest_education_status
    );
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalSubmit = (data) => {
    setFormDataPersonal(data);
    if (isStep1Complete(data)) {
      setStep1Completed(true);
      handleNext();
    }
  };

  const handleQualificationSubmit = (data) => {
    setFormDataQualification(data);
    if (isStep2Complete(data)) {
      setStep2Completed(true);
      handleNext();
    }
  };

  const handleExperienceSubmit = (data) => {
    setFormDataExperience(data);
    handleNext();
  };
  // .......................................................................................................

  const [formData, setFormData] = useState({
    personalDetails: {},
    qualification: {},
    currentExperience: {},
  });

  const handleSubmit = async () => {
    const combinedFormData = {
      personalDetails: formDataPersonal,
      qualification: formDataQualification,
      currentExperience: formDataExperience,
    };
    try {
      // Use the ApiServices to make a POST request
      const response = await apiService.postFormData(
        "http://192.168.29.155:8090/v1/api/candidates",
        formData
      );

      // Handle the response as needed
      console.log("Form submitted successfully:", response);

      // You can redirect or perform other actions based on the response
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors
    }
  };

  const handleFormSubmit = (formData) => {
    // Handle the form data in DropCV component
    console.log("Form data received in DropCV:", formData);
    // Perform any additional actions based on the form data
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleVerifivation = () => {
    navigate("/verify");
  };

  return (
    <>
      <Header></Header>
      <div className="contact-forms">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleVerifivation} type="submit">
                  Next
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <PersonalDeatils onFormSubmit={handlePersonalSubmit} />
              )}
              {activeStep === 1 && (
                <Qualification
                  onFormSubmit={handleQualificationSubmit}
                  formData={formDataQualification}
                />
              )}
              {activeStep === 2 && (
                <CurrentExperience
                  onFormSubmit={handleExperienceSubmit}
                  formData={formDataExperience}
                />
              )}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  className="prev-btn"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Previous
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  onClick={() => {
                    if (
                      (activeStep === 0 && isStep1Complete(formDataPersonal)) ||
                      (activeStep === 1 &&
                        isStep2Complete(formDataQualification))
                    ) {
                      handleNext();
                    } else {
                      console.log(data.toString);
                    }
                  }}
                  className="next-btn"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Dropcv;
