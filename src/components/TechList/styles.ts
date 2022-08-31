import styled from "styled-components";

export const List = styled.div`
  width: 70%;
  background-color: #212529;
  border: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 25px 6px;
  #emptyList {
    padding: 30px;
  }

  #listCard {
    margin-top: 10px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export const Tech = styled.div`
  width: 95%;
  height: 45px;
  background-color: black;
  border: 1px solid #808080;
  list-style: none;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;

  #divCard {
    width: 240vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -2px;
    padding: 15px;
  }

  button {
    width: 28px;
    height: 28px;
    margin-left: 15px;
  }

  :hover {
    background-color: #343b41;
  }
`;
