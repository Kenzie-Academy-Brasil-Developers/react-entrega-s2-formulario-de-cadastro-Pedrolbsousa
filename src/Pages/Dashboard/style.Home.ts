import styled from "styled-components";

export const DivHeader = styled.header`
  width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  h1 {
    color: #ff577f;
  }
  div {
    margin-top: 25px;
  }

  hr {
    height: 1px;
    margin-top: 50px;
    background-color: #808080;
    width: 100%;
    border: 0;
  }

  #headerHome {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 80px;
      background-color: #212529;
      border: #212529;
    }
    button:hover {
      background-color: #808080;
      border: #808080;
    }
  }

  #userHome {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      color: #868e96;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 700px) {
    #userHome {
      flex-direction: column;
    }
  }
`;
