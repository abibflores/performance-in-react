import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import "./Header.css";

const HeaderDesktop = () => (
    <div className="Header">
        <Link to="/" >
            <img className="Header__Logo" src="/images/abibfloreslogo.jpg" alt="logo" title="logo abib flores" />
        </Link>
        <nav className="Header__Nav">
            <a href="https://www.abibflores.dev/">abib flores </a>
            <a href="https://web.dev/measure/">Web Dev</a>
            <a href="https://twitter.com/abibflores">My Twitter</a>
            <a href="https://github.com/abibflores/performance-in-react">Repositorio</a>
        </nav>
    </div>
);

const HeaderMobile = () => {
    const [textMenu, setTextMenu] = useState("Abrir menu");
    const [classMenu, setClassMenu] = useState("_Hidden");

    const toogleMenu = () => {
        const TEXT_MENU = (textMenu === "Abrir menu") ? "Cerrar menu" : "Abrir menu";
        const CLASS_MENU = (classMenu === "_Hidden") ? "_Show" : "_Hidden";
        setTextMenu(TEXT_MENU);
        setClassMenu(CLASS_MENU);
    }

    return (
        <>
            <button className="Header__Toogle" type="button" onClick={() => toogleMenu()}>{textMenu}</button>
            <div className={`Header__Container${classMenu}`}>
                <div className="Header__Mobile">
                    <Link to="/" onClick={() => toogleMenu()}>
                        <img className="Header__Logo" src="/images/abibfloreslogo.jpg" alt="logo" title="logo abib flores" />
                    </Link>
                    <nav className="Header__Mobile_Nav">
                        <a href="https://bit.ly/3eVMAzD">abib flores </a>
                        <a href="https://web.dev/measure/">Web Dev</a>
                        <a href="https://bit.ly/3fXIw3c">My Twitter</a>
                        <a href="https://github.com/abibflores/performance-in-react">Repositorio</a>
                    </nav>
                </div>
            </div>
        </>
 
    );
};

const Header = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const SCREEN_WIDTH = window.screen.width;
        if (SCREEN_WIDTH > 1024) setIsMobile(false);
    }, []);

    return (
        isMobile ? <HeaderMobile /> : <HeaderDesktop />
    )
};

export default Header;