import { useState } from "react";

interface UseModifierProps {
  initialPrice: number;
  initialModifier: number;
  score: number;
  setScore: (score: number) => void;
  modifier: number;
  setModifier: (modifier: number) => void;
  amountOwned: number;
  setAmountOwned: (amountOwned: number) => void;
}

interface UseModifierReturn {
  modifier: number;
  price: number;
  amountOwned: number;
  incrementModifier: () => void;
}

export const useModifier = ({
  initialPrice,
  initialModifier,
  score,
  setScore,
  modifier,
  amountOwned,
  setAmountOwned,
}: UseModifierProps): UseModifierReturn => {
  const [currentModifier, setCurrentModifier] = useState(initialModifier);
  const [price, setPrice] = useState(initialPrice);

  const incrementModifier = () => {
    if (score >= price) {
      setScore(score - price);
      setCurrentModifier(currentModifier + modifier);
      setAmountOwned(amountOwned + 1);
      setPrice(price * 2); // Increase price each time
    } else {
      alert("Not enough score to increase modifier");
    }
  };

  return { modifier, price, incrementModifier, amountOwned };
};
