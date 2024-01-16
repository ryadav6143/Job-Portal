import React from "react";
import "./DropCV.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDeatils from "./PersonalDetails/PersonalDeatils";
import Qualification from "./Qualification/Qualification";
import CurrentExperience from "./CurrentExperience/CurrentExperience";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footers";
import OTPVerification from "./OTPVerifivation/OTPVerification";
import apiService from "../../Services/ApiServices";
const steps = ["", "", ""];

function Dropcv() {
  const [otpData,setOtpData]=useState({});
  const initialEducation = {
    degree_types_master_id: "",
    exam_types_master_id: "",
    degree_status: "",
  };
  const [formData, setFormData] = useState({
    personalDetails: {
      title_first_name: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      dob: "",
      gender: "",
      email: "",
      password: "khbasfkbnebhnolgne",
      contact_1: "",
      country: "",
      city: "",
      subjects_master_id: 0,
      applied_post_masters_id: 0,
      applied_subpost_master_id: 0,
      job_category_master_id: 0,
      educations: [initialEducation],
      total_experience: "",
      total_research_exp: "",
      total_industrial_exp: "",
      current_organization: "",
      current_designation: "",
      current_salary: "",
    },
  });
  const [formDataToSend, setformDataToSend] = useState(); 
  const [selectedComponent, setSelectedComponent] = useState();
const transferAllData =async ()=>{
  try {
    // Create FormData object
    const formDataToSend = new FormData();

    Object.entries(formData.personalDetails).forEach(([key, value]) => {

      if (key === "educations" && Array.isArray(value)) {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        // If not an array, append as usual
        formDataToSend.append(key, value);
      }
    });
    console.log("formDataToSend", formDataToSend);
    setformDataToSend(formDataToSend);
  } catch (error) {
    console.error(
      "Error while posting form data and file:",
      error.response || error
    );
    console.log(error.response.data);
  }
  const otpData={
    email: formData.personalDetails.email,
    contact_1: formData.personalDetails.contact_1,
  }
  setOtpData(otpData)
  
  const response = await apiService.generateOTP(otpData);
  console.log("API Response:", response);
  setSelectedComponent("OTPVerification");

}
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
      
    console.log("Form Data:", formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleVerifivation = () => {
    // alert("Your CV has been submitted");
    navigate("/verify");
  };
  // ----------------------------------------------------------
  
  
  let componentToShow;
  switch (selectedComponent) {
    case "OTPVerification":
      componentToShow = <OTPVerification otpData={otpData} transferAllData={formDataToSend} />;
      break;
      default:
        componentToShow=null;
  }
  // ----------------------------------------------------------
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
                <Button
                  onClick={transferAllData}                
                >
                  Get OTP
                </Button>
             
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <PersonalDeatils
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                />
              )}
              {activeStep === 1 && (
                <Qualification
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                />
              )}
              {activeStep === 2 && (
                <CurrentExperience
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                />
              )}
              {activeStep === 3 && <OTPVerification />}

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
      <div>{componentToShow}</div>
      <Footer></Footer>
    </>
  );
}

export default Dropcv;
