import React, { useState } from 'react';
import "./Sidenav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
const Sidenav = () => {
  // const [isToggled, setIsToggled] = useState(false);

  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* <div id="wrapper" className={isToggled ? 'toggled' : ''}>

        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <h2>Logo</h2>
          </div>
          <ul className="sidebar-nav">
            <li className="active">
              <a href="#"><i className="fa fa-home">
 <FontAwesomeIcon icon={faUser} /></i>Home</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-plug"></i>Plugins</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-user"></i>Users</a>
            </li>
          </ul>
        </aside>

        <div id="navbar-wrapper">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a href="#" className="navbar-brand" id="sidebar-toggle" onClick={handleToggle}><i className="fa fa-bars">=</i></a>
              </div>
            </div>
          </nav>
        </div>

        <section id="content-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="content-title">Test</h2>
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </section>

      </div> */}
  <div className={`wrapper ${isExpanded ? 'sidebar-expand' : ''}`}>
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="sidebar-logo">
            <a href="#">CodzSword</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
            <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-agenda"></i>
              <span>Task</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
              <i className="lni lni-protection"></i>
              <span>Auth</span>
            </a>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">Login</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">Register</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
              <i className="lni lni-layout"></i>
              <span>Multi Level</span>
            </a>
            <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                  Two Links
                </a>
                <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Link 1</a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Link 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-popup"></i>
              <span style={{color:"white"}}>Notification</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span>Setting</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="lni lni-exit"></i>
            <span>Logout</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="text-center">
          <h1>Sidebar Bootstrap 5</h1>
        </div>
      </div>
    </div>

    </>
  );
};

export default Sidenav;
