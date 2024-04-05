import React from "react";
import { Outlet, Route, Link, useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./AdminDashboard.css";
import AdminAuthRoutes from "../../../routes/AdminAuthRoutes";
import Sidenav from "../../TestPages/Sidenav";
import AdminHeader from "../admin_header/AdminHeader";

import { Container, Row, Col, Card } from "react-bootstrap";

function AdminDashboard() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const totalInterviews = 50;
  const totalApplies = 200;
  const totalProfiles = 1000;
  const totalOpenings = 20;
  const adminDetails = {
    name: "John Doe",
    email: "admin@example.com",
    role: "Admin",
  };

  return (
    <>
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

          {/* <h1>rahul</h1> */}

          {/* <Container className="mt-4">
      <Row>
        <Col md={3} >
          <Card style={{ background: "#40189D" }}>
            <Card.Body style={{ color: "white" }}> 
              <h5>Total Interviews</h5>
              <p >{totalInterviews}</p> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ background: "cyan" }}>
            <Card.Body style={{ color: "white" }}>
              <h5>Total Applies</h5>
              <p >{totalApplies}</p> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card  style={{ background: "#20c997" }}>
            <Card.Body style={{ color: "white" }}>
              <h5>Total Profiles</h5>
              <p>{totalProfiles}</p> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card  style={{ background: "green" }}>
            <Card.Body style={{ color: "white" }}>
              <h5>Total Openings</h5>
              <p>{totalOpenings}</p> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row classNameName="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Admin Details</h5>
            </Card.Header>
            <Card.Body>
              <p>Name: {adminDetails.name}</p>
              <p>Email: {adminDetails.email}</p>
              <p>Role: {adminDetails.role}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row classNameName="mt-4">
        <Col>
    
        </Col>
      </Row>
    </Container> */}

          <div>
            <main>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames
                      .slice(0, index + 1)
                      .join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                      <li
                        className="breadcrumb-item"
                        style={{ marginLeft: "15px" }}
                        key={routeTo}
                      >
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
    </>
  );
}
export default AdminDashboard;
