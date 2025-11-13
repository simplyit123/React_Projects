
import styled from "styled-components"


const DiceRoll = ({currentDice, diceRoll}) => {

  return (
    <Diceroll>
    <div>
      <img src={`src/assets/dice_${currentDice}.png`} alt="dice_1 image" onClick={diceRoll} />
    </div>

    <p>Click on Dice to roll</p>
    </Diceroll>
  )
}

export default DiceRoll


let Diceroll = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
      cursor: pointer;
    }

    p{
        font-size: 22px;
        font-weight: 500;
    }
`