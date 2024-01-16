import React, { useState } from 'react';
import "./Programs.css"



function Programs() {
  // const [courses, setCourses] = useState([{}]);


  const [ProgramsData, setProgramsData] = useState({
   
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
    awards_won:'',
    extra_activities:'',
    any_other_info:'',
    expected_joining_time:''
  });

  const handleAddseminar_organised = () => {
    setProgramsData((prevData) => ({
      ...prevData,
      seminar_organised: [...prevData.seminar_organised, {
        organise_date_from: '',
      organise_date_to: '',
      name_of_course: '',
      sponsered_by: '',
      participants_number: '',
      name_of_institute: '',
      name_of_industry: '',
      
      }]
    }));
  };

  const handleAddseminar_attend = () => {
    setProgramsData((prevData) => ({
      ...prevData,
      seminar_attend: [...prevData.seminar_attend, {
        attend_date_from: '',
        attend_date_to: '',
        name_of_course: '',
        sponsered_by: '',        
      }]
    }));
  };
  const handleAddother_membership_info = () => {
    setProgramsData((prevData) => ({
      ...prevData,
      other_membership_info: [...prevData.other_membership_info, {
        member_of_institute_name: '',
        membership_date_from: '',
        membership_date_to: '',
        position_held: '',
        contribution: ''      
      }]
    }));
  };

  const handleOrganisedInputChange = (index, field, value) => {
    setProgramsData((prevData) => {
      const newData = { ...prevData };
      newData.seminar_organised[index][field] = value;
      return newData;
    });
  };

  const handleAttendInputChange = (index, field, value) => {
    setProgramsData((prevData) => {
      const newData = { ...prevData };
      newData.seminar_attend[index][field] = value;
      return newData;
    });
  };

  const handleOtherMembershipInputChange = (index, field, value) => {
    setProgramsData((prevData) => {
      const newData = { ...prevData };
      newData.other_membership_info[index][field] = value;
      return newData;
    });
  };
  const handleInputChange = (field, value) => {
    setProgramsData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form ProgramsData:', ProgramsData);
  };

  return (
    <>
    <form method="post" onSubmit={handleSubmit}>
    <div className="container">
      <div style={{marginTop:"20px"}}>
        <div>
          <h5 className="UD-heading">Seminars/Short Term Courses/Summer Schools/Winter Schools</h5>
          <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
          </p>
        </div>

  

        {/* Organized*/}

        <div>
          <p className="HS-heading">Organized  <button onClick={handleAddseminar_organised} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {ProgramsData.seminar_organised.map((seminar_organised, index) => (
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
                value={seminar_organised.organise_date_from}
                onChange={(e) => handleOrganisedInputChange(index, 'organise_date_from', e.target.value)}
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
                value={seminar_organised.organise_date_to}
                onChange={(e) => handleOrganisedInputChange(index, 'organise_date_to', e.target.value)}
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
  onChange={(e) => handleOrganisedInputChange(index, 'name_of_course', e.target.value)}
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
  onChange={(e) => handleOrganisedInputChange(index, 'sponsered_by', e.target.value)}
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
                onChange={(e) => handleOrganisedInputChange(index, 'participants_number', e.target.value)}
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
                onChange={(e) => handleOrganisedInputChange(index, 'name_of_institute', e.target.value)}
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
                onChange={(e) => handleOrganisedInputChange(index, 'name_of_industry', e.target.value)}
              ></input>
            </div>
          </div>

        
        </div>
        </div>
        ))}

            {/* Attended*/}

          <div>
          <p className="HS-heading">Attended   <button onClick={handleAddseminar_attend} type="button" className="editprofile-plus-button">+</button></p>
        </div>

        {ProgramsData.seminar_attend.map((seminar_attend, index) => (
<div key={index}>
        <div className="row" >
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
                id=""
                value={seminar_attend.attend_date_from}
                onChange={(e) => handleAttendInputChange(index, 'attend_date_from', e.target.value)}
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
                id=""
                value={seminar_attend.attend_date_to}
                onChange={(e) => handleAttendInputChange(index, 'attend_date_to', e.target.value)}
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
                value={seminar_attend.name_of_course}
                onChange={(e) => handleAttendInputChange(index, 'name_of_course', e.target.value)}
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
                id=""
                value={seminar_attend.sponsered_by}
                onChange={(e) => handleAttendInputChange(index, 'sponsered_by', e.target.value)}
              ></input>
            </div>
          </div>


        </div>
        </div>
        ))}

 {/* Other Information*/}

 <div>
          <p className="HS-heading">Other Information<button onClick={handleAddother_membership_info} type="button" className="editprofile-plus-button">+</button></p>
        </div>
        {ProgramsData.other_membership_info.map((other_membership_info, index) => (
           <div key={index}>
        {/* <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
  
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of Professional Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name=""
                id=""
               
              ></input>
            </div>
          </div>


        </div> */}

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Membership of University/Institute/Industry Bodies*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Membership of University/Institute/Industry Bodies/Professional Bodies
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name="member_of_institute_name"
                id=""
                value={other_membership_info.member_of_institute_name}
                onChange={(e) => handleOtherMembershipInputChange(index, 'member_of_institute_name', e.target.value)}
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
                value={other_membership_info.membership_date_from}
                onChange={(e) => handleOtherMembershipInputChange(index, 'membership_date_from', e.target.value)}
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
                value={other_membership_info.membership_date_to}
                onChange={(e) => handleOtherMembershipInputChange(index, 'membership_date_to', e.target.value)}
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
                onChange={(e) => handleOtherMembershipInputChange(index, 'position_held', e.target.value)}
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
                onChange={(e) => handleOtherMembershipInputChange(index, 'contribution', e.target.value)}
              ></input>
            </div>
          </div>
          </div>
        
      
          </div>
          
         ))} 







{/* --------------------------------------------------------------------------------------- */}



          <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/* Awards/Recognitions Won, If any*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Awards/Recognitions Won, If any
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name="awards_won"
                id=""
                value={ProgramsData.awards_won}
                onChange={(e) => handleInputChange('awards_won', e.target.value)}
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/*Brief Description of Co-curricular and Extra-Curricular Activities*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Brief Description of Co-curricular and Extra-Curricular Activities



              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name="extra_activities"
                id=""
                value={ProgramsData.extra_activities}
                onChange={(e) => handleInputChange('extra_activities', e.target.value)}
              ></input>
            </div>
          </div>


        </div>

        <div className="row" style={{ marginTop: "-30px" }}>
          <div className="col-md-12">
            {/*Any Other Relevant Information You May Like To Furnish Especially About Citation Of Your Research Work*/}
            <div className="UD-form-section">
              <label className="UD-SetLabel-Name">
                <span></span>Any Other Relevant Information You May Like To Furnish Especially About Citation Of Your Research Work
              </label>
              <input
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name="any_other_info"
                id=""
                value={ProgramsData.any_other_info}
                onChange={(e) => handleInputChange('any_other_info', e.target.value)}
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
              style={{width:"95%"}}
                className="UD-set-input"
                type="text"
                placeholder=""
                name="expected_joining_time"
                id=""
                value={ProgramsData.expected_joining_time}
                onChange={(e) => handleInputChange('expected_joining_time', e.target.value)}
              ></input>
            </div>
          </div>
        </div> 

      </div>
    </div>
    <button type="submit">
        Submit
      </button>
    </form>
  </>
  )
}

export default Programs