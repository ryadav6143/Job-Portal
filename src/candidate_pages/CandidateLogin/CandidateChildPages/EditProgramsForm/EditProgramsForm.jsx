import React, { useState,useEffect } from "react";
import "./EditProgramsForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import candidatesApiService from "../../../candidateService";
function EditProgramsForm() {
  const [courses, setCourses] = useState([{}]);
  const [organised, setOrganised] = useState([{}]);
  const [attend, setAttend] = useState([{}]);
  const [data, setData] = useState([{}]);



  // seminar_attend: [{
    //     attend_date_from: '',
    //     attend_date_to: '',
    //     name_of_course: '',
    //     sponsered_by: '',
  
    //   }],
    //   other_membership_info: [{
    //     member_of_institute_name: '',
    //     membership_date_from: '',
    //     membership_date_to: '',
    //     position_held: '',
    //     contribution: ''
    //   }],
    //   awards_won:'',
    //   extra_activities:'',
    //   any_other_info:'',
    //   expected_joining_time:''
    // });



  // const handleAddCourse = () => {
  //   setCourses([...courses, {}]);
  // };
  const handleAddOrganised = () => {
    setOrganised([...organised, {}]);
  };
  const handleOtherAttend = () => {
    setAttend([...attend, {}]);
  };
  const handleChange = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem('Token');
        accessToken = JSON.parse(accessToken);
        // console.log("accessToken", accessToken.token);
        const fetchedData = await candidatesApiService.getCandidateById(accessToken.token);
        console.log("response", fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


  const handleOrganisedChange = (index, field, value) => {
    const updatedOrganised = [...organised];
    updatedOrganised[index][field] = value;
    setOrganised(updatedOrganised);
  };
  const handleOtherAttendChange = (index, field, value) => {
    const updatedAttend = [...attend];
    updatedAttend[index][field] = value;
    setAttend(updatedAttend);
  };
  return (
    <>
      <form id="myForm">
        <div
          className="container"
          style={{ marginTop: "90px", paddingLeft: "50px" }}
        >
          <div>
            <div>
              <h5 className="UD-heading">
                Seminars/Short Term Courses/Summer Schools/Winter Schools &nbsp;{" "}
                <FontAwesomeIcon
              className="edit-pen-icon"
                  icon={faPen}
                />
              </h5>
              <p className="UD-subheading">
                Please fill your information so we can get in touch with you.
              </p>
            </div>

            {/* Organized*/}

            <div>
              <p className="HS-heading">
                Organized{" "}
                <button
                  onClick={handleAddOrganised}
                  type="button"
                  className="editprofile-plus-button"
                >
                  +
                </button>
              </p>
            </div>

            {data?.candidate_seminar_organiseds?.map((organised, index) => (
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
                        placeholder="MM/DD/YYYY "
                        name="organise_date_from"
                        id=""
                        value={organised.organise_date_from}
                        onChange={(e) => handleOrganisedChange(index, "organise_date_from", e.target.value)}
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
                        value={organised.organise_date_to}
                        onChange={(e) => handleOrganisedChange(index, "organise_date_to", e.target.value)}
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
                        value={organised.name_of_course}
                        onChange={(e) => handleOrganisedChange(index, "name_of_course", e.target.value)}
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
                        value={organised.sponsered_by}
                        onChange={(e) => handleOrganisedChange(index, "sponsered_by", e.target.value)}
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
                        value={organised.participants_number}
                        onChange={(e) => handleOrganisedChange(index, "participants_number", e.target.value)}
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
                        value={organised.name_of_institute}
                        onChange={(e) => handleOrganisedChange(index, "name_of_institute", e.target.value)}
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
                        value={organised.name_of_industry}
                        onChange={(e) => handleOrganisedChange(index, "name_of_industry", e.target.value)}
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
                  onClick={handleOtherAttend}
                  type="button"
                  className="editprofile-plus-button"
                >
                  +
                </button>
              </p>
            </div>

            {data?.candidate_seminar_attends?.map((attend, index) => (
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
                        placeholder="MM/DD/YYYY "
                        name="attend_date_from"
                        value={attend.attend_date_from}
                        onChange={(e) => handleOtherAttendChange(index, "attend_date_from", e.target.value)}
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
                        name="attend_date_to"
                    
                        value={attend.attend_date_to}
                        onChange={(e) => handleOtherAttendChange(index, "attend_date_to", e.target.value)}
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
                        value={attend.name_of_course}
                        onChange={(e) => handleOtherAttendChange(index, "name_of_course", e.target.value)}
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
                        value={attend.sponsered_by}
                        onChange={(e) => handleOtherAttendChange(index, "sponsered_by", e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Other Information*/}

            <div>
              <p className="HS-heading">Other Information</p>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col-md-12">
                {/* Membership of Professional Bodies*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Membership of Professional Bodies
                  </label>
                  <input
                    style={{ width: "95%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name=""
                    id=""
                    
                    required
                  ></input>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col-md-12">
                {/* Membership of University/Institute/Industry Bodies*/}
                <div className="UD-form-section">
                  <label className="UD-SetLabel-Name">
                    <span></span>Membership of University/Institute/Industry
                    Bodies
                  </label>
                  <input
                    style={{ width: "95%" }}
                    className="UD-set-input"
                    type="text"
                    placeholder=""
                    name=""
                    id=""
                    required
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
                    name=""
                    id=""
                    required
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
                    name=""
                    id=""
                    required
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
                    name=""
                    id=""
                    required
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
                    name=""
                    id=""
                    required
                  ></input>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-md-12">
                  {/* Membership of Professional Bodies*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Membership of Professional Bodies
                    </label>
                    <input
                      style={{ width: "95%" }}
                      className="UD-set-input"
                      type="text"
                      placeholder=""
                      name=""
                      id=""
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-md-12">
                  {/* Membership of University/Institute/Industry Bodies*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Membership of University/Institute/Industry
                      Bodies
                    </label>
                    <input
                      style={{ width: "95%" }}
                      className="UD-set-input"
                      type="text"
                      placeholder=""
                      name=""
                      id=""
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-md-12">
                  {/* Membership of Professional Bodies*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Membership of Professional Bodies
                    </label>
                    <input
                      style={{ width: "95%" }}
                      className="UD-set-input"
                      type="text"
                      placeholder=""
                      name=""
                      id=""
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-md-12">
                  {/* Membership of University/Institute/Industry Bodies*/}
                  <div className="UD-form-section">
                    <label className="UD-SetLabel-Name">
                      <span></span>Membership of University/Institute/Industry
                      Bodies
                    </label>
                    <input
                      style={{ width: "95%" }}
                      className="UD-set-input"
                      type="text"
                      placeholder=""
                      name=""
                      id=""
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="savebtn" type="button">
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
