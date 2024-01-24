import React, { useState,useEffect } from "react";
import plusicon from "../../../../assets/logos/plus-sign.png"
import "./EditProgramsForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import candidatesApiService from "../../../candidateService";
function EditProgramsForm() {
  const [courses, setCourses] = useState([{}]);
  const [data, setData] = useState([{}]);
  const handleAddCourse = () => {
    setCourses([...courses, {}]);
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
  return (
    <>
      <form id="myForm">
        <div
          className="container"
          style={{ marginTop: "90px", paddingLeft: "50px", paddingRight: "50px" }}
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
                  onClick={handleAddCourse}
                  type="button"
                  className="plus-buttons">
                  <img src={plusicon} />
                </button>
              </p>
            </div>

            {courses.map((course, index) => (
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
                        name=""
                        id=""
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
                        name={`dateTo_${index}`}
                        id={`dateTo_${index}`}
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
                        name={`courseName_${index}`}
                        id={`courseName_${index}`}
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
                        name={`sponsoredBy_${index}`}
                        id={`sponsoredBy_${index}`}
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
                        name={`participants_${index}`}
                        id={`participants_${index}`}
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
                        name={`fromInstitutes_${index}`}
                        id={`fromInstitutes_${index}`}
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
                        name={`fromIndustry_${index}`}
                        id={`fromIndustry_${index}`}
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
                  onClick={handleAddCourse}
                  type="button"
                  className="plus-buttons">
                  <img src={plusicon} />
                </button>
              </p>
            </div>

            {courses.map((course, index) => (
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
                        name={`dateFrom_${index}`}
                        id={`dateFrom_${index}`}
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
                        name={`dateTo_${index}`}
                        id={`dateTo_${index}`}
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
                        name={`courseName_${index}`}
                        id={`courseName_${index}`}
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
                        name={`sponsoredBy_${index}`}
                        id={`sponsoredBy_${index}`}
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
                    style={{ width: "99.5%" }}
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
                    style={{ width: "99.5%" }}
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

            <div className="row" style={{ marginTop: "-20px" }}>
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
                      style={{ width: "99.5%" }}
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
                      style={{ width: "99.5%" }}
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
                      style={{ width: "99.5%" }}
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
                      style={{ width: "99.5%" }}
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
