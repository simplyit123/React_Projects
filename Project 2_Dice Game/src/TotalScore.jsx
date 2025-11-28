import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore


let ScoreContainer = styled.div`
max-width: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    h1{
        font-size: 100px;
        align-items: center;
    }

    p{
        font-size: 24px;
        font-weight: 500;
        color: #FF6B35;
    }
`