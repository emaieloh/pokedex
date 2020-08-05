import React from "react";
import Pokemon from "./Pokemon";

class Pokemons extends React.Component {

    filteredType = this.props.pokemons.filter(pokemon => {
        return pokemon.types.includes(this.props.type)
    })
    
    render() {

        let pokemonCardsFiltered = this.filteredType.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon}/>
        })

        let pokemonCardsAll = this.props.pokemons.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon}/>
        })
        
        return(
            <div className="content">
                {this.props.type === "Home" ? pokemonCardsAll : pokemonCardsFiltered}
            </div>
        )
    
    }

}

export default Pokemons;