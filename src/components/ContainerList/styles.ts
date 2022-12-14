import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  .mainList {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 40px;
    background-color: #212529;
    border: #808080;
  }

  #divHeaderTech {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
`;
