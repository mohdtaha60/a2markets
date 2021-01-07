import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./Custom.css";
import MCD from "../assets/mcd.svg";
import Amazon from "../assets/amazon.svg";
import hlogo from "../assets/hlogo.svg";
import hp from "../assets/hp.svg";
import facebook from "../assets/facebook.svg";
import coke from "../assets/coca.svg";
import apple from "../assets/apple.svg";
import nike from "../assets/nike.svg";
import spotify from "../assets/spotify.svg";
import twitter from "../assets/twitter.svg";
import netflix from "../assets/netflix.svg";
import microsoft from "../assets/microsoft.svg";
import disney from "../assets/disney.svg";

function Custom() {
  return (
    <div>
      <Row>
        <Col xs={1}>
          <div data-aos ="zoom-in" data-aos-delay="50" className="hlogo">
            <Row className="d-flex justify-content-center">
              <img src={hlogo} style={{ opacity: "0.4" }} width="100%" />
            </Row>
          </div>
        </Col>
        <Col xs={1}>
          <div data-aos ="zoom-in" data-aos-delay="100" className="mcd">
            <img
              style={{ margin: "auto", backgroundColor: "white" }}
              src={MCD}
              width="100%"
            />
          </div>
        </Col>
        <Col xs={3}>
          <div data-aos ="zoom-in" data-aos-delay="130" className="amazon">
            <img src={Amazon} width="100%" />
          </div>
        </Col>
        <Col xs={2}>
          <Row>
            <div data-aos ="zoom-in" data-aos-delay="150" className="hp">
              <img src={hp} style={{ opacity: "0.4" }} width="100%" />
            </div>
          </Row>
          <div data-aos ="zoom-in" data-aos-delay="170" className="facebook">
            <img src={facebook} width="100%" />
          </div>
        </Col>
        <Col xs={2}>
          <div data-aos ="zoom-in" data-aos-delay="200" className="coke">
            <img src={coke} width="100%" />
          </div>
        </Col>
        <Col xs={1}>
          <div data-aos ="zoom-in" data-aos-delay="220" className="apple">
            <img src={apple} width="100%" />
          </div>
        </Col>
      </Row>
      <Row>
          <Col xs={1}>
          <div data-aos ="zoom-in" data-aos-delay="130" className="nike">
            <img src={nike} style={{ opacity: "0.4" }} width="100%" />
          </div>
          </Col>
          <Col xs={3}>
          <div data-aos ="zoom-in" data-aos-delay="160" className="spotify">
            <img src={spotify}  width="100%" />
          </div>
          </Col>
          <Col xs={2}>
          <div data-aos ="zoom-in" data-aos-delay="180" className="twitter">
            <img src={twitter}  width="100%" />
          </div>
          </Col>
          <Col data-aos ="zoom-in" data-aos-delay="200" xs={3}>
          <div className="netflix">
            <img src={netflix}  width="100%" />
          </div>
          </Col>
          <Col data-aos ="zoom-in" data-aos-delay="220" xs={1}>
          <div className="microsoft">
            <img src={microsoft}  width="100%" />
          </div>
          </Col>
          <Col xs={1}>
          <div data-aos ="zoom-in" data-aos-delay="230" className="disney">
            <img src={disney} style={{opacity:"0.4"}}  width="100%" />
          </div>
          </Col>
      </Row>
    </div>
  );
}

export default Custom;
