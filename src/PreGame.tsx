export type PreGameProps = {
  onClick: (variant: string) => void;
};

export const PreGame: React.FC<PreGameProps> = ({ onClick }) => {
  return (
    <div className="body">
      <div className="Header">Guess the Pokemon!</div>
      <div className="Question">Can you get all 16 correct?</div>
      <button className="StartButton" onClick={() => onClick("start")}>
        Start!
      </button>
      <div></div>
    </div>
  );
};
