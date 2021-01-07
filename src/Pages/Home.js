import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Cardd from "../Components/Cardd";
import CardTwo from "../Components/Carddtwo";
import Custom from "../Components/Custom";
import Header from "../Components/Header";
import ParticlesJS from "../Components/Paarticles";
import Crypto from "../assets/crypto.svg";
import Caros from "../Components/Caros";
import "./Home.css";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ height: "100vh", width: "100%" }}>
        <Caros />
      </div>

      {/* <ParticlesJS /> */}
      {/* <div>
    
    </div> */}
      <div>
        <Row style={{ marginTop: "90px", marginBottom: "50px" }}>
          <Col className="customco" xs={12} lg={6}>
            <Custom />
          </Col>
          <Col
            data-aos="fade-up"
            style={{ paddingLeft: "40px",paddingRight:"40px" }}
            xs={12}
            lg={6}
          >
            <h1 style={{ fontWeight: "bolder", marginTop: "-20px" }}>
              100% stocks, 0% commission
            </h1>
            <h2
              style={{ fontWeight: "100", color: "gray", marginBottom: "20px" }}
            >
              Why pay fees when you don’t have to? Invest in a large variety of
              stocks on A2Markets without paying any markups, ticketing or
              management fees. There are no limits on trading volume either.
            </h2>
            <Button variant="outline-primary" size="lg">
              Invest in Stocks
            </Button>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "90px", marginBottom: "50px" }}
        >
          <Col style={{ paddingLeft: "40px",paddingRight:"40px" }} xs={12} lg={6}>
            <h2
              style={{ fontWeight: "100", color: "gray", marginBottom: "20px" }}
            >
              <span style={{ fontWeight: "bolder", color: "black" }}>
                Explore an ever-expanding variety of cryptocurrencies
              </span>
              , and buy and sell the underlying asset on eToro’s Cryptocurrency
              Trading Platform. Build your crypto-based portfolio and enjoy
              benefits not offered by most exchanges, such as near-immediate
              execution of market orders.
            </h2>
            <Button variant="outline-primary" size="lg">
              Invest in Stocks
            </Button>
          </Col>
          <Col  data-aos="fade-in" xs={12} lg={6}>
            <img
              alt=""
              src={Crypto}
              style={{ width: "80%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#0C2B5B" }}>
        <Container>
          <br />
          <h1 style={{ textAlign: "center", color: "white" }}>
            WHY A2 MARKETS
          </h1>
          <p style={{ textAlign: "center", color: "white" }}>
            Building trust is important and to ensure you know you are
            protected, A2markets has employed regulation and state-of-the-art
            technology for you to trade with confidence.
          </p>
          <br />
          <br />
          <Row className="d-flex justify-content-around">
            <Col style={{marginBottom:"20px"}} data-aos="zoom-in" xs={8} lg={3}>
              <Cardd />
            </Col>
            <Col style={{marginBottom:"20px"}}  data-aos="zoom-in" xs={8} lg={3}>
              <CardTwo />
            </Col>
            <Col style={{marginBottom:"20px"}}  data-aos="zoom-in" xs={8} lg={3}>
              <Cardd />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
      <Row
          style={{ marginTop: "90px", marginBottom: "50px" }}
        >
          <Col style={{ paddingLeft: "40px",paddingRight:"40px" }} xs={12} lg={6}>
            <h2
              style={{ fontWeight: "100", color: "gray", marginBottom: "20px" }}
            >
              <span style={{ fontWeight: "bolder", color: "black" }}>
                Explore an ever-expanding variety of cryptocurrencies
              </span>
              , and buy and sell the underlying asset on eToro’s Cryptocurrency
              Trading Platform. Build your crypto-based portfolio and enjoy
              benefits not offered by most exchanges, such as near-immediate
              execution of market orders.
            </h2>
            <Button variant="outline-primary" size="lg">
              Invest in Stocks
            </Button>
          </Col>
          <Col  data-aos="fade-down-right" xs={12} lg={6}>
            <img
              alt=""
              src={Crypto}
              style={{ width: "80%", objectFit: "cover" }}
            />
          </Col>
        </Row>
        <div className="back" >
          <Container>
            <Row>
              <Col lg={5}>
                <h4 className="text">
                Global scale
                </h4>
                <h1 style={{fontWeight:"bold"}}>
                The backbone for internet business
                </h1>
                <br/>
                <p style={{color:"white",opacity:"0.9"}}>
                For ambitious companies around the world, Stripe makes moving money as simple, borderless, and programmable as the rest of the internet. Our teams are based in dozens of offices around the world and we process hundreds of billions of dollars each year for startups to large enterprises.
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col xs={12} md={3} lg={3}>
                <h2 style={{borderLeft:"4px solid skyblue "}}>
                &nbsp; 250 M+
                </h2>
                <p style={{color:"white",opacity:"0.9"}}>
                API requests per day, peaking at 13,000 requests a second.
                </p>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <h2 style={{borderLeft:"4px solid skyblue "}}>
                &nbsp; 250 M+
                </h2>
                <p style={{color:"white",opacity:"0.9"}}>
                API requests per day, peaking at 13,000 requests a second.
                </p>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <h2 style={{borderLeft:"4px solid skyblue "}}>
                &nbsp; 250 M+
                </h2>
                <p style={{color:"white",opacity:"0.9"}}>
                API requests per day, peaking at 13,000 requests a second.
                </p>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <h2 style={{borderLeft:"4px solid skyblue "}}>
                &nbsp; 250 M+
                </h2>
                <p style={{color:"white",opacity:"0.9"}}>
                API requests per day, peaking at 13,000 requests a second.
                </p>
              </Col>
              
              
              
            </Row>
          </Container>
        </div>
    </div>
  );
}
