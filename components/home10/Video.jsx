import React from 'react';

function Video() {
  return (
    <section className="tc-video-style10">
      <video
        className="the-vid"
        src="/home10/assets/img/video.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        controlsList="nodownload"
        poster="/home10/assets/img/vid_img.png"
      ></video>
    </section>
  );
}

export default Video;
