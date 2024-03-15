import React, { useState } from 'react';
import "./Sidenav.css";

const Sidenav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div id="wrapper" className={isToggled ? 'toggled' : ''}>

        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <h2>Logo</h2>
          </div>
          <ul className="sidebar-nav">
            <li className="active">
              <a href="#"><i className="fa fa-home"></i>Home</a>
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

      </div>
    </>
  );
};

export default Sidenav;
