import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const URL = "https://rickandmortyapi.com/api/episode";
            const OPTIONS = {
                method: "GET",
                url: URL,
            };
            const DATA = await axios(OPTIONS);
            const CHAPTERS = DATA.data.results.slice(0,3); 
            setChapters(CHAPTERS);
        };
        getData();
    }, []);

    const [CHAPTER1, CHAPTER2, CHAPTER3] = chapters;
    const CHAPTER_NAME_1 = CHAPTER1 ? CHAPTER1.name : "Primer capitulo";
    const CHAPTER_NAME_2 = CHAPTER2 ? CHAPTER2.name : "Primer capitulo";
    const CHAPTER_NAME_3 = CHAPTER3 ? CHAPTER3.name : "Primer capitulo";

    return (
        <footer>
            <div className="SocialNetworks">
                <a href="https://bit.ly/3fXIw3c">Twitter</a>
                <a href="https://bit.ly/2WSStqZ">Instagram</a>
                <a href="https://bit.ly/32RfQ83">Facebook</a>
            </div>
            <div className="FirstChapters">
                <ul>
                    <li>{CHAPTER_NAME_1}</li>
                    <li>{CHAPTER_NAME_2}</li>
                    <li>{CHAPTER_NAME_3}</li>
                </ul>
            </div>
            <div className="GoogleMaps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120503.24460784569!2d-99.70125425242442!3d19.29426102564335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89892a50ebb9%3A0xad3f4ad5550208c4!2sToluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1595583894879!5m2!1ses!2smx"
                    width="400"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Mapa de Toluca"
                />
            </div>
            <div className="Copyright">
                <a href="https://bit.ly/3eVMAzD">By abibflores.dev</a>
            </div>
        </footer>
    );

};

export default Footer;