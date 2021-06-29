import React from "react";
import { PokemonOption, Pokemon } from "./PokemonOption";

export type pokemonList = Pokemon[];

export type InputsCardProps = {
  pokemonArray: Pokemon[] | void;
  onClick: (variant: string) => void;
  pokemon: Pokemon;
};

export const InputsCard: React.FC<InputsCardProps> = ({
  pokemonArray,
  onClick,
  pokemon,
}) => {
  const correctPokemonMatchArray: string[] = [];
  if (pokemonArray) {
    for (let i = 0; i < pokemonArray.length; i++) {
      if (pokemon === pokemonArray[i]) {
        correctPokemonMatchArray.push("correct");
      } else {
        correctPokemonMatchArray.push("incorrect");
      }
    }
  }

  return (
    <div className="InputsCard">
      {[0, 1, 2, 3].map((i) => (
        <PokemonOption
          pokemon={pokemonArray ? pokemonArray[i] : null}
          onClick={onClick}
          variant={correctPokemonMatchArray[i]}
          id={correctPokemonMatchArray[i]}
        />
      ))}
    </div>
  );
};
