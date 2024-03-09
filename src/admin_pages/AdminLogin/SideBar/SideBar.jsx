import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MasterCurrentOpening from "../AdminChildPages/MasterCurrentOpening/MasterCurrentOpening";
import MasterJobProfile from "../AdminChildPages/MasterJobProfile/MasterJobProfile";
import MasterInterviewSchedule from "../AdminChildPages/MasterInterviewSchedule/MasterInterviewSchedule";
import MasterFAQ from "../AdminChildPages/MasterFAQ/MasterFAQ";
import AddPostApplied from "../MasterPages/AddPostApplied";
import AddSubPostApplied from "../MasterPages/AddSubPostApplied";
import AddDepartment from "../MasterPages/AddDepartment";
import AddExamType from "../MasterPages/AddExamType";
import AddDegree from "../MasterPages/AddDegree";
import AddCategories from "../MasterPages/AddCategories";
// import Reports from "../Reports/Reports";
import AdminList from "../SuperAdmin/AdminList";
// import CreateRole from "../SuperAdmin/CreateRole";
import GetRole from "../SuperAdmin/GetRole";
import GetRights from "../SuperAdmin/GetRights";
import AddSubjects from "../MasterPages/AddSubjects";
import "./SideBar.css";
import opening from "../../../assets/logos/book.png";
import interview from "../../../assets/logos/interview.png";
import reports from "../../../assets/logos/report.png";
import superadmin from "../../../assets/logos/setting.png";
import list from "../../../assets/logos/list.png";
import jobprofile from "../../../assets/logos/jobprofile.png";
// import CreateRights from "../SuperAdmin/CreateRight";

function SideBar() {
  // ---------------------------------------------------------------------------------------
  const [selectedComponent, setSelectedComponent] = useState();
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    // case "admin-dashboard/master":
    //   componentToShow = <MasterCurrentOpening />;
    //   break;
    // case "Component2":
    //   componentToShow = <MasterJobProfile />;
    //   break;
    // case "Component3":
    //   componentToShow = <MasterInterviewSchedule />;
    //   break;
    case "Component4":
      componentToShow = <MasterFAQ />;
      break;
    case "Component5":
      componentToShow = <AddPostApplied />;
      break;
    case "Component6":
      componentToShow = <AddSubPostApplied />;
      break;
    case "Component7":
      componentToShow = <AddDepartment />;
      break;
    case "Component8":
      componentToShow = <AddExamType />;
      break;
    case "Component9":
      componentToShow = <AddDegree />;
      break;
    case "Component10":
      componentToShow = <AddCategories />;
      break;
    case "Component11":
      // componentToShow = <Reports />;
      break;
    case "Component12":
      componentToShow = <AdminList />;
      break;
    case "Component13":
      componentToShow = <GetRole />;
      break;
    case "Component14":
      componentToShow = <GetRights />;
      break;
    // case "Component15":
    //   componentToShow = <CreateRole />;
    //   break;
    // case "Component17":
    //   componentToShow = <CreateRights />;
    //   break;
    case "Component16":
      componentToShow = <AddSubjects />;
      break;
    default:
      // componentToShow = <MasterCurrentOpening />;
      break;
  }
  return (
    <>
      <div>
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto px-3 sidebar-set">
              <div
                id="sidebar"
                class="collapse collapse-horizontal show border-end edit-collapse"
              >
                <div style={{ marginTop: "50px" }}>
                  <div
                    id="sidebar-nav"
                    class="list-group border-0 rounded-0 text-sm-start min-vh-100"
                  >
                  <Link to="/admin-dashboard/current-openings" className="list-group-item border-end-0 d-inline-block text-truncate set-a">
                  <img src={opening} className="bi bi-bootstrap sidenav-icon" alt="Opening Icon" /> <span> Master Current Opening</span>
                  </Link>
                  <Link to="/admin-dashboard/job-profile" className="list-group-item border-end-0 d-inline-block text-truncate set-a">
                    <img src={jobprofile} className="bi bi-bootstrap sidenav-icon" alt="Opening Icon" /> <span> Master Job Profile</span>
                  </Link>
                  <Link to="/admin-dashboard/interview-schedule" className="list-group-item border-end-0 d-inline-block text-truncate set-a">
                  <img src={interview} className="bi bi-bootstrap sidenav-icon" alt="Opening Icon" /> <span>Master Interview Schedule</span>
                  </Link>
                 

                    <div className="dropdown show">
                    {/* <Link to="/admin-dashboard/reports" className="list-group-item border-end-0 d-inline-block text-truncate set-a">
                  <img src={reports} className="bi bi-bootstrap sidenav-icon" alt="Opening Icon" /> <span>Reports</span>
                  </Link> */}
                      <a
                        className="btn dropdown-toggle set-a"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={reports}
                          class="bi bi-heart sidenav-icon"
                        ></img>{" "}
                        <span>Reports</span>
                      </a>

                      <div
                        className="dropdown-menu master-dd"
                        aria-labelledby="dropdownMenuLink"
                      >
                         <Link to="/admin-dashboard/reports" className="list-group-item border-end-0 d-inline-block text-truncate set-a">
                  <img src={reports} className="bi bi-bootstrap sidenav-icon" alt="Opening Icon" /> <span>Applied Candidates</span>
                  </Link>
                        {/* <a
                          className="dropdown-item "
                          href="#"
                          onClick={() => showComponent("Component11")}
                        >
                          Applied Candidates
                        </a> */}
                      </div>
                    </div>

                    <div className="dropdown show">
                      <a
                        className="btn dropdown-toggle set-a"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={list} class="bi bi-heart sidenav-icon"></img>{" "}
                        <span>Master List</span>
                      </a>

                      <div
                        className="dropdown-menu master-dd"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component5")}
                        >
                          Post Applied For
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component6")}
                        >
                          Sub Post Applied For
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component7")}
                        >
                          Departments
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component8")}
                        >
                          Exam Type
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component9")}
                        >
                          Degree (degree_types_master )
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component10")}
                        >
                          Categories
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component16")}
                        >
                          Add Subjects
                        </a>
                      </div>
                    </div>
                    <div className="dropdown show">
                      <a
                        className="btn dropdown-toggle set-a"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={superadmin}
                          class="bi bi-heart sidenav-icon"
                        ></img>{" "}
                        <span>Super Admin</span>
                      </a>

                      <div
                        className="dropdown-menu master-dd"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component12")}
                        >
                          Admin List
                        </a>
                        {/* <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component15")}
                        >
                          Create Role
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component17")}
                        >
                          Create Rights
                        </a> */}

                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component14")}
                        >
                          Rights List
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => showComponent("Component13")}
                        >
                          Role List
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <main class="col ps-md-2 pt-2">
              <a
                href="#"
                data-bs-target="#sidebar"
                data-bs-toggle="collapse"
                class="border rounded-3 p-1 text-decoration-none"
              >
                <i
                  style={{ color: "black" }}
                  class="bi bi-list bi-lg py-2 p-1"
                ></i>{" "}
                ☰
              </a>
              <div class="page-header pt-3">
                {/* ----------------breadcrumbs---------------- */}
                {/* <div>
              <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
              </div> */}
                {componentToShow}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
