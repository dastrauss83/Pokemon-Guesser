import React, { useEffect, useState } from "react";
import { Pokemon } from "./PokemonOption";

export type PokemonImageProps = {
  correctPokemon: Pokemon | void;
};

export const PokemonImage: React.FC<PokemonImageProps> = ({
  correctPokemon,
}) => {
  const [pokemonImageUrl, setPokemonImageURL] = useState<string>("");

  useEffect(() => {
    if (correctPokemon) {
      fetch(correctPokemon.url)
        .then((vals) => vals.json())
        .then((json) => {
          setPokemonImageURL(json.sprites["back_default"]);
        });
    }
  }, [correctPokemon]);

  return (
    <div className="PokemonImageHolder">
      <img className="PokemonImage" src={pokemonImageUrl} alt="" />
    </div>
  );
};
