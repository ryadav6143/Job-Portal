import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

import "./SideBar.css";
import opening from "../../../assets/logos/book.png";
import interview from "../../../assets/logos/interview.png";
import reports from "../../../assets/logos/report.png";
import superadmin from "../../../assets/logos/setting.png";
import list from "../../../assets/logos/list.png";
import jobprofile from "../../../assets/logos/jobprofile.png";
import Hamburgermenu from "../../../assets/logos/hamburger (1).png"

function SideBar() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto  sidebar-set">
              <div
                id="sidebar"
                className="collapse collapse-horizontal show border-end edit-collapse"
              >
                <div style={{ marginTop: "50px" }}>
                  <div
                    id="sidebar-nav"
                    className="list-group border-0 rounded-0 text-sm-start min-vh-100"
                  >
                    <Link
                      to="/admin-dashboard/current-openings"
                      className="list-group-item border-end-0 d-inline-block text-truncate set-a"
                    >
                      <img
                        src={opening}
                        className="bi bi-bootstrap sidenav-icon"
                        alt="Opening Icon"
                      />
                      <span> Master Current Opening</span>
                    </Link>
                    <Link
                      to="/admin-dashboard/job-profile"
                      className="list-group-item border-end-0 d-inline-block text-truncate set-a"
                    >
                      <img
                        src={jobprofile}
                        className="bi bi-bootstrap sidenav-icon"
                        alt="Opening Icon"
                      />{" "}
                      <span> Master Job Profile</span>
                    </Link>
                    <Link
                      to="/admin-dashboard/interview-schedule"
                      className="list-group-item border-end-0 d-inline-block text-truncate set-a"
                    >
                      <img
                        src={interview}
                        className="bi bi-bootstrap sidenav-icon"
                        alt="Opening Icon"
                      />
                      <span>Master Interview Schedule</span>
                    </Link>

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
                          src={reports}
                          className="bi bi-heart sidenav-icon"
                        ></img>{" "}
                        <span>Reports</span>
                      </a>

                      <div
                        className="dropdown-menu master-dd"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <Link
                          to="/admin-dashboard/reports"
                          className="dropdown-item "
                        >
                          <span>Applied Candidates</span>
                        </Link>
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
                        <Link
                          to="/admin-dashboard/add-post-applied"
                          className="dropdown-item "
                        >
                          <span>Post Applied For</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-sub-post-applied"
                          className="dropdown-item "
                        >
                          <span>Sub Post Applied For</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-departments"
                          className="dropdown-item "
                        >
                          <span> Departments</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-exam-type"
                          className="dropdown-item "
                        >
                          <span>Exam Type</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-degree"
                          className="dropdown-item "
                        >
                          <span> Degree (degree_types_master )</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-categories"
                          className="dropdown-item "
                        >
                          <span> Categories</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/add-subjects"
                          className="dropdown-item "
                        >
                          <span>Add Subjects</span>
                        </Link>
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
                          className="bi bi-heart sidenav-icon"
                        ></img>
                        <span>Super Admin</span>
                      </a>

                      <div
                        className="dropdown-menu master-dd"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <Link
                          to="/admin-dashboard/admin-list"
                          className="dropdown-item "
                        >
                          <span> Admin List</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/right-list"
                          className="dropdown-item "
                        >
                          <span> Rights List</span>
                        </Link>

                        <Link
                          to="/admin-dashboard/role-list"
                          className="dropdown-item "
                        >
                          <span>Role List</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <main class="sidebar-icon">
              <button
                href="#"
                data-bs-target="#sidebar"
                data-bs-toggle="collapse"
                className="border rounded-3 p-1 text-decoration-none"
              >
                <i
                  style={{ color: "black" }}
                  className="bi bi-list bi-lg py-2 p-1"
                ></i>
                <span>< img className="hamburger" src={Hamburgermenu}/></span>
              </button>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
