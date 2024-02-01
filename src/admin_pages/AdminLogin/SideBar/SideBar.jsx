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
import "./SideBar.css";
import { Button } from "@mui/material";
function SideBar() {
  // ---------------------------------------------------------------------------------------
  // const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const handleReset = () => {
  //   const form = document.getElementById("myForm");

  //   if (form) {
  //     form.reset();
  //   }
  // };
  useEffect(() => {
    // Update isOpen state only if the window width is less than 768
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Close sidebar by default on mobile
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
    default:
      componentToShow = <MasterCurrentOpening />;
      break;
  }
  return (
    <>
      <div className="container-master">
        {isMobile && (
          <Button className="sidebar-btn" onClick={() => handleSideBar()}>
            ☰{" "}
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
                          className="dropdown-menu"
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
                          className="dropdown-menu"
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
                            Departments (department_master )
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => showComponent("Component8")}
                          >
                            Exam Type (exam_types_master )
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
