import React from "react";
import { Row, Col } from "react-bootstrap";
import s from "./Header.module.css";

function Header() {
  return (
    <Row>
      <Col>
        <div className={s.root}>ToDo List</div>
      </Col>
    </Row>
  );
}

export default Header;
