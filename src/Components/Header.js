import React, { useEffect, useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo192.png";

export default function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll","");
    // };
  }, []);

  return (
    <div>
      <Navbar
        fixed="top"
        className={`NavMain-StyledNavbar-module--cls2--2pVZv ${
          show && "nav_black"
        }`}
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
            <Link className="navh" to="/">
              Home
            </Link>
            <Link className="navh" to="/trading-platforms">
              Trading Platforms
            </Link>
            <Link className="navh" to="/">
              Assets
            </Link>
            <Link className="navh" to="/">
              {" "}
              Account Types
            </Link>
            <Link className="navh" to="/">
              Economic Calendar
            </Link>
            <Link className="navh" to="/">
              Education Webpage
            </Link>
            <Link className="navBtn" to="/">
              <Button size="sm">Member Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
