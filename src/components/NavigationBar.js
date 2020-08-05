import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {

    render() {

        const pokemonTypes = this.props.types.map(type => {
            return <Link to={"/types/" + type} key={type}>
                <li>{type}</li>
            </Link>
        })

        return(
            <ul id="navbar">
                <Link to="/"><li id="home" key="Home">Home</li></Link>
                {pokemonTypes}
            </ul>
        )

    }

}

export default NavigationBar;