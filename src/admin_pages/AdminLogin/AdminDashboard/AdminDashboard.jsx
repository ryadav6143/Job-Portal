import React from "react";
import { Outlet, Route } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./AdminDashboard.css";
import Sidenav from "../../TestPages/Sidenav";
import AdminHeader from "../admin_header/AdminHeader";

function AdminDashboard() {
  return (
    
    <div style={{margin:0,padding:0}} >

    
    <div style={{display:"flex", position:"sticky", top:0 ,zIndex:50}}>
      <AdminHeader/>
    </div>
    <div style={{display:"flex", justifyContent:"space-between", position:"relative" }}>
          <div style={{ display:"flex" , textAlign:"left" , width:'30%', overflow:"scroll"}}> <SideBar/></div>
          <div style={{flexGrow:1 }}> <Outlet/> </div>

    </div>
  

      
     
      {/* <Route path="admin-dashboard" element= {<SideBar component ={<AdminDashboard />} />}></Route>, */}
      
      </div>
   
  );
}

export default AdminDashboard;
