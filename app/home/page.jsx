"use client";

import {useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard";
import styles from "./Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async (name, pageNumber) => {
    setNotFound(false);
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}&page=${pageNumber}`
      );
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setNotFound(false);

    } catch {
      setCharacters([]);
      setNotFound(true);
    }
  };

  useEffect(() => {
    fetchCharacters(search.trim(), page);
  }, [page]);

  useEffect(()=> {
    fetchCharacters(search, page)
  }, [search]);

  const handleSearch = () => {
    const name = search.trim();
    setSearch("");
    fetchCharacters(name);
  };

  const handleReset = () => {
    setSearch("");
    setPage(1);
    fetchCharacters("", 1);
    toast.sucess("Lista de personagens resetada!", { position: "top-left" });
  };

  const handleCardClick = (name) => {
    toast.info(`Você clicou em ${name}`);
  };


  return (
    <div className={styles.container}>
      <ToastContainer position="top-left" autoClose={7500} theme="dark" />
      <h1 className={styles.title}>Personagens de Rick and Morty</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <button
          onClick={handleSearch}
          className={styles.buttonSearch}>
          Buscar
        </button>
        <button
          onClick={handleReset}
          className={styles.buttonReset}>
          Resetar
</button>
      </div>

      <div className={styles.navControls}>
  <button
    onClick={() => setPage((p) => Math.max(p - 1, 1))}
    disabled={page === 1}
    className={styles.buttonNav}>
    Página Anterior
  </button>
        <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
        className={styles.buttonNav}>
          Próxima Página

        </button>
        </div>
      {notFound && (
        <h1 className={styles.notFound}>Nenhum personagem encontrado 😢</h1>
      )}
      <div className={styles.grid}>
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => handleCardClick(char.name)}
          />
        ))}
      </div>
    </div>
  );
}