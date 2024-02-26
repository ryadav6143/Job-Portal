import React, { useEffect, useState } from "react";
import MasterCurrentOpening from "../AdminLogin/AdminChildPages/MasterCurrentOpening/MasterCurrentOpening";
import MasterJobProfile from "../AdminLogin/AdminChildPages/MasterJobProfile/MasterJobProfile";
import MasterInterviewSchedule from "../AdminLogin/AdminChildPages/MasterInterviewSchedule/MasterInterviewSchedule";
import MasterFAQ from "../AdminLogin/AdminChildPages/MasterFAQ/MasterFAQ";
import AddPostApplied from "../AdminLogin/MasterPages/AddPostApplied";
import AddSubPostApplied from "../AdminLogin/MasterPages/AddSubPostApplied";
import AddDepartment from "../AdminLogin/MasterPages/AddDepartment";
import AddExamType from "../AdminLogin/MasterPages/AddExamType";
import AddDegree from "../AdminLogin/MasterPages/AddDegree";
import AddCategories from "../AdminLogin/MasterPages/AddCategories";
import Reports from "../AdminLogin/Reports/Reports";
import AdminList from "../AdminLogin/SuperAdmin/AdminList";
// import CreateRole from "../AdminLogin/SuperAdmin/CreateRole";
import GetRole from "../AdminLogin/SuperAdmin/GetRole";
import GetRights from "../AdminLogin/SuperAdmin/GetRights";
import AddSubjects from "../AdminLogin/MasterPages/AddSubjects";
import opening from "../../assets/logos/book.png"
import interview from "../../assets/logos/interview.png"
import reports from "../../assets/logos/report.png"
import superadmin from "../../assets/logos/setting.png"
import list from "../../assets/logos/list.png"
import jobprofile from "../../assets/logos/jobprofile.png"

function Sidenav() {

  const [selectedComponent, setSelectedComponent] = useState();
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    case "Component1":
      componentToShow = <MasterCurrentOpening />;
      break;
    case "Component2":
      componentToShow = <MasterJobProfile />;
      break;
    case "Component3":
      componentToShow = <MasterInterviewSchedule />;
      break;
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
      componentToShow = <Reports />;
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
    case "Component16":
      componentToShow = <AddSubjects />;
      break;
    default:
      componentToShow = <MasterCurrentOpening />;
      break;
  }
  return (
    <>
    <div style={{marginTop: "5"}}>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto px-3">
            <div
              id="sidebar"
              class="collapse collapse-horizontal show border-end edit-collapse"
            >
              <div style={{marginTop: "50px"}}>
              <div
                id="sidebar-nav"
                class="list-group border-0 rounded-0 text-sm-start min-vh-100"
              >
                <a
                onClick={() => showComponent("Component1")}
                  href="#"
                  class="list-group-item border-end-0 d-inline-block text-truncate"
                  data-bs-parent="#sidebar"
                >
                  <img src={opening} class="bi bi-bootstrap sidenav-icon"></img>{" "}
                  <span> Master Curent Opening</span>{" "}
                </a>
                <a
                 onClick={() => showComponent("Component2")}
                  href="#"
                  class="list-group-item border-end-0 d-inline-block text-truncate"
                  data-bs-parent="#sidebar"
                >
                  <img  src={jobprofile} class="bi bi-film sidenav-icon"></img> <span> Master Job Profile</span>
                </a>
                <a
                 onClick={() => showComponent("Component3")}
                  href="#"
                  class="list-group-item border-end-0 d-inline-block text-truncate"
                  data-bs-parent="#sidebar"
                >
                  <img src={interview} class="bi bi-heart sidenav-icon"></img>{" "}
                  <span> Master Interview Schedule</span>
                </a>
               
                  <div className="dropdown show">
                        <a
                          className="btn dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          
                          <img src={reports} class="bi bi-heart sidenav-icon"></img>{" "}
                          <span>Reports</span>
                        </a>

                        <div
                          className="dropdown-menu master-dd"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component11")}
                          >
                            Applied Candidates
                          </a>
                        </div>
                      </div>
             
                 <div className="dropdown show">
                        <a
                          className="btn dropdown-toggle"
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
                            Post Applied For(Done)
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component6")}
                          >
                            Sub Post Applied For(Done)
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component7")}
                          >
                            Departments(Done)
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component8")}
                          >
                            Exam Type(Done)
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
                            Categories(Done)
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component16")}
                          >
                            Add Subjects(Done)
                          </a>
                        </div>
                      </div>
                      <div className="dropdown show" >
                        <a
                          className="btn dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                        <img src={superadmin} class="bi bi-heart sidenav-icon"></img>{" "}
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
                          </a> */}

                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component14")}
                          >
                            Get Rights
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component13")}
                          >
                            Get Role
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
              <i class="bi bi-list bi-lg py-2 p-1"></i> ☰
            </a>
            <div class="page-header pt-3">
            {componentToShow}
           </div>
          </main>
        </div>
      </div>
      </div>
    </>
  );
}

export default Sidenav;
