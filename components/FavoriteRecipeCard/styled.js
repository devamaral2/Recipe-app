import styled from 'styled-components';

const Container = styled.div`
 * {
        text-decoration:none; 
        font-family: Arial, Helvetica, sans-serif;
      }
      .body {
        margin: 1rem;
        width: 80vw;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
      img {
        width: 100%
      }
      .favorite-content {
        width: 50rem;
        padding: 0.5rem;
      }
      button {
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 1rem;
      }
      .icons {
        width: 1.5rem;
        height: 1.5rem;
      }

      .link-copied {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .link-copied p {
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgb(200, 200, 200);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: rgb(70, 70, 70);
    font-weight: 100;
    padding: 5px;
    text-align: center;
    width: 200px;
  }
`;

export default Container;
