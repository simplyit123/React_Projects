import styled from "styled-components";
import Boxes from "./Boxes";
import TotalScore from "./TotalScore";
import DiceRoll from "./DiceRoll";
import { useState } from "react";
import { Buttons, OutlineButton } from "./Buttons";
import Rules from "./Rules";

const PlayGame = () => {
  let [SelectedNum, setSelectedNum] = useState();
  let [currentDice, setCurrentDice] = useState(1);
  let [score, setScore] = useState(0);
  let [error, setError] = useState("");
  let [showRules, setShowRules] = useState(false);

  let generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function diceRoll() {
    if (!SelectedNum) {
      setError("You have not selected any Number");
      return;
    }
    setError("");

    let randomNum = generateRandomNumber(1, 6);
    setCurrentDice(randomNum);

    if (SelectedNum === randomNum) {
      setScore(score + SelectedNum);
    } else {
      setScore(score - 2);
    }
    setSelectedNum();
  }

  function resetScore (){
    setScore(0)
  }

  return (
    <MainBoxes>
      <div className="top-section">
        <TotalScore score={score} />
        <Boxes
          SelectedNum={SelectedNum}
          setSelectedNum={setSelectedNum}
          error={error}
        />
      </div>

      <DiceRoll currentDice={currentDice} diceRoll={diceRoll} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Buttons onClick={()=>setShowRules((prev)=>!prev)}>{showRules? "Hide" : "Show"} Rules</Buttons>
      </div>

      {showRules && <Rules/>}
    </MainBoxes>
  );
};

export default PlayGame;

let MainBoxes = styled.div`
  .top-section {
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
