import React, { useState } from "react";
import MasterCurrentOpening from "../AdminChildPages/MasterCurrentOpening";
import MasterJobProfile from "../AdminChildPages/MasterJobProfile";
import MasterInterviewSchedule from "../AdminChildPages/MasterInterviewSchedule";
import MasterFAQ from "../AdminChildPages/MasterFAQ";
import "./SideBar.css";
function SideBar() {
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
      <div className="master-container">
        <div className="master-sidebar">
          <ul>
            <li>
              <a onClick={() => showComponent("Component1")}>
                {" "}
                Master Current Opening
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component2")}>
                {" "}
                Master Job Profile
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component3")}>
                {" "}
                Master Interview Schedule
              </a>
            </li>
            <li>
              <a onClick={() => showComponent("Component4")}> Master FAQ</a>
            </li>
          </ul>
        </div>
        <div className="show-child-components">{componentToShow}</div>
      </div>
    </>
  );
}

export default SideBar;
