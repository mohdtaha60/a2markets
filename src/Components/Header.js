import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "./logo192.png";

export default function Header() {
  return (
    <div>
      <Navbar
        fixed="top"
        className="NavMain-StyledNavbar-module--cls2--2pVZv"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand style={{ color: "white" }} href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          A2MARKETS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#member">
              Member Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{ color: "white" }} href="#deets">
              Trading Platforms
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} eventKey={2} href="#memes">
              Assets
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} eventKey={2} href="#memes">
              Account Types
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} eventKey={2} href="#memes">
              Economic Calendar
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} eventKey={2} href="#memes">
              Education Webpage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
