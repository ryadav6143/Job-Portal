import React, { useState, useEffect } from "react";
import plusicon from "../../../../assets/logos/plus-sign.png";

import "./EditProgramsForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";


import candidatesApiService from "../../../candidateService";
function EditProgramsForm() {
  const [data, setData] = useState([{
    candidate_seminar_organiseds: [],
    candidate_seminar_attends: [],
    candidate_other_membership_infos: [],
    awards_won: "",
    extra_activities: "",
    any_other_info: '',
    expected_joining_time: '',
  }]);
  const [loading, setLoading] = useState(true);
  const [updateField, setUpdateField] = useState({})
  const [membershipInfoField, setMembershipInfoField] = useState({})
  const [seminarOrganisedField, setSeminarOrganisedField] = useState({})
  const [seminarAttendField, setSeminarAttendField] = useState({})
  const fetchData = async () => {
    try {
      let accessToken = localStorage.getItem('Token');
      accessToken = JSON.parse(accessToken);
      // console.log("accessToken", accessToken.token);
      setLoading(true);
      const fetchedData = await candidatesApiService.getCandidateById(accessToken.token);
      console.log("response", fetchedData);
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const body = document.body;
    if (loading) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [loading]);


  const handleAddOrganised = () => {
    setData((prevData) => ({
      ...prevData,
      candidate_seminar_organiseds: [
        ...prevData.candidate_seminar_organiseds,
        {
          organise_date_from: '',
          organise_date_to: '',
          name_of_course: '',
          sponsered_by: '',
          participants_number: '',
          name_of_institute: '',
          name_of_industry: '',
        },
      ],
    }));
  };






  const handleAddOtherAttend = () => {
    setData((prevData) => ({
      ...prevData,
      candidate_seminar_attends: [
        ...prevData.candidate_seminar_attends,
        {
          attend_date_from: '',
          attend_date_to: '',
          name_of_course: '',
          sponsered_by: '',
        },
      ],
    }));
  };
  const handleAddOtherInfo = () => {
    setData((prevData) => ({
      ...prevData,
      candidate_other_membership_infos: [
        ...prevData.candidate_other_membership_infos,
        {
          member_of_institute_name: '',
          membership_date_from: '',
          membership_date_to: '',
          position_held: '',
          contribution: ''
        },
      ],
    }));
  };


  const handleOrganisedChange = (index, field, value) => {
    const updatedOrganised = [...data.candidate_seminar_organiseds];
    const seminarOrganisedId = updatedOrganised[index].id;
    updatedOrganised[index][field] = value;
    setData((prevData) => ({
      ...prevData,
      candidate_seminar_organiseds: updatedOrganised,
    }));
    console.log("handleField", field, value, seminarOrganisedField);
    setSeminarOrganisedField((prev) => ({
      ...prev,
      [field]: value.toString(),
      organised_id: seminarOrganisedId,
    }));
  };



  const handleOtherAttendChange = (index, field, value) => {
    const updatedAttend = [...data.candidate_seminar_attends];
    const seminarAttendId = updatedAttend[index].id;
    updatedAttend[index][field] = value;
    setData((prevData) => ({
      ...prevData,
      candidate_seminar_attends: updatedAttend,
    }));
    console.log("handleField", field, value, seminarAttendField);
    setSeminarAttendField((prev) => ({
      ...prev,
      [field]: value.toString(),
      attend_id: seminarAttendId,
    }));
  };
  const handleOtherInformationChange = (index, field, value) => {
    const updatedOtherInfo = [...data.candidate_other_membership_infos];
    const otherInfoId = updatedOtherInfo[index].id;
    updatedOtherInfo[index][field] = value;
    setData((prevData) => ({
      ...prevData,
      candidate_other_membership_infos: updatedOtherInfo,
    }));
    console.log("handleField", field, value, membershipInfoField);
    setMembershipInfoField((prev) => ({
      ...prev,
      [field]: value.toString(),
      member_id: otherInfoId,
    }));
  };
  const handleChange = (fieldName, value) => {
    console.log("handlefild", fieldName, value, updateField)
    setUpdateField(prev => ({ ...prev, [fieldName]: value.toString() }))
    setData(prev => ({ ...prev, [fieldName]: value.toString() }))
  };



  const formatDateForInput = (dateString) => {
    const dateObject = new Date(dateString);
  
    // Check if dateString is empty or dateObject is invalid
    if (!dateString || isNaN(dateObject.getTime())) {
      return ''; // Return an empty string for invalid or empty dates
    }
  
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
  
    return `${year}-${month}-${day}`;
  };
  

  const hasChanges = (field) => {
    return field && Object.keys(field).length > 0;
  };
  const handleSaveChanges = async () => {
    try {
      let accessToken = localStorage.getItem('Token');
      accessToken = JSON.parse(accessToken);

      if (membershipInfoField && hasChanges(membershipInfoField)) {
        await candidatesApiService.updateCandidateMembershipInfo(accessToken.token, { other_membership_info: [membershipInfoField] });
      }
      if (updateField && hasChanges(updateField)) {
        await candidatesApiService.updateCandidatePersonalInfo(accessToken.token, updateField);
      }
      if (seminarOrganisedField && hasChanges(seminarOrganisedField)) {
        await candidatesApiService.updateCandidateSeminarOrganised(accessToken.token, { seminar_organised: [seminarOrganisedField] });
      }
      if (seminarAttendField && hasChanges(seminarAttendField)) {
        await candidatesApiService.updateCandidateSeminarAttend(accessToken.token, { seminar_attend: [seminarAttendField] });
      }
      setSeminarAttendField();
      setSeminarOrganisedField();
      setUpdateField();
      setMembershipInfoField();
      fetchData();
    } catch (error) {
      console.error('Error saving changes:', error.message);
    }
  };



  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <form id="myForm" onSubmit={handleSaveChanges}>
        <div
          className="container"
          style={{
            marginTop: "90px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <div>
              <h5 className="UD-heading">
                Seminars/Short Term Courses/Summer Schools/Winter Schools &nbsp;{" "}
                <FontAwesomeIcon className="edit-pen-icon" icon={faPen} />
              </h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* Organized*/}

            {/* <div>
              <p className="HS-heading">
                Organized{" "}
                <button
                  onClick={handleAddOrganised}
                  type="button"
                  className="plus-buttons"
                >
                  <img src={plusicon} />
                </button>
              </p>
            </div> */}
              <div>
              <p className="HS-heading">Organized<button onClick={handleAddOrganised} type="button" className="editprofile-plus-button">+</button></p>
            </div>

            {data?.candidate_seminar_organiseds?.map((seminar_organised, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col-md-4">
                    {/* Date From*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date From
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        name="organise_date_from"
                        id=""
                        value={formatDateForInput(seminar_organised.organise_date_from)}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "organise_date_from",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Date To */}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date To
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder=" MM/DD/YYYY"
                        name="organise_date_to"
                        id=""
                        value={formatDateForInput(seminar_organised.organise_date_to)}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "organise_date_to",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Name of the Course*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Name of the Course
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="name_of_course"
                        id=""
                        value={seminar_organised.name_of_course}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "name_of_course",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {/* Sponsored By*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Sponsored By
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="sponsered_by"
                        id=""
                        value={seminar_organised.sponsered_by}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "sponsered_by",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* No. of Participants */}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>No. of Participants
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="participants_number"
                        id=""
                        value={seminar_organised.participants_number}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "participants_number",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* From Institutes*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>From Institutes
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="name_of_institute"
                        id=""
                        value={seminar_organised.name_of_institute}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "name_of_institute",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {/* From Industry*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>From Industry
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="name_of_industry"
                        id=""
                        value={seminar_organised.name_of_industry}
                        onChange={(e) =>
                          handleOrganisedChange(
                            index,
                            "name_of_industry",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Attended*/}

            <div>
              <p className="HS-heading">
                Attended{" "}
                <button
                  onClick={handleAddOtherAttend}
                  type="button"
                  className="plus-buttons"
                >
                  <img src={plusicon} />
                </button>
              </p>
            </div>

            {data?.candidate_seminar_attends?.map((seminar_attend, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col-md-4">
                    {/* Date From*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date From
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder="dd/mm/yyyy"
                        name="attend_date_from"
                        value={formatDateForInput(seminar_attend.attend_date_from)}
                        onChange={(e) =>
                          handleOtherAttendChange(
                            index,
                            "attend_date_from",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Date To */}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date To
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder="dd/mm/yyyy"
                        name="attend_date_to"
                        value={formatDateForInput(seminar_attend.attend_date_to)}
                        onChange={(e) =>
                          handleOtherAttendChange(
                            index,
                            "attend_date_to",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Name of the Course*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Name of the Course
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="name_of_course"
                        value={seminar_attend.name_of_course}
                        onChange={(e) =>
                          handleOtherAttendChange(
                            index,
                            "name_of_course",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {/* Sponsored By Institute/Industry*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Sponsored By Institute/Industry
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="sponsered_by"
                        value={seminar_attend.sponsered_by}
                        onChange={(e) =>
                          handleOtherAttendChange(
                            index,
                            "sponsered_by",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Other Information*/}

            <div>
              <p className="HS-heading">Other Information<button onClick={handleAddOtherInfo} type="button" className="editprofile-plus-button">+</button></p>
            </div>

            {data?.candidate_other_membership_infos?.map((other_membership_info, index) => (
              <div key={index}>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <div className="col-md-12">
                    {/* Membership of University/Institute/Industry Bodies*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Membership of University/Institute/Industry
                        Bodies/Professional Bodies
                      </label>
                      <input
                        style={{ width: "95%" }}
                        className="UD-set-input"
                        type="text"
                        placeholder=""
                        name="member_of_institute_name"
                        id=""
                        value={other_membership_info.member_of_institute_name}
                        onChange={(e) =>
                          handleOtherInformationChange(
                            index,
                            "member_of_institute_name",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                {/* Attended*/}

                <div>
                  <p className="HS-heading">Attended</p>
                </div>

                <div className="row" style={{ marginTop: "-30px" }}>
                  <div className="col-md-4">
                    {/* Date From*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date From
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder="MM/DD/YYYY "
                        name="membership_date_from"
                        id=""
                        value={formatDateForInput(other_membership_info.membership_date_from)}
                        onChange={(e) =>
                          handleOtherInformationChange(
                            index,
                            "membership_date_from",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Date To */}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Date To
                      </label>
                      <input
                        className="UD-set-input"
                        type="date"
                        placeholder=" MM/DD/YYYY"
                        name="membership_date_to"
                        id=""
                        value={formatDateForInput(other_membership_info.membership_date_to)}
                        onChange={(e) =>
                          handleOtherInformationChange(
                            index,
                            "membership_date_to",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    {/* Position Held*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Position Held
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="position_held"
                        id=""
                        value={other_membership_info.position_held}
                        onChange={(e) =>
                          handleOtherInformationChange(index, "position_held",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {/* Contribution*/}
                    <div className="UD-form-section">
                      <label className="UD-SetLabel-Name">
                        <span></span>Contribution
                      </label>
                      <input
                        className="UD-set-input"
                        type="text"
                        placeholder=" "
                        name="contribution"
                        id=""
                        value={other_membership_info.contribution}
                        onChange={(e) => handleOtherInformationChange(index, "contribution", e.target.value)}
                      ></input>

                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col-md-12">
                {/* Awards/Recognitions Won, If any*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Awards/Recognitions Won, If any
                  </label>
                  <input
                    style={{ width: "99.5%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="awards_won"
                    id=""
                    value={data.awards_won}
                    onChange={(e) => handleChange("awards_won", e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col-md-12">
                {/*Brief Description of Co-curricular and Extra-Curricular Activities*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Brief Description of Co-curricular and
                    Extra-Curricular Activities
                  </label>
                  <input
                    style={{ width: "99.5%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="extra_activities"
                    id=""
                    value={data.extra_activities}
                    onChange={(e) =>
                      handleChange("extra_activities", e.target.value)
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "-20px" }}>
              <div className="col-md-12">
                {/*Any Other Relevant Information You May Like To Furnish Especially About Citation Of Your Research Work*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Any Other Relevant Information You May Like To
                    Furnish Especially About Citation Of Your Research Work
                  </label>
                  <input
                    style={{ width: "95%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="any_other_info"
                    id=""
                    value={data.any_other_info}
                    onChange={(e) =>
                      handleChange("any_other_info", e.target.value)
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col-md-12">
                {/*Period For Joining The Post, If Selected*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Period For Joining The Post, If Selected
                  </label>
                  <input
                    style={{ width: "95%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name="expected_joining_time"
                    id=""
                    value={data.expected_joining_time}
                    onChange={(e) =>
                      handleChange("expected_joining_time", e.target.value)
                    }
                  ></input>
                </div>
              </div>
            </div>

            <div>
              <button className="savebtn" type="button" onClick={handleSaveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditProgramsForm;
