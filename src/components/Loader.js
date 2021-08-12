import React from "react";

import "./styles/Loader.css";
import LoaderImage from "../images/loader.gif";

function Loader() {
    return (
        <div className="center">
            <img src={LoaderImage} alt="loader" className="loader" />
        </div>
    );
}

export default Loader;
