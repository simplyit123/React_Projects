
import styled from "styled-components";

const Boxes = ({error, SelectedNum, setSelectedNum}) => {
  let boxNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <BoxContainer>
      <p style={{color:"red"}}>{error}</p>
      <div className="flex">
        {boxNumbers.map((num, index) => (
          <Button
            onClick={() => setSelectedNum(num)}
            $isSelected={num === SelectedNum}
            key={index}
          >
            {num}
          </Button>
        ))}
      </div>
      <p>Select Number</p>
    </BoxContainer>
  );
};

export default Boxes;

let BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }
`;

let Button = styled.button`
  display: flex;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  color: black;
  font-size: 24px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (!props.$isSelected ? "black" : "white")};
`;
