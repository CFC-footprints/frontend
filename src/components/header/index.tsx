import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./styles.css";

function Header() {
  return (
    <Container fluid>
      <div className="header-container">
        <div className="header">
          <Navbar>
            <Navbar.Brand href="#">CFC - Water Footprint</Navbar.Brand>
          </Navbar>
        </div>
      </div>
    </Container>
  );
}

export default Header;
