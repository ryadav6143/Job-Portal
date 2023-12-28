import React from "react";
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
import  { useState } from 'react';
// import ApiServices from './Services/ApiServices';
import apiService from "../../Services/ApiServices";


const steps = ["", "", ""];

function Dropcv() {




  const [formData, setFormData] = useState({
    personalDetails: {},
    qualification: {},
    currentExperience: {},
  });

  const handleSubmit = async () => {
    try {
      // Use the ApiServices to make a POST request
      const response = await apiService.postFormData('http://192.168.29.155:8090/v1/api/candidates', formData);

      // Handle the response as needed
      console.log('Form submitted successfully:', response);

      // You can redirect or perform other actions based on the response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors
    }
  };

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleVerifivation = () => {
    // alert("Your CV has been submitted");
    navigate("/otp-verifivation");
  };

  return (
    <>
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
                <Button onClick={handleSubmit} type="submit">Next</Button>
               
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <PersonalDeatils updateFormData={(data) => setFormData({ ...formData, personalDetails: data })} />}
              {activeStep === 1 && <Qualification updateFormData={(data) => setFormData({ ...formData, qualification: data })} />}
              {activeStep === 2 && <CurrentExperience updateFormData={(data) => setFormData({ ...formData, currentExperience: data })}/>}
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
                <Button onClick={handleNext}  className="next-btn">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>           
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}

export default Dropcv;
