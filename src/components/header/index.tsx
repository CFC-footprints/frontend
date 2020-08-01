import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { FaUserAlt } from "react-icons/fa";
import { useTypedSelector } from "../../store/reducers";

import "./styles.scss";
import logo from "../../images/yvy.png";

function Header() {
  const tokens = useTypedSelector((state) => state.tokens);
  let userName = null;

  if (tokens) {
    const decodeIDToken = tokens.idTokenPayload;
    userName = decodeIDToken.name;
  }

  return (
    <Container fluid>
      <div className="header-container">
        <div className="header">
          <Navbar>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block"
                alt="YVY logo"
              />{" "}
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              {userName ? <FaUserAlt /> : null}
              <div className="username">
                <Navbar.Text>{userName}</Navbar.Text>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </Container>
  );
}

export default Header;
