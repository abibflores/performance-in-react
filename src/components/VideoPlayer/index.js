import React from "react";

const VideoPlayer = () => {
    return (
        <video controls>
            <source src="/videos/video.mp4" type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;