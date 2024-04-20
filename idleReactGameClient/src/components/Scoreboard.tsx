// Scoreboard.tsx
import { FC } from "react";

interface ScoreboardProps {
  score: number;
  modifiers: number;
  incrementScore: () => void;
}

const Scoreboard: FC<ScoreboardProps> = ({
  score,
  modifiers,
  incrementScore,
}) => (
  <header>
    <p>Score: {score}</p>
    <p>Modifier: {modifiers}</p>
    <button onClick={incrementScore}>Click me</button>
  </header>
);

export default Scoreboard;
