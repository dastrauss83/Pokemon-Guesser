import React from "react";

export type ResponseProps = {
  userMessage: string;
};

export const Response: React.FC<ResponseProps> = ({ userMessage }) => {
  return <div className="Response">{userMessage}</div>;
};
