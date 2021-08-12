import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import "./styles/CharacterMoreInfo.css";

class CharacterMoreInfo extends React.Component {
    state = {
        character: {},
        location: {},
    };
    componentDidMount() {
        this.setState({
            character: this.props.location.state.character,
        });
        this.fetchDimension();
    }
    fetchDimension = async () => {
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/location/1`
            );
            const data = await response.json();
            this.setState({
                location: data,
            });
        } catch (error) {
            console.error("Error: ", error);
        }
    };
    render() {
        return (
            <div className="container">
                <div className="character">
                    <div className="character__image">
                        <img
                            src={this.state.character.image}
                            alt={this.state.character.name}
                        />
                    </div>
                    <div className="character__info">
                        <h2>{this.state.character.name}</h2>
                        <p>{this.state.character.species}</p>
                        <p>{this.state.character.gender}</p>
                        <p>{this.state.location.dimension}</p>
                    </div>
                </div>
                <Link to="/" className="home__button">
                    Back
                </Link>
            </div>
        );
    }
}

export default CharacterMoreInfo;
