import React from "react";
import video from "../assets/loader.mp4";
import "./LoadingScreen.css"

export default function LoadingScreen() {
  return (
    <div>
      <div class="video-container">
        <video
          src={video}
          autoPlay
        //   style={{ width: "100%", height: "100vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
