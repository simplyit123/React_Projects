import styled from "styled-components";
import { Buttons } from "./Buttons";

const StartGame = ({toggle}) => {
  return (
    <div>
      <Container>
        <img src="src/assets/dice1.png" alt="" />

        <div className="content">
          <h1>DICE GAME</h1>
          <Buttons onClick={toggle}> PLAY NOW </Buttons>
          
        </div>
      </Container>
    </div>
  );
};

export default StartGame;

let Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
