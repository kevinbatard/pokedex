"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";

export default function Home() {
  const [poke, setPoke] = useState<Pokemon>();
  const [numPoke, setNumPoke] = useState<number>(1);
  const [tempPokedexId, setTempPokedexId] = useState<number>(numPoke);

  useEffect(() => {
    fetch(`https://tyradex.tech/api/v1/pokemon/${numPoke}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur Réseau");
        }
        return response.json();
      })
      .then((data) => {
        setPoke(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, [setPoke, numPoke]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (tempPokedexId > 1017) return alert("Ce pokémon n'éxiste pas");
    poke ? setNumPoke(tempPokedexId) : setNumPoke(1);
  };

  const handleChange = (e: any) => {
    setTempPokedexId(e.target.value);
  };

  return (
    <main>
      <div>
        <p>n°{poke?.pokedexId} </p>
        <p>{poke?.name.fr}</p>
        <p>{poke?.category}</p>
      </div>
      <div>
        <div>
          <p>Taille: {poke?.height}</p>
          <p>Poids: {poke?.weight}</p>
        </div>
        <img src={poke?.sprites.regular} />
        {poke && (
          <div>
            <img
              src={poke?.types[0].image}
              alt={poke?.types[0].name}
              title={poke?.types[0].name}
            />
            {poke?.types.length > 1 ? (
              <img
                src={poke?.types[1].image}
                alt={poke?.types[1].name}
                title={poke?.types[1].name}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setNumPoke(numPoke - 1);
            setTempPokedexId(numPoke - 1);
          }}
        >
          &lt;
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={String(tempPokedexId)}
            onChange={handleChange}
          ></input>
          <button type="submit">Go</button>
        </form>
        <button
          onClick={() => {
            if (numPoke === 1017)
              return alert("Il n'y à plus de pokémon aprs celui là");
            setNumPoke(numPoke + 1);
            setTempPokedexId(numPoke + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </main>
  );
}
