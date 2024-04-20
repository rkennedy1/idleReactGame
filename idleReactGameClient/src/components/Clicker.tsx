import { useState, useEffect } from "react";
import Modifier from "./Modifier";
import Scoreboard from "./Scoreboard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ClickModifier from "./ClickModifier";
import modifiers from "../data/modifiers.json";

function Clicker() {
  const [score, setScore] = useState(0);
  const [clickModifier, setClickModifier] = useState(1);
  const [clickAmountOwned, setClickAmountOwned] = useState(1);

  const getAutoModifier = () => {
    let totalAutoModifier = 0;
    for (const modifier of modifiers) {
      totalAutoModifier += modifier.amountOwned * modifier.modifier;
    }
    return totalAutoModifier;
  };

  const setAmountOwned = (index: number, amountOwned: number) => {
    const newModifiers = [...modifiers];
    newModifiers[index].amountOwned = amountOwned;
    return newModifiers;
  };

  const setModifier = (index: number, modifier: number) => {
    const newModifiers = [...modifiers];
    newModifiers[index].modifier = modifier;
    return newModifiers;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const totalAutoModifier = getAutoModifier();
      setScore((prevScore) => prevScore + totalAutoModifier);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const incrementScore = () => {
    setScore(score + clickModifier * clickAmountOwned);
  };

  return (
    <Box sx={{ width: "100vw", height: "100vw", overflow: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Scoreboard
            score={score}
            modifiers={getAutoModifier()}
            incrementScore={incrementScore}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ p: 2, maxWidth: 400 }}>
            <Paper elevation={3}>
              <ClickModifier
                score={score}
                setScore={setScore}
                propsModifier={clickModifier}
                setModifier={setClickModifier}
                initialAmountOwned={clickAmountOwned}
                setAmountOwned={setClickAmountOwned}
              />
            </Paper>
          </Box>
        </Grid>
        {modifiers.map((modifier, index) => {
          const handleAmountOwned = (newAmountOwned: number) => {
            setAmountOwned(index, newAmountOwned);
          };
          const handleSetModifier = (newModifier: number) => {
            setModifier(index, newModifier);
          };
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box sx={{ p: 2, maxWidth: 400 }}>
                <Paper elevation={3}>
                  <Modifier
                    name={modifier.name}
                    score={score}
                    setScore={setScore}
                    propsModifier={modifier.modifier}
                    initialModifier={modifier.initialModifier}
                    initialPrice={modifier.initialPrice}
                    setModifier={handleSetModifier}
                    currentAmountOwned={modifier.amountOwned}
                    setAmountOwned={handleAmountOwned}
                  />
                </Paper>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Clicker;
