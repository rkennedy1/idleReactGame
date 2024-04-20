import { FC } from "react";
import { useModifier } from "./UseModifier";

interface ClickModifierProps {
  score: number;
  setScore: (score: number) => void;
  propsModifier: number;
  setModifier: (modifier: number) => void;
  initialAmountOwned: number;
  setAmountOwned: (amountOwned: number) => void;
}

const ClickModifier: FC<ClickModifierProps> = ({
  score,
  setScore,
  propsModifier,
  setModifier,
  initialAmountOwned,
  setAmountOwned,
}) => {
  const { modifier, price, amountOwned, incrementModifier } = useModifier({
    initialPrice: 10,
    initialModifier: propsModifier,
    score,
    setScore,
    modifier: propsModifier,
    amountOwned: initialAmountOwned,
    setAmountOwned: setAmountOwned,
    setModifier: setModifier,
  });

  return (
    <div>
      <h3>Click Modifier</h3>
      <p>Modifier: {modifier}</p>
      <p>Price: {price}</p>
      <p>Amount Owned: {amountOwned}</p>
      <button onClick={incrementModifier}>Increase Modifier</button>
    </div>
  );
};

export default ClickModifier;
