import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";
export let BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [filterData, setFilterData] = useState(null);
  let [selectedBtn, setSelectedBtn] = useState("all");


  let filterBtns = [
    {name: "All",
    type: "all"},

    {name: "Breakfast",
    type: "Breakfast"},

    {name: "Lunch",
    type: "Lunch"},

    {name: "Dinner",
    type: "Dinner"},
    
  ]
  useEffect(() => {
    let fetchFoodData = async () => {
      setLoading(true);
      try {
        let response = await fetch(BASE_URL);
        let jsonResponse = await response.json();

        setData(jsonResponse);
        setFilterData(jsonResponse)
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };

    fetchFoodData();
  }, []);


  let searchFood=(event)=>{
    let searchVal = event.target.value

    if(searchVal === ""){
      setFilterData(null)
    }

    let filter = data?.filter((food)=>food.name.toLowerCase().includes(searchVal.toLowerCase()))
    setFilterData(filter)

  }

  function selectedFood(type){
    if(type === "all"){
      setFilterData(data)
      setSelectedBtn("all")
      return;
    }

    let filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    setFilterData(filter)
    setSelectedBtn(type)

  }

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>

  return (
    <>
    <MainComponent>
      <TopSection>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search Food..." />
        </div>
      </TopSection>

      <FilterContainer>

        {filterBtns.map((item, index)=>(
          <Buttons isSelected={selectedBtn===item.type} key={index} onClick={()=>selectedFood(item.type)}>{item.name}</Buttons>
        ))}
      </FilterContainer>
    </MainComponent>

    <SearchResults data={filterData}/>
    </>
  );
};

export default App;

let MainComponent = styled.div`
  max-width: 1200px;
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

    &::placeholder{
      color: white;
    }
  }


  @media (0 < width <600px) {
    flex-direction: column;
    height: 120px;
  }
`;

let FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export let Buttons = styled.button`
  color: white;
  background-color: ${({isSelected})=> (isSelected ? "#ee0303" : "#ff4343")};
  outline: 1px solid ${({isSelected})=> (isSelected ? "#ffffff" : "#ff4343")};;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;


  &:hover{
    background-color: #ee0303;
  }
`;

