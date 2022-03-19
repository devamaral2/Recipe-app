import styled from 'styled-components';

const view = {
  desktop: '@media(min-width: 700px)',
};

const ContainerIndex = styled.main`
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    left: 2rem;
    text-align: start;
    top: 2rem;
    position: absolute;
    z-index: 1;
  }

  img {
    width: 90%;
    z-index: 1;
  }

  form {
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
    width: 90%;
    z-index: 1;
  }

  label {
    display: flex;
    color: white;
    flex-direction: column;
    width: 90%;
    z-index: 1;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    background-color: transparent;
    border:none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.329);
    margin-bottom: 1.5rem;
    padding: 0.5rem 0.5rem 0.5rem 0;
    outline: none;
    width: 100%;
    z-index: 1;
  }

  input::placeholder {
    color: silver;
    z-index: 1;
  }

  #pass-label {
    margin-bottom: 5rem;
    z-index: 1;
  }

  button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    position: absolute;
    bottom: 130px;
    border: 2px solid rgba(255, 255, 255, 0.329);
    opacity: 0.8;
    border-radius: 30px;
    margin-top: 0.5rem;
    padding: 0.8rem;
    width: 10rem;
    z-index: 1;
  }
  .background-image {
    z-index: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0
  }

`;

export default ContainerIndex;
