import React, { useEffect, useRef } from "react";
import Video from "./Video";
import "./style.css";

const VideoApp = () => {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="wrapp-video">
      <Video ref={videoRef} />
      <div className="btn_wrapp">
        <button className="btn btn-color btn-play" onClick={handlePlay}>
          Play
        </button>
        <button className="btn btn-color btn-pause" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default VideoApp;
