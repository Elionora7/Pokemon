import React,{Component} from "react";
import "./PokeCard.css";
class PokeCard extends Component{

   
  render(){
    //const  PokecardAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const PokecardAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
     let addtothree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
   const imgSrc = `${PokecardAPI}${addtothree(this.props.id)}.png`;
   return (
    <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
            <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
    </div>
)

  }
}

export default PokeCard;