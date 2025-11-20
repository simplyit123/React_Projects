import styled from "styled-components";

const SearchResults = () => {
  return (
    <FoodCardContainer>
      <FoodCard></FoodCard>
    </FoodCardContainer>
  );
};

export default SearchResults;


let FoodCardContainer = styled.div`
  background-image: url("/bg.png");
  height: calc(100vh - 210px);
  background-size: cover;
`;

let FoodCard = styled.section``;