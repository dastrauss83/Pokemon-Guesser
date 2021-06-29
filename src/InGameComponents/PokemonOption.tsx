import React from "react";

export type Pokemon = { name: string; url: string } | void;

export type PokemonOptionProps = {
  pokemon: Pokemon | null;
  onClick: (variant: string) => void;
  variant: string;
  id: string;
};

export const PokemonOption: React.FC<PokemonOptionProps> = ({
  pokemon,
  onClick,
  variant,
  id,
}) => {
  return (
    <div className="Input">
      <button
        className="PokemonButton"
        onClick={() => onClick(variant)}
        id={id}
      >
        {pokemon ? pokemon.name : "Loading"}
      </button>
    </div>
  );
};
