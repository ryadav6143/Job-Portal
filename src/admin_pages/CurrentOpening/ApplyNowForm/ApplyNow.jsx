import React from "react";
import "./ApplyNow.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserDetails from "../ApplyNowForm/UserDetails/UserDetails";
import UserExperience from "./UserExperience/UserExperience";
import ResearchWorks from "./ResearchWorks/ResearchWorks";
import UserQualification from "./UserQualification/UserQualification";
import Programs from "./Programs/Programs";
import Reference from "./Reference/Reference";
import OTPVerification from "../../DropCV/OTPVerifivation/OTPVerification";
import Submitsuccess from "../../DropCV/OTPVerifivation/Submitsuccess";
import Header from "../../../components/Header/Header";
import Footers from "../../../components/Footer/Footers";
import { useState } from "react";
const steps = ["", "", "", "", "", ""];
function ApplyNow() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [formValues, setFormValues] = useState({
    UserDetails: {
        email: '',
    contact_1: '',
    title_first_name: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    dob: '',
    gender: '',
    religion: '',
    city: '',
    cast_category_name: '',
    marital_status: '',
    address_1: '',
    contact_2: '',
    country: '',
    state_province: '',
    applied_post_masters_id: "",
    nature_of_job: '',
    department_master_id: '',
    pin_code: '',
    educations: [
      {
        exam_types_master_id: 7,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
      }, // educations[0] mein highSchool ka data
      {
        exam_types_master_id: 8,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
        stream: '',
      }, // educations[1] mein higherSecondary ka data
      {
        exam_types_master_id: 2,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[2] mein Graduation ka data
      {
        exam_types_master_id: 3,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[3] mein PostGraduation ka data
      {
        exam_types_master_id: 5,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
      }, // educations[4] mein MPHIL ka data
      {
        exam_types_master_id: 4,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        degree_types_name: '',
        year_end: '',
        grade_percent: '',
        specialization_area_1: '',
        specialization_area_2: '',
        specialization_area_3: '',
      }, // educations[5] mein Phd ka data
      {
        exam_types_master_id: 11,

        year_end: '',
      }, // educations[6] mein Gate ka data
      {
        exam_types_master_id: 9,

        year_end: '',
      },// educations[7] mein Neet ka data
      {
        exam_types_master_id: 1,
        country: '',
        year_start: '',
        institute_name: '',
        board_university_name: '',
        year_end: '',
        grade_division: '',
        grade_percent: '',
        stream: '',
      },// educations[8] mein Diploma ka data
    ],


    
    },
    
  });



  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    console.log("Form formValues:", formValues);
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
      <Header></Header>
      <div className="apply-now-forms">
        <Box sx={{ width: "100%" }}>
          <div className="my-stepper">
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
          </div>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleVerifivation}>Next</Button>
                {/* Reset butto here  */}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <UserDetails  formValues={formValues.UserDetails} setFormValues={setFormValues}/>}
              {activeStep === 1 && <UserQualification  formValues={formValues.UserDetails} setFormValues={setFormValues}/>}
              {activeStep === 2 && <UserExperience />}
              {activeStep === 3 && <ResearchWorks />}
              {activeStep === 4 && <Programs />}
              {activeStep === 5 && <Reference />}
              {activeStep === 6 && <OTPVerification />}
              {activeStep === 7 && <Submitsuccess />}
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

export default ApplyNow;
