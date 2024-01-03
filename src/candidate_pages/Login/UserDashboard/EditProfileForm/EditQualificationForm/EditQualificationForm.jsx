import React from 'react'
import "./EditQualificationForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import UserHeader from '../../UserHeader/UserHeader';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function EditQualificationForm() {
  return (
   <>
 
    <div className="container">
        <div>
          <div>
            <h5 className="UD-heading">Academic Professional Qualifications &nbsp; <FontAwesomeIcon style={{color:"rgb(112 112 112 / 78%)"}} icon={faPen} /></h5>
            <p className="UD-subheading">
            Please fill your information so we can get in touch with you.
            </p>

            {/* Add edit button */}
          </div>

          {/* High School */}
          <div>
              <p className='HS-heading'>High School</p>
              </div>

          <div className="row"  style={{marginTop :"-40px"}}>
           
          <div className="col-md-4">
              {/* *Country */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span> Country
                </label>
                <select name="" className="UD-set-dropdown">
                  <option value="">Select country</option>
                  <option value=""> country</option>
                  <option value=""> country</option>
                  <option value=""> country</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              {/* *Year of Joining */}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Year of Joining
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

            <div className="col-md-4">
              {/* *School*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>School
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
              {/* *Board*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Board
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

            <div className="col-md-4">
              {/* *Passing Year*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Passing Year
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

            <div className="col-md-4">
              {/* *Division (First/Second/Third)*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Division (First/Second/Third)
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
              {/* *Aggregate Percentage/CGPA*/}
              <div className="UD-form-section">
                <label className="UD-SetLabel-Name">
                  <span>*</span>Aggregate Percentage/CGPA
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

          {/* Higher secondary */}

          <div>
              <p className='HS-heading'>Higher secondary</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span> Country
                 </label>
                 <select name="" className="UD-set-dropdown">
                   <option value="">Select country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                 </select>
               </div>
             </div>
 
             <div className="col-md-4">
               {/* *Year of Joining */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Year of Joining
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
 
             <div className="col-md-4">
               {/* *School*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>School
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
               {/* *Board*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Board
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
 
             <div className="col-md-4">
               {/* *Passing Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Passing Year
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
 
             <div className="col-md-4">
               {/* *Division (First/Second/Third)*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Division (First/Second/Third)
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
               {/* *Aggregate Percentage/CGPA*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Aggregate Percentage/CGPA
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

             <div className="col-md-4">
               {/* *Stream*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span>*</span>Stream
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


           {/* Graduation*/}

          <div>
              <p className='HS-heading'>Graduation</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select name="" className="UD-set-dropdown">
                   <option value="">Select country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                 </select>
               </div>
             </div>
 
             <div className="col-md-4">
               {/* *Year of Joining */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year of Joining
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
 
             <div className="col-md-4">
               {/* University/ Board*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>University/ Board
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
               {/* Institute/ College*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Institute/ College
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
 
             <div className="col-md-4">
               {/* Degree Name*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Degree Name
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
 
             <div className="col-md-4">
               {/* Passing Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Passing Year
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
               {/* Specialization/ Area*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Specialization/ Area
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

             <div className="col-md-4">
               {/* Aggregate Percentage/CGPA*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Aggregate Percentage/CGPA
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


            {/* Post Graduation*/}

          <div>
              <p className='HS-heading'>Post Graduation</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select name="" className="UD-set-dropdown">
                   <option value="">Select country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                 </select>
               </div>
             </div>
 
             <div className="col-md-4">
               {/* *Year of Joining */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year of Joining
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
 
             <div className="col-md-4">
               {/* University/ Board*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>University/ Board
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
               {/* Institute/ College*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Institute/ College
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
 
             <div className="col-md-4">
               {/* Degree Name*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Degree Name
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
 
             <div className="col-md-4">
               {/* Passing Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Passing Year
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
               {/* Specialization/ Area*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Specialization/ Area
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

             <div className="col-md-4">
               {/* Aggregate Percentage/CGPA*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Aggregate Percentage/CGPA
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


 {/* M. Phil*/}

 <div>
              <p className='HS-heading'>M. Phil</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select name="" className="UD-set-dropdown">
                   <option value="">Select country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                 </select>
               </div>
             </div>
 
             <div className="col-md-4">
               {/* *Year of Joining */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year of Joining
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
 
             <div className="col-md-4">
               {/* University/ Board*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>University/ Board
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
               {/* Institute/ College*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Institute/ College
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
 
             <div className="col-md-4">
               {/* Degree Name*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Degree Name
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
 
             <div className="col-md-4">
               {/* Passing Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Passing Year
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
               {/* Specialization/ Area*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Specialization/ Area
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

             <div className="col-md-4">
               {/* Aggregate Percentage/CGPA*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Aggregate Percentage/CGPA
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

           {/* PhD*/}

 <div>
              <p className='HS-heading'>PhD</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
           <div className="col-md-4">
               {/* *Country */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span> Country
                 </label>
                 <select name="" className="UD-set-dropdown">
                   <option value="">Select country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                   <option value=""> country</option>
                 </select>
               </div>
             </div>
 
             <div className="col-md-4">
               {/* *Year of Joining */}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year of Joining
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
 
             <div className="col-md-4">
               {/* University/ Board*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>University/ Board
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
               {/* Institute/ College*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Institute/ College
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
 
             <div className="col-md-4">
               {/* Degree Name*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Degree Name
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
 
             <div className="col-md-4">
               {/* Passing Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Passing Year
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
               {/* Specialization/ Area*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Specialization/ Area
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

             <div className="col-md-4">
               {/* Aggregate Percentage/CGPA*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Aggregate Percentage/CGPA
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


            {/* Qualified Examination*/}

 <div>
              <p className='HS-heading'>Qualified Examination</p>
              </div>

              <div className="row"  style={{marginTop :"-40px"}}>
           
              <div className="col-md-4">
               {/* Gate*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Gate
                 </label>
                 <input
                   className="UD-set-input"
                   type="text"
                   placeholder="Yes/No "
                   name=""
                   id=""
                   
                   required
                 ></input>
              
               </div>
             </div>
 
             <div className="col-md-4">
               {/* Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year
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
 
             <div className="col-md-4">
               {/* NET*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>NET
                 </label>
                 <input
                   className="UD-set-input"
                   type="text"
                   placeholder=" Yes/No"
                   name=""
                   id=""
                   
                   required
                 ></input>
              
               </div>
             </div>
           </div>
 
           <div className="row">
           <div className="col-md-4">
               {/* Year*/}
               <div className="UD-form-section">
                 <label className="UD-SetLabel-Name">
                   <span></span>Year
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
 
          
           <div>
  <button className="savebtn" type="button">Save Changes</button>
</div>

        </div>
      </div>
   </>
  )
}

export default EditQualificationForm