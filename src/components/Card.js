import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({name, url}) => {
    const [pokemonInfo, setPokemonInfo] = useState();
    const [specieInfo, setSpecieInfo] = useState();

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPokemonInfo(response.data)
            });
    }, [url]);

    useEffect(() => {
        if (pokemonInfo) {
            axios.get(pokemonInfo.species.url)
            .then(response => {
                setSpecieInfo(response.data)
            });
        }
    }, [pokemonInfo]);
    
    if (pokemonInfo) {
        const image_link = pokemonInfo.sprites.other['official-artwork'].front_default;
        const types = pokemonInfo.types;
        const typesArray = [];
        types.map((value, index) => (
            typesArray.push(value.type.name)
        ));
        
        const description = specieInfo ? specieInfo.flavor_text_entries[1].flavor_text : '';
        
        return (
            <div className="card">
                <div className="card-image">
                    <img src={image_link} alt="card" />
                </div>
                <div className="card-header">
                    <h3>{name.toUpperCase()}</h3>
                </div>
                <div className="card-body">
                    <div className="card-element"><span>Type</span>: {typesArray.join(', ')}</div>
                    <div className="card-description"><span>Description</span>: {description}</div>
                </div>
            </div>
        );
    }
}


export default Card;