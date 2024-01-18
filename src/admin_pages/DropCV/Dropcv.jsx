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

const steps = ["", "", ""];

function Dropcv() {
  const [otpButtonClicked, setOtpButtonClicked] = useState(false);
  const [otpData, setOtpData] = useState("");
  const [formErrors, setFormErrors] = useState({});
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
      subjects_master_id: "",
      applied_post_masters_id: "",
      applied_subpost_master_id: "",
      job_category_master_id: "",
      educations: [initialEducation],
      total_experience: "",
      total_research_exp: "",
      total_industrial_exp: "",
      current_organization: "",
      current_designation: "",
      current_salary: "",
    },
  });
  // new state for errors in all steps
  const [errors, setErrors] = useState({});

  const [formDataToSend, setformDataToSend] = useState();
  const [selectedComponent, setSelectedComponent] = useState();
  const transferAllData = () => {
    try {
      // Create FormData object
      const formDataToSend = new FormData();

      Object.entries(formData.personalDetails).forEach(([key, value]) => {
        // Check if the value is an array (specifically 'educations')
        if (key === "educations" && Array.isArray(value)) {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          // If not an array, append as usual
          formDataToSend.append(key, value);
        }
      });

      setformDataToSend(formDataToSend);
      setOtpButtonClicked(true);

      console.log("formDataToSend", formDataToSend);
    } catch (error) {
      console.error(
        "Error while posting form data and file:",
        error.response || error
      );
      console.log(error.response.data);
    }
    setSelectedComponent("OTPVerification");
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
    const isCurrentStepValid = validateCurrentStep();

    if (isCurrentStepValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      // alert("Please fill in all required fields before proceeding.");
    }
  };

  // --------------------------------------------------------------------------------
  const validateCurrentStep = () => {
    // modified validation function for all steps
    const {
      title_first_name,
      first_name,
      middle_name,
      last_name,
      dob,
      gender,
      email,
      password,
      contact_1,
      country,
      city,
      subjects_master_id,
      applied_post_masters_id,
      applied_subpost_master_id,
      job_category_master_id,
    } = formData.personalDetails;

    let errors = {};

    switch (activeStep) {
      case 0:
        if (!title_first_name) {
          errors.title_first_name = "! Title is required.";
        }

        if (!first_name) {
          errors.first_name = "! First name is required.";
        }

        if (!dob) {
          errors.dob = "! Date of birth is required.";
        }

        if (!gender) {
          errors.gender = "! Gender is required.";
        }

        if (!email) {
          errors.email = "! Email is required.";
        }

        if (!contact_1) {
          errors.contact_1 = "! Contact number is required.";
        }

        if (!country) {
          errors.country = "! Country is required.";
        }

        if (!city) {
          errors.city = "! City is required.";
        }
        if (!job_category_master_id) {
          errors.category_name = "! Category is required";
        }
        if (!applied_post_masters_id) {
          errors.post_name = "! Post is required";
        }

        if (!subjects_master_id) {
          errors.subject_name = "! Subject is required";
        }

        if (Object.keys(errors).length > 0) {
          // If there are errors, set the state with error messages
          setErrors(errors);
          return false;
        } else {
          setErrors({});
          return true;
        }

      case 1:
        if (
          formData.personalDetails.educations.some(
            (education) =>
              !education.degree_types_master_id ||
              !education.exam_types_master_id ||
              !education.degree_status
          )
        ) {
          setErrors({ qualification: "Education details are incomplete." });
          return false;
        } else if (!applied_post_masters_id || !subjects_master_id) {
          setErrors({
            qualification: "Applied Post Masters and Subjects are required.",
          });
          return false;
        } else {
          setErrors({});
          return true;
        }

      case 2:
      // if (!formData.personalDetails.current_organization) {
      //   setErrors({
      //     currentExperience: "Current Organization is required.",
      //   });
      //   return false;
      // } else if (!formData.personalDetails.current_designation) {
      //   setErrors({
      //     currentExperience: "Current Designation is required.",
      //   });
      //   return false;
      // } else {
      //   setErrors({});
      //   return true;
      // }

      case 2:

      default:
        return true;
    }
  };

  // --------------------------------------------------------------------------------

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setErrors({});
  };

  const handleVerifivation = () => {
    // alert("Your CV has been submitted");
    navigate("/verify");
  };
  // ----------------------------------------------------------

  // const showComponent = async (componentName) => {
  //   setSelectedComponent(componentName);

  // };
  let componentToShow;
  switch (selectedComponent) {
    case "OTPVerification":
      componentToShow = (
        <OTPVerification otpData={otpData} transferAllData={formDataToSend} />
      );
      break;
    default:
      componentToShow = null;
  }
  // ----------------------------------------------------------
  return (
    <>
      <Header></Header>
      <div
        className={otpButtonClicked ? "contact-forms hidden" : "contact-forms"}
      >
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
                <Button onClick={transferAllData}>Get OTP</Button>
                {/* <Button type="button"  onClick={handleGetOTP}>Get OTP</Button> */}
                {/* <Button>Next</Button> */}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <PersonalDeatils
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                  // passed errors and set errors states as props
                  errors={errors}
                  setErrors={setErrors}
                />
              )}
              {activeStep === 1 && (
                <Qualification
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                  // passed errors and set errors states as props
                  errors={errors}
                  setErrors={setErrors}
                />
              )}
              {activeStep === 2 && (
                <CurrentExperience
                  formData={formData.personalDetails}
                  setFormData={setFormData}
                  errors={errors}
                  setErrors={setErrors} // Make sure you pass setErrors as a prop
                  setFormErrors={setFormErrors}
                />
              )}
              {activeStep === 3 && <OTPVerification />}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {activeStep > 0 && (
                  <Button
                    className="prev-btn"
                    color="inherit"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Previous
                  </Button>
                )}
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
