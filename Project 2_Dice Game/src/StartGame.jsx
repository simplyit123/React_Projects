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
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  img{
    width: 600px;
    transform: rotate(30deg);
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      color: #2E2E2E;
    }
  }
`;
