import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";
let BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    let fetchFoodData = async () => {
      setLoading(true);
      try {
        let response = await fetch(BASE_URL);
        let jsonResponse = await response.json();

        setData(jsonResponse);
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };

    fetchFoodData();
  }, []);

  return (
    <MainComponent>
      <TopSection>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input placeholder="Search Food..." />
        </div>
      </TopSection>

      <FilterContainer>
        <Buttons>All</Buttons>
        <Buttons>Breakfast</Buttons>
        <Buttons>Lunch</Buttons>
        <Buttons>Dinner</Buttons>
      </FilterContainer>

      <SearchResults/>
    </MainComponent>
  );
};

export default App;

let MainComponent = styled.div`
  min-width: 1200px;
  margin: 0 auto;
`;

let TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  min-height: 140px;

  input {
    background-color: transparent;
    border: 1px solid red;
    padding: 0 10px;
    height: 40px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
  }
`;

let FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

let Buttons = styled.button`
  color: white;
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;

