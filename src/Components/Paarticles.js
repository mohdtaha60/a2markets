import React from "react";
import { Col, Row } from "react-bootstrap";
import Particles from "react-particles-js";
import "./particles.css";

export default function Paarticles() {
  return (
    <div className="back">
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
                  height: 20,
                  width: 23,
                },
                {
                  src:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
                  height: 30,
                  width: 30,
                },
                {
                  src: "https://v7markets.com/img/coins/last.svg",
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 50,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: true,
              },
            },
          },
          retina_detect: false,
        }}
      />
      <div className="overlay text-center">
        <Row>
          <Col lg={12}>
            <h1 data-aos="zoom-out" className="text">A2MARKETS</h1>
            <p data-aos="zoom-out">Social Platform and Trading Platform</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
