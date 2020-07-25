import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
    const [data, setData] = useState([]);
    const [position, setPosition] = useState(0);

    const URL = "https://rickandmortyapi.com/api/character/";

    useEffect(() => {
        const getData = async () => {
            const RESP = await fetch(URL);
            const DATA = await RESP.json();
            const RESULTS = DATA.results.slice(0,5); ;
            setData(RESULTS);
        };
        getData();
    }, []);

    const changeImage = (number) => {
        const POSITION = position + number;
        const EXIST_IMAGE = (POSITION >= 0 && POSITION < data.length);
        if (EXIST_IMAGE) {
            setPosition(POSITION)
        };
    };

    const IMAGE = data[position] || null;
    const SRC = IMAGE ? IMAGE.image : "";
    const NAME = IMAGE ? IMAGE.name : "";
    
    return (
        <div className="Gallery">
            <button type="button" className="Gallery__Arrow_L" onClick={() => changeImage(-1)}>&lt;</button>
            <div className="Gallery__Container">
                {
                    (SRC) && (<img className="Gallery__Image" src={SRC} alt={`Imagen de ${NAME}`} />)
                }
                {
                    (NAME) && (<span className="Gallery__Name">{NAME}</span>)
                }
            </div>
            <button type="button" className="Gallery__Arrow_R" onClick={() => changeImage(1)}>&gt;</button>
        </div>
    );
};

export default Gallery;