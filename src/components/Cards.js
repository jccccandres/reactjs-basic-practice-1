import React, { useEffect, useState } from "react";
import axios from "axios";

/* components */
import Card from "./Card";

const Home = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPokemon(response.data)
            });
    }, [url]);

    let data = pokemon ? pokemon.results : [];
    return (
        <>
            <div className="container">
                <h1>Cards Page</h1>
                <p>
                    Practice getting data from API using axios. APIs from <a href='https://pokeapi.co/'>https://pokeapi.co/</a>
                </p>


                <div className="main">
                    {
                        data.length ? 
                            data.map((value, index) => (
                                <Card key={index} name={value.name} url={value.url}/>
                            ))
                        : ''
                    }
                </div>
            </div>
        </>
    );
}

export default Home;