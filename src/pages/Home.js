import React from "react";

import "./styles/Home.css";

import Card from "../components/Card";
import Loader from "../components/Loader";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                results: [],
            },
            nexPage: 1,
            loading: true,
        };
    }

    getCharacters = async () => {
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${this.state.nexPage}`
            );
            const data = await response.json();
            this.setState({
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results),
                },
                nexPage: this.state.nexPage + 1,
                loading: false,
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    componentDidMount() {
        this.getCharacters();
    }

    render() {
        return (
            <React.Fragment>
                <div className="home">
                    {this.state.loading && <Loader />}
                    <div className="container">
                        {this.state.data.results.map((character) => (
                            <Card character={character} key={character.id} />
                        ))}
                        {!this.state.loading && (
                            <button
                                onClick={this.getCharacters}
                                className="home__button"
                            >
                                Get New Characters
                            </button>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
