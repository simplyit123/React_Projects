import styled from "styled-components"

export let Buttons = styled.button`
  color: #F5E7C6;
  background-color: #FF6B35;
  min-width: 220px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.4s background ease-in;

  &:hover {
    color: #F5E7C6;
    background-color: black;
    transition: 0.3s background ease-in;
  }
  `

export let OutlineButton = styled(Buttons)`
background-color: black;
color: #F5E7C6;
  &:hover {
    color: #F5E7C6;
    background-color: #FF6B35;
  }
`