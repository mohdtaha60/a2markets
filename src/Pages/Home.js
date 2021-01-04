import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardd from "../Components/Cardd";
import CardTwo from "../Components/Carddtwo";
import Header from "../Components/Header";
import ParticlesJS from "../Components/Paarticles";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <ParticlesJS />
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          WHY A2 MARKETS
        </h1>
        <br />
        <br />
        <Row className="d-flex justify-content-around">
          <Col xs={8} lg={3}>
            <Cardd />
          </Col>
          <Col xs={8} lg={3}>
            <CardTwo />
          </Col>
          <Col xs={8} lg={3}>
            <Cardd />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
