import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
// import Header from "./components/Header";

const mainContainer = document.getElementById("App");

ReactDOM.render(
    <Layout>
        <Home />
    </Layout>,
    mainContainer
);
