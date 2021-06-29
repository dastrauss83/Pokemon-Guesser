import React from "react";

export type UserScoreProps = {
  userScore: Number;
};

export const UserScore: React.FC<UserScoreProps> = ({ userScore }) => {
  return <div className="UserScore"> Current Score: {userScore} / 16</div>;
};
