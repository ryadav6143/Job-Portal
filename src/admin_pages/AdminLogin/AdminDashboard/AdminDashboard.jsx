import React from "react";
import { Outlet, Route, Link, useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./AdminDashboard.css";
import AdminAuthRoutes from "../../../routes/AdminAuthRoutes";
import Sidenav from "../../TestPages/Sidenav";
import AdminHeader from "../admin_header/AdminHeader";

function AdminDashboard() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: "5em",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <AdminHeader />
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          position: "relative",
          margin: 0,
          height: "85vh",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "30%",
            flexShrink: 0,
            textAlign: "left",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <SideBar />
        </div>

        <div>
          <main>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li class="breadcrumb-item" style={{marginLeft:"15px"}} key={routeTo}>
                      {isLast ? (
                        <span>{name}</span>
                      ) : (
                        <Link to={routeTo}>{name}</Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </main>
        </div>
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
