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

const steps = ["", "", ""];

function Dropcv() {
  


  

  const [formData, setFormData] = useState({
    personalDetails: {},
    qualification: {},
    currentExperience: {},
  });

  const handlePersonalSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: data,
    }));
  };

  const handleQualificationSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      qualification: data,
    }));
  };

  const handleExperienceSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      currentExperience: data,
    }));
  };

  const handleSubmit = () => {
    console.log("Combined Form Data:", formData);

    // Perform any additional actions based on the combined form data
  };



  // .......................................................................................................
  const navigate = useNavigate();
  const [formDataPersonal, setFormDataPersonal] = useState({});
  const [formDataQualification, setFormDataQualification] = useState({});
  const [formDataExperience, setFormDataExperience] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handlePersonalSubmit = (data) => {
  //   setFormDataPersonal(data);
  //   handleNext();
  // };

  // const handleQualificationSubmit = (data) => {
  //   setFormDataQualification(data);
  //   handleNext();
  // };

  // const handleExperienceSubmit = (data) => {
  //   setFormDataExperience(data);
  //   handleNext();
  // };
  // // .......................................................................................................

  // const [formData, setFormData] = useState({
  //   personalDetails: {},
  //   qualification: {},
  //   currentExperience: {},
  // });

  // const handleSubmit = async () => {
  //   const combinedFormData = {
  //     personalDetails: formDataPersonal,
  //     qualification: formDataQualification,
  //     currentExperience: formDataExperience,
  //   };
  //   try {
  //     // Use the ApiServices to make a POST request
  //     const response = await apiService.postFormData(
  //       "http://192.168.1.15:8090/v1/api/candidates",
  //       combinedFormData
  //     );

  //     // Handle the response as needed
  //     console.log("Form submitted successfully:", response);

  //     // You can redirect or perform other actions based on the response
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Handle errors
  //   }
  // };

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
  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

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
                {/* <Button onClick={handleVerifivation} type="submit">Next</Button> */}
                <Button onClick={handleSubmit} type="submit">
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
                <Button onClick={handleNext} className="next-btn">
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
