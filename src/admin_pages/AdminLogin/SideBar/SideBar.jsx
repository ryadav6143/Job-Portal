import React, { useEffect, useState } from "react";
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
import Reports from "../Reports/Reports";
import AdminList from "../SuperAdmin/AdminList";
import CreateRole from "../SuperAdmin/CreateRole";
import GetRole from "../SuperAdmin/GetRole";
import GetRights from "../SuperAdmin/GetRights";
import AddSubjects from "../MasterPages/AddSubjects";
import "./SideBar.css";
import { Button } from "@mui/material";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIsMobile();

    // Event listener to check window width and update isOpen state
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Clean up the event listener
    };
  }, []);

  const handleSideBar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  // ---------------------------------------------------------------------------------------
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
    case "Component15":
      componentToShow = <CreateRole />;
      break;
    case "Component16":
      componentToShow = <AddSubjects />;
      break;
    default:
      componentToShow = <MasterCurrentOpening />;
      break;
  }
  return (
    <>
      <div className="container-master">
        {isMobile && (
          <Button className="sidebar-btn" onClick={() => handleSideBar()}>
            ☰
          </Button>
        )}
        <div className="row1">
          <div className={`col-md-2 ${isOpen ? "isClose" : ""}`}>
            <div className="master-sidebar">
              <div>
                <nav>
                  <ul className="menu-item" style={{ listStyle: "none" }}>
                    <li>
                      <a onClick={() => showComponent("Component1")}>
                        Master Curent Opening
                      </a>
                    </li>
                    <li>
                      <a onClick={() => showComponent("Component2")}>
                        Master Job Profile
                      </a>
                    </li>
                    <li>
                      <a onClick={() => showComponent("Component3")}>
                        Master Interview Schedule
                      </a>
                    </li>
                    {/* Report List */}
                    <li>
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
                          Reports
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
                    </li>
                    {/* Master List */}
                    <li>
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
                          Master List
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
                    </li>
                    {/* Super Admin List */}
                    <li>
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
                          Super Admin
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
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component15")}
                          >
                            Create Role
                          </a>

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
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="show-child-components col-md-10">
            {componentToShow}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
