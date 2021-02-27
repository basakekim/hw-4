import React from "react";
import links from "../data/links";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.PNG";

function NavBar(props) {
  const linkItems = links
    .filter((item) => item.isLink)
    .map((item, index) => (
      <li className="nav-item ls-2 fs-30" key={index}>
        <Link to={item.link} className="nav-link active" aria-current="page">
          {item.title}
        </Link>
      </li>
    ));
  return (
    <Navbar collapseOnSelect expand="lg" className=" shadow-lg navbar-light">
      <div className="container-fluid ">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">
            <Link to={`/`} className="navbar-brand ">
              {" "}
              <img src={logo} style={{ width: "150px" }} />{" "}
            </Link>
          </Navbar.Brand>
          <Nav.Link className="navbar-nav">{linkItems}</Nav.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
