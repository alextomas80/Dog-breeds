import styled from "styled-components";

export const SelectorContainer = styled.div.attrs(() => ({
  "aria-label": "breed-selector",
}))`
  display: flex;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  width: 100%;

  background-color: white;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
`;

export const Select = styled.select`
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
