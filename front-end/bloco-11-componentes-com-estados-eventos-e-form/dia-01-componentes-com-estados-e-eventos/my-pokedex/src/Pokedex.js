import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {

  constructor() {
    super()
    this.state = {
      number: 0,
      state1: '',
    }
    this.mudar = this.mudar.bind(this)
  }


  mudar() {
    /*  const { number } = this.state
     const { pokemons } = this.props */
    if (this.state.number !== this.props.pokemons.length - 1) {
      this.setState((estadoAnterior, _props) => ({
        number: estadoAnterior.number + 1
      }), () => console.log(this.state.number))
    } else {
      this.setState({ number: 0 })
    }
  }

  fire = () => {
    this.setState({
      state1: 'fire'
    })
  }


  render() {
    const { pokemons } = this.props;
    const { state1 } = this.state
    return (
      <div className="pokedex">
        <div>
          <button type='button' onClick={this.fire}>Fire</button>
          <button type='button'>Psychic</button>
        </div>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))[this.state.number]}
        <button onClick={this.mudar}>Pŕoximo</button>
        <div>
          {
            pokemons.filter((element) => (
              element.type === { state1 }
                .map((cada) => (
                  <Pokemon pokemon={cada} key={cada.id} />
                ))
            ))
          }
        </div>
      </div>

    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;