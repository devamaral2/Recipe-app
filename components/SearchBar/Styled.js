import styled from 'styled-components';


const Container = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  margin-bottom: 2rem;
  * {
    border: none;
  }

  input {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 90%;
    outline: 0;
  }

  label {
    align-items: center;
    display: flex;
    height: 2rem;
    margin: 0.5rem;
    width: auto;

    input {
      box-shadow: none;
      width: auto;
      margin-bottom: 0;
      margin-right: 5px ;
      padding: 0;
    }
  }

  button {
    background-color: rgb(211, 173, 129);
    border-radius: 10px;
    color: white;
    padding: 0.5rem;
    width: 40%;
  }
`;

export default Container;
