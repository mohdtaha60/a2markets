import { Carousel } from "react-bootstrap";
import React from "react";

function Caros() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <video
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            src="https://media.istockphoto.com/videos/stock-market-bar-graph-trading-video-id1026933968"
            autoPlay
            loop
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            src="https://www.apple.com/105/media/us/iphone-12-pro/2020/e70ffbd8-50f1-40f3-ac36-0f03a15ac314/anim/lidar/medium_2x.mp4"
            autoPlay
            loop
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            src="https://media.istockphoto.com/videos/stock-market-bar-graph-trading-video-id1026933968"
            autoPlay
            loop
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caros;
