import React, { useState, useEffect } from "react";
import { Header } from "./InGameComponents/Header";
import { PokemonImage } from "./InGameComponents/PokemonImage";
import { InputsCard, pokemonList } from "./InGameComponents/InputsCard";
import { Response } from "./InGameComponents/Response";
import "./App.css";
import { NextButton } from "./InGameComponents/NextButton";
import { Pokemon } from "./InGameComponents/PokemonOption";
import { UserScore } from "./InGameComponents/UserScore";

export type InGameProps = {
  setGameState: any;
  setFinalScore: any;
};

export const InGame: React.FC<InGameProps> = ({
  setGameState,
  setFinalScore,
}) => {
  const [loading, setLoading] = useState(false);
  const [availablePokemon, setAvailablePokemon] = useState<pokemonList>();
  const [pokemonOptions, setPokemonOptions] = useState<Pokemon[]>();
  const [correctPokemon, setCorrectPokemon] = useState<Pokemon>();
  const [userMessage, setUserMessage] = useState<string>("Take a Guess!");
  const [userScore, setUserScore] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((vals) => vals.json())
      .then((json) => {
        setAvailablePokemon(json.results);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (availablePokemon) {
      let newPokemonOptions: Pokemon[] = [];
      const randomPokemon = (): Pokemon => {
        return availablePokemon[
          Math.floor(Math.random() * availablePokemon.length - 1) + 1
        ];
      };
      while (newPokemonOptions.length < 4) {
        let newPokemon: Pokemon = randomPokemon();
        if (newPokemonOptions.includes(newPokemon)) {
          continue;
        }
        newPokemonOptions.push(newPokemon);
      }
      setPokemonOptions(newPokemonOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availablePokemon]);

  useEffect(() => {
    if (pokemonOptions) {
      const correctPokemonNumber = Math.floor(Math.random() * 3) + 1;
      setCorrectPokemon(pokemonOptions[correctPokemonNumber]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonOptions]);

  const handleClick = (variant: string) => {
    if (userMessage === "Take a Guess!") {
      if (variant === "correct") {
        setUserMessage("Correct!");
        setUserScore(userScore + 1);
      } else if (variant === "incorrect") {
        setUserMessage("That's Wrong");
      }
    } else if (variant === "next") {
      if (availablePokemon) {
        let index = availablePokemon.indexOf(correctPokemon);
        setAvailablePokemon(
          availablePokemon
            .slice(0, index)
            .concat(availablePokemon.slice(index + 1))
        );
        setUserMessage("Take a Guess!");
      }
    } else {
      setUserMessage("Press Next to Continue");
    }
  };

  if (!availablePokemon || loading) return null;

  if (availablePokemon.length < 5) {
    setGameState("PostGame");
    setFinalScore(userScore);
  }

  return (
    <div className="body">
      <Header />
      <UserScore userScore={userScore} />
      <PokemonImage correctPokemon={correctPokemon} />
      <InputsCard
        pokemonArray={pokemonOptions}
        onClick={handleClick}
        pokemon={correctPokemon}
      />
      <Response userMessage={userMessage} />
      <NextButton onClick={handleClick} />
    </div>
  );
};
