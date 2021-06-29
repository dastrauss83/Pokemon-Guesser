import { PreGame } from "./PreGame";
import { InGame } from "./InGame";
import { FinalScore } from "./FinalScore";
import { useState } from "react";

type GameState = "PreGame" | "InGame" | "PostGame";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>("PreGame");
  const [finalScore, setFinalScore] = useState(0);

  const handleClick = (variant: string) => {
    setTimeout(function () {
      if (variant === "start") {
        setGameState("InGame");
      } else if (variant === "end") {
        window.location.reload();
      }
    }, 300);
  };

  if (gameState === "PreGame") {
    return (
      <div>
        <PreGame onClick={handleClick} />
      </div>
    );
  }
  if (gameState === "InGame") {
    return (
      <div>
        <InGame setGameState={setGameState} setFinalScore={setFinalScore} />
      </div>
    );
  }
  if (gameState === "PostGame") {
    return (
      <div className="body">
        <FinalScore finalScore={finalScore} onClick={handleClick} />
      </div>
    );
  }
  return null;
};

export default App;
