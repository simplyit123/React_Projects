import styled from "styled-components";
import { BASE_URL, Buttons } from "./App";

const SearchResults = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map(({ name, text, image, index,price }) => (
          <FoodCard key={index}>
            <div className="food_img">
              <img src={BASE_URL + image} alt="" />
            </div>

            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Buttons>${price.toFixed(2)}</Buttons>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResults;

let FoodCardContainer = styled.div`
  background-image: url("/bg.png");
  min-height: calc(100vh - 210px);
  background-size: cover;
`;

let FoodCards = styled.section`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 60px;
`;

let FoodCard = styled.div`
width: 340px;
height: 167px;
border-radius: 20px;
border: 0.66px solid;
backdrop-filter: blur(13.1842px);
display: flex;
padding: 10px;

.food_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  font-family: 'poppins', sans-serif;

  h3{
    font-size: 16px;
    margin-top: 8px;
    font-weight: 500;
  }

  p{
    font-size: 12px;
    margin-top: 4px;
  }
}
`;
