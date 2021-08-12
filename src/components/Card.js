import React from "react";
import { Link } from "react-router-dom";

import "./styles/Card.css";

class Card extends React.Component {
    state = {
        character: {},
        cosa: "",
    };

    componentDidMount() {
        this.setState({
            character: this.props.character,
        });
    }

    render() {
        return (
            <Link
                to={{
                    pathname: "/CharacterMoreInfo",
                    state: { character: this.state.character },
                }}
                className="card"
            >
                <div className="card__container">
                    <img
                        src={this.state.character.image}
                        alt=""
                        className="card__image"
                    />
                    <p className="card__name">{this.state.character.name}</p>
                </div>
            </Link>
        );
    }
}

export default Card;
