import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h3>How to play dice game</h3>
        <p className="text">Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted</p>
    </RulesContainer>
  )
}

export default Rules


let RulesContainer = styled.div`
    padding: 20px;
    background-color: white;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
    
    h3{
        font-size: 24px;
        background-color: white;
    }
    .text{
      margin-top: 24px;
      background-color: white;
    }

    p{
      margin: 0;
      padding: 0;
      background-color: white;
    }
`