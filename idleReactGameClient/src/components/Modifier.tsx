import { FC } from "react";
import { useModifier } from "./UseModifier";

interface ModifierProps {
  name: string;
  score: number;
  setScore: (score: number) => void;
  propsModifier: number;
  setModifier: (modifier: number) => void;
  initialModifier: number;
  initialPrice: number;
  currentAmountOwned: number;
  setAmountOwned: (amountOwned: number) => void;
}

const Modifier: FC<ModifierProps> = ({
  name,
  score,
  setScore,
  propsModifier,
  setModifier,
  initialModifier,
  initialPrice,
  currentAmountOwned,
  setAmountOwned,
}) => {
  const { modifier, price, amountOwned, incrementModifier } = useModifier({
    initialPrice: initialPrice,
    initialModifier,
    score,
    setScore,
    modifier: propsModifier,
    setModifier,
    amountOwned: currentAmountOwned,
    setAmountOwned,
  });

  return (
    <div>
      <h3>{name}</h3>
      <p>Amount Owned: {amountOwned}</p>
      <p>Modifier: {modifier}</p>
      <p>Price: {price}</p>
      <button onClick={incrementModifier}>Increase modifier</button>
    </div>
  );
};

export default Modifier;
