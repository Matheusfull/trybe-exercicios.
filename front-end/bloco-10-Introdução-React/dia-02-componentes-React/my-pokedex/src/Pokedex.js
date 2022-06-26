import React from "react";
import pokemons from "./data"
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return (
            <div >
                {/* <Pokemon dataItem={pokemons[0]} /> */}
                {
                    pokemons.map((element) => {
                        return (
                            <Pokemon dataItem={element} key={element.id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Pokedex;