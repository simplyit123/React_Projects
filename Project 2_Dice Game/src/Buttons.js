import styled from "styled-components"

export let Buttons = styled.button`
  color: white;
  background-color: black;
  min-width: 220px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.4s background ease-in;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
  `

export let OutlineButton = styled(Buttons)`
background-color: white;
color: black;
border: 1px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`