import React from "react";

import Gallery from "../../components/Gallery";
import VideoPlayer from "../../components/VideoPlayer";
import Link from "../../components/Link";

const Home = () => (
    <div className="HomePage">
        <Gallery />
        <Link path="/personajes" text="Ver todos los personajes" />
        <VideoPlayer />
    </div>
);

export default Home;
