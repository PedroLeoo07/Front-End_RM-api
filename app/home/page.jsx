"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";

import CharacterCard from "../../components/CharacterCard";

export default function Home(){
    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response =>{
            setCharacters(response.data.results);
        })
        .catch((error) =>{
            console.error("Erro ao buscar os personagens:", error);
        });
    }, []);

    console.log(characters);
    
    return (
        <div className={style.container}>
            <div className={style.grid}>
            {characters.map((char)=> (
            <CharacterCard key={char.id} character={char} />
          ))}
            </div>
        </div>
    );
}