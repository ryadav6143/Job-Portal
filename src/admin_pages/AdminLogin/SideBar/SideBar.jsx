import React, { useEffect, useState } from "react";
import MasterCurrentOpening from "../AdminChildPages/MasterCurrentOpening";
import MasterJobProfile from "../AdminChildPages/MasterJobProfile";
import MasterInterviewSchedule from "../AdminChildPages/MasterInterviewSchedule";
import MasterFAQ from "../AdminChildPages/MasterFAQ";
import "./SideBar.css";
import { Button } from "@mui/material";
function SideBar() {
  // ---------------------------------------------------------------------------------------
  const [screen, setScreen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleReset = () => {
    const form = document.getElementById("myForm");

    if (form) {
      form.reset();
    }
  };
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
                      <a onClick={() => showComponent("Component4")}>
                        Master FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        <div className="show-child-components col-md-10">{componentToShow}</div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
