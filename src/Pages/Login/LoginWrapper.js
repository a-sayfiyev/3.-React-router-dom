import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fffced;

  h1 {
    font-weight: bold;
    font-size: 65px;
  }

  .InnerWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);
  }

  button {
    background-color: #ffec00;
    color: black;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
  }

  button:hover,
  button:active {
    background-color: #df3535;
  }
`;

export default LoginWrapper;
