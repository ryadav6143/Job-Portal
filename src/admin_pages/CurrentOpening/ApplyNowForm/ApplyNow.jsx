import React,{useState} from "react";
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

const steps = ["", "", "", "", "", ""];
function ApplyNow() {
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
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    UserDetails: {
      email: "",
      contact_1: "",
      title_first_name: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      dob: "",
      gender: "",
      religion: "",
      cast_category_name: "",
      marital_status: "",
      address_1: "",
      contact_2: "",
      country: "",
      state_province: "",
      pin_code: "",
    },
  });

  // from fields for step 1
  const validateSteps = () => {
    const {
      contact_1,
      email,
      title_first_name,
      first_name,
      middle_name,
      last_name,
      dob,
      gender,
      religion,
      cast_category_name,
      marital_status,
      address_1,
      contact_2,
      country,
      state_province,
      pin_code,
    } = formData.UserDetails;
    let errors = {};

    switch (activeStep) {
      case 0:
        if (!email) {
          errors.email = "! Email is Required";
        }
        if (!contact_1) {
          errors.contact_1 = "! Contact Number is Required";
        }
        if (!title_first_name) {
          errors.title = "! Title is Required";
        }
        if (!first_name) {
          errors.first_name = "! First Name is Required";
        }
        if (!middle_name) {
          errors.middle_name = "! middle Name is Required";
        }
        if (!last_name) {
          errors.last_name = "! last Name is Required";
        }
        if (!dob) {
          errors.dob = "! Date of Birth is Required";
        }
        if (!gender) {
          errors.gender = "! Gender is Required";
        }
        if (!religion) {
          errors.religion = "! Religion is Required";
        }
        if (!cast_category_name) {
          errors.cast = "! Cast Category is Required";
        }
        if (!marital_status) {
          errors.maratial_status = "! Maratial Status is Required";
        }
        if (!address_1) {
          errors.address = "! Address Status is Required";
        }
        if (!contact_2) {
          errors.other_contact = "! Other Contact Status is Required";
        }
        if (!country) {
          errors.country = "! Country is Required";
        }
        if (!state_province) {
          errors.state_province = "! State is Required";
        }
        if (!pin_code) {
          errors.pincode = "! Pin Code is Required";
        }
      case 1:
      // validation for Academic Professional Qualifications
      case 2:
      // validatiob for Experience
      case 3:
      // validation for Research Work
      case 4:
      // validation for Seminars/Short Term Courses/Summer Schools/Winter Schools
      case 5:
      // validation for Reference
      default:
        return true;
    }
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
              {activeStep === 0 && <UserDetails />}
              {activeStep === 1 && <UserQualification />}
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
