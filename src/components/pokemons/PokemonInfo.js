import React from "react";

class PokemonInfo extends React.Component {

    render() {

        return(
            <div className="pokemon-info">
                <img src={this.props.pokemon.img} alt={this.props.pokemon.name} className="pokemon-img"/>
                <div className="text-info">
                    <h2>{this.props.pokemon.name}</h2>
                    <hr/>
                    <p>
                        Pokémon, also known as Pocket Monsters in Japan, 
                        is a Japanese media franchise managed by the Pokémon Company, 
                        a company founded and with shares divided between Nintendo, Game Freak, and Creatures.
                        The term "Pokémon", in addition to referring to the Pokémon franchise itself, 
                        also collectively refers to the 896 fictional species that have made appearances in Pokémon media 
                        as of the release of the eighth generation titles Pokémon Sword and Shield.
                    </p>
                    <p>
                        The concept of the Pokémon universe, in both the video games and the general fictional world of Pokémon, 
                        stems from the hobby of insect collecting, a popular pastime which Tajiri enjoyed as a child.
                        Players are designated as Pokémon Trainers and have three general goals: 
                        to complete the regional Pokédex by collecting all of the available Pokémon species found in the 
                        fictional region where a game takes place, to complete the national Pokédex by transferring Pokémon 
                        from other regions, and to train a team of powerful Pokémon from those they have caught 
                        to compete against teams owned by other Trainers so they may eventually win the Pokémon League 
                        and become the regional Champion.
                    </p>
                </div>
            </div>
        )

    }

}

export default PokemonInfo;