import React from "react";

export type FinalScoreProps = {
  finalScore: Number;
  onClick: (variant: string) => void;
};

export const FinalScore: React.FC<FinalScoreProps> = ({
  finalScore,
  onClick,
}) => {
  return (
    <div className="body" id="FinalScreen">
      <div className="FinalScore"> Final Score: {finalScore} / 16</div>
      <div className="Credits">This was created by:</div>
      <div className="Name">David Strauss</div>
      <button className="StartButton" onClick={() => onClick("end")}>
        Restart!
      </button>
    </div>
  );
};
