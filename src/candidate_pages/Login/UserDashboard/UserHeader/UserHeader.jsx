import React from 'react'
import "./UserHeader.css"

import "./UserHeader.css";
import logo from "../../../../assets/logos/medi-logo.png";
import logout from "../../../../assets/logos/Logout.png";
import reset from "../../../../assets/logos/Reset.png";
import EditPersonalDetails from '../EditProfileForm/EditPersonalDetails/EditPersonalDetails';
import pdicon from "../../../../assets/logos/pdicon.png"
import { Link } from 'react-router-dom';



function UserHeader({ isOpen, onClose }){
  return (
    <>

    {/* ---------------header start------------ */}
    <div className="user-header">
    <div className="logo-coloured">
      <img src={logo} className="user-logo" />
    </div>
    <div className="logs">
      <img src={reset} className="log-res" />
      <img src={logout} className="log-res" />
    </div>
  </div>
  {/* ---------header end----------- */}


<div className='row1'>
  <div className='col-md-2'>
    
  <div className='set-sidebar'>
    <div>

    <ul style={{listStyle:'none'}}>
    <Link to="" ><img src={pdicon}></img>Personal  Details</Link>
    <Link to="" >Academic Professional Qualifications</Link>
    <Link to="" >Experience</Link>
    <Link to="" >Research Work</Link>
    <Link to="" >Seminars/Short Term Courses/Summer Schools/Winter Schools</Link>
    <Link to="" >Reference/ Resume</Link>
    <Link to="" >Current  Openings</Link>
   </ul>
    </div>
   
  </div>
  </div>
  <div className='col-md-10'>
  <EditPersonalDetails></EditPersonalDetails>
  </div>

</div>
 

  
</>
);

  
}

export default UserHeader
