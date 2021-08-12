import React from "react";

import "./styles/Header.css";
import logo from "../images/logo.png";

function Header() {
    return (
        <header className="main-header">
            <div className="container">
                <img
                    src={logo}
                    alt="rick and morty logo"
                    className="main-header__logo"
                />
            </div>
        </header>
    );
}

export default Header;
