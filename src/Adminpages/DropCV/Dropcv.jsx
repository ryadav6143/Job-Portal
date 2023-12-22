import React from "react";
import "./DropCV.css";
import { withRouter } from 'react-router-dom';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Qualification from "./Qualification/Qualification";
import Experience from "./Experience/Experience";
import OTPVerification from "./OTPVerifivation/OTPVerification";

const steps = ["", "", ""];

function Dropcv() {

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

  const handleVerifivation = ({ history })=>{
    alert("Your CV has been submitted")
    history.push('/otp-verifivation');
  }

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
                <Button onClick={handleVerifivation}>Next Step</Button>   
                {/* Reset butto here  */}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <PersonalDetails />}
              {activeStep === 1 && <Qualification />}
              {activeStep === 2 && <Experience />}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                className="prev-btn"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Previous step
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} className="next-btn">
                  {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
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
