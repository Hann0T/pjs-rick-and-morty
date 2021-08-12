import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import CharacterMoreInfo from "../pages/CharacterMoreInfo";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/CharacterMoreInfo"
                            component={CharacterMoreInfo}
                        />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
