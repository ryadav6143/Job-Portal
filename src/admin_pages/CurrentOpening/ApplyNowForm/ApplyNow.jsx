import React,{useState} from "react";
import "./ApplyNow.css";
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
// import { useState } from "react";
import apiService from "../../../Services/ApiServices";
const steps = ["", "", "", "", "", ""];
function ApplyNow() {

  const [otpButtonclicked, setOtpButtonclicked] = useState(false);

  const [otpData, setOtpData] = useState({});


  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [formValues, setFormValues] = useState({
    UserDetails: {
      password: "123456",
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
      specialization:'',
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
      experiences: [
        {
          company_experience_name: '',
          designation: '',
          gross_pay: '',
          exp_work_from: '',
          exp_work_to: ''
        }
      ],
      total_academic_exp: '',
      total_industrial_exp: '',
      benefits_accommodation: '',
      benefits_transportation: '',
      benefits_food: '',
      benefits_mediclaim: '',
      benefits_others: '',
      // --------------------------------------------------------------------
      researches: [{ orcid: '', scopusid: '', researchid: '' }],
      journal_publications: [{
        journal_publication_year: '',
        journal_publication_title: '',
        journal_publication_author: '',
        journal_publication_index: '',
        journal_publication_name: '',
        journal_publication_issn: '',
        journal_publication_volume: '',
        journal_publication_issue: ''
      }],
      conference_publications: [{
        conference_publication_year: '',
        conference_publication_title: '',
        conference_publication_author: '',
        conference_publication_index: '',
        conference_publication_name: '',
        conference_publication_issn: '',
        conference_publication_volume: '',
        conference_publication_issue: ''
      }],
      patents: [{
        patent_applicationid: '',
        patent_application_title: '',
        patent_application_year: '',
        patent_granted_by: '',
        patent_incountry: ''
      }],
      copyrights: [{
        copyright_applicationid: '',
        copyright_title: '',
        copyright_year: '',
        copyright_granted_by: '',
        copyright_incountry: '',


      }],


      seminar_organised: [{
        organise_date_from: '',
        organise_date_to: '',
        name_of_course: '',
        sponsered_by: '',
        participants_number: '',
        name_of_institute: '',
        name_of_industry: '',

      }],
      seminar_attend: [{
        attend_date_from: '',
        attend_date_to: '',
        name_of_course: '',
        sponsered_by: '',

      }],
      other_membership_info: [{
        member_of_institute_name: '',
        membership_date_from: '',
        membership_date_to: '',
        position_held: '',
        contribution: ''
      }],
      awards_won: '',
      extra_activities: '',
      any_other_info: '',
      expected_joining_time: '',

      reference_person_1: '',
      reference_person_2: '',
      ref_org_1: '',
      ref_org_2: '',
      ref_person_position_1: '',
      ref_person_position_2: '',
      hearing_source_about_us: '',
      application_purpose: '',
      ref_person_1_email: '',
      ref_person_2_email: '',
      ref_person_1_contact: '',
      ref_person_2_contact: '',
      candidate_cv: '',
    },

  });
  const [selectedComponent, setSelectedComponent] = useState();
  const [formValuesToSend, setformValuesToSend] = useState();




  // const transferAllData =async ()=>{
  //   try {          
  //     const formValuesToSend = new formValues();
  //       Object.entries(formValues.UserDetails).forEach(([key, value]) => {
  //               formValuesToSend.append(key, JSON.stringify(value));         
  //              });
  //     console.log("formValuesToSend", formValuesToSend);
  //     setformValuesToSend(formValuesToSend);

  //   } catch (error) {
  //     setOtpButtonclicked(true);
  //     console.error(
  //       "Error while posting form data and file:",
  //       error.response || error
  //     );
  //     console.log(error.response);
  //   }
  //   const otpData={
  //     email: formValues.UserDetails.email,
  //     contact_1: formValues.UserDetails.contact_1,
  //   }
  //   setOtpData(otpData)

  //   const response = await apiService.generateOTP(otpData);
  //   console.log("API Response:", response);
  //   setSelectedComponent("OTPVerification");

  // }


  const transferAllData = async () => {
    try {
      const formValuesToSend = { UserDetails: { ...formValues.UserDetails } };
      setformValuesToSend(formValuesToSend);
      const otpData = {
        email: formValues.UserDetails.email,
        contact_1: formValues.UserDetails.contact_1,
        first_name:formValues.UserDetails.first_name
      };
      setOtpData(otpData);
      const response = await apiService.generateOTP(otpData);
      console.log("API Response:", response);
      setSelectedComponent("OTPVerification");
      setOtpButtonclicked(true);
    } catch (error) {
      setOtpButtonclicked(true);
      console.error("Error while posting form data and file:", error.response || error);
      console.log(error.response);
    }
  };


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



  let componentToShow;
  switch (selectedComponent) {
    case "OTPVerification":
      componentToShow = (
        <OTPVerification otpData={otpData} transferAllData={formValuesToSend} />
      );
      break;
    default:
      componentToShow = null;
  }
  return (
    <>
      <Header></Header>
      <div className={otpButtonclicked ? "apply-now-forms hidden" : "apply-now-forms"}>
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
                <Button onClick={transferAllData}>Get OTP</Button>
                {/* Reset butto here  */}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <UserDetails formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 1 && <UserQualification formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 2 && <UserExperience formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 3 && <ResearchWorks formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 4 && <Programs formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 5 && <Reference formValues={formValues.UserDetails} setFormValues={setFormValues} />}
              {activeStep === 6 && <OTPVerification />}
              {activeStep === 7 && <Submitsuccess />}
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
      <Footers></Footers>
    </>
  );
}

export default ApplyNow;
