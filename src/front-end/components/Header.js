import React, { useState } from "react";
import { Row, Col, Navbar, Container, Nav } from "react-bootstrap";
import styles from "../css/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPlane,
  faAddressCard,
  faSignInAlt,
  faUserPlus,
  faUserCircle,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { login } = props;
  return (
    <Container>
      <Row className={styles.row}>
        <Col>
          <Navbar className="h-8" data-bs-theme="light">
            <Container>
              <Navbar.Brand className="navbar-brand" href="/">
                <img
                  alt="main"
                  src="https://i.ibb.co/RhB1rSt/Kakao-Talk-20231030-145416381.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                React Project
              </Navbar.Brand>

              <Nav
                id="nav"
                className="fs-4 justify-content-between"
                style={{ width: "600px" }}
              >
                <Nav.Item>
                  <Nav.Link className={styles.link} href="/productList">
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faUtensils}
                    />
                    식품
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.link} href="/productList">
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faPlane}
                    />
                    현지학기제
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.link} href="/">
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faAddressCard}
                    />
                    조원소개
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="d-flex ">
                {login === "false" ? (
                  <>
                    <Nav.Link className={styles.link} href="/">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faSignInAlt}
                      />
                      로그인
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faUserPlus}
                      />
                      회원가입
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link className={styles.link} href="/">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faUserCircle}
                      />
                      프로필
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faShoppingBasket}
                      />
                      장바구니
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
