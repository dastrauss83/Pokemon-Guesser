import React from "react";

export type NextButtonProps = {
  onClick: (variant: string) => void;
};

export const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button className="NextButton" onClick={() => onClick("next")}>
      Next
    </button>
  );
};
