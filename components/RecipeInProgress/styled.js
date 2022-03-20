import styled from 'styled-components';

const Container = styled.main`
  font-family: Arial, Helvetica, sans-serif;
  /* min-height: 100vh; */
  padding-bottom: 3rem;
* {
    margin: 0;
    padding: 0;

  }
  div {
    p {
      text-align: justify;
      width: 90%;
      margin-left: 1rem;
    }
  }

  div {
    width: 100vw;
  }

  div.icons {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: flex-end;
    padding: 1rem 0;

    button {
      border-radius: 50%;
      margin-right: 1rem;
      padding: 0.5rem;
    }
  }

  ul {
    width: 100vw;
    padding: 0 1rem;

    li {
      list-style: none;

      input {
        margin: 5px;
      }
    }
  }

  p {
      width: 100vw;
      padding: 0 1.2rem;
  }

  button.finish {
    background-color: #c8a276;
    bottom: 0;
    color: white;
    height: 3rem;
    position: fixed;
    width: 100vw;
  }
`;




export default Container;
