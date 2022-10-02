import React, { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "../../videos/video-1.mp4";

const Video = (props, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoRef.current.play();
      },
      pause() {
        videoRef.current.pause();
      },
    };
  });
  return (
    <>
      <video className="video" src={video1} ref={videoRef} />
    </>
  );
};

export default forwardRef(Video);
