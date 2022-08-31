import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #ff577f;
    padding: 20px;
  }
  h3 {
    font-weight: 700;
  }
  button {
    font-size: 16px;
  }
  #divLogin {
    width: 370px;
    height: 378px;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgb(0 0 0 / 25%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;

    form {
      width: 95%;
      height: 60%;
      margin-top: -10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    label {
      width: 90%;
      text-align: left;
      font-size: 10px;
      color: #f8f9fa;
    }

    span {
      width: 90%;
      text-align: left;
      margin-top: -10px;
      padding-bottom: 10px;
      font-size: 10px;
      color: #868e96;
    }

    .errors {
      color: #e83f5b;
    }
  }

  #divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;

    span {
      padding-bottom: 10px;
      font-size: 10px;
      color: #868e96;
    }

    button {
      background-color: #868e96;
      border: 1px solid #868e96;
    }
    button:hover {
      background-color: #343b41;
    }
  }
`;
