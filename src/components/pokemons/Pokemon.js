import React from "react";
import { Link } from "react-router-dom";

class Pokemon extends React.Component {

    render() {

        return(
            <div id="card-container">
                <Link to={"/" + this.props.pokemon.name}>
                    <div className="pokemon-cards">
                        <div className="pokemon-name">{this.props.pokemon.name}</div>
                        <img src={this.props.pokemon.img} alt={this.props.pokemon.name} className="pokemon-img"/>
                        <div className="pokomon-id">{this.props.pokemon.id}</div>
                    </div>
                </Link>
            </div>
        )

    }

}

export default Pokemon;