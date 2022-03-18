import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;

  img {
    width: 100%;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding-right: 1rem;
    width: 100vw;

    button {
      background-color: transparent;
      border: none
    }
  }

  h2 {
    text-align: center;
    font-weight: 700;
    width: 100vw;
  }

  h3 {
    text-align: center;
    width: 100vw;
    font-weight: 700;
    font-size: 20px;
    color: rgb(211, 173, 129);
  }
  .share-icon {
    width: 2rem;
    height: 2rem;
  }
  .heart {
    width: 2rem;
    height: 2rem; 
    /* margin-right: 1rem; */
  }
  .selected-heart {
    width: 2rem;
    height: 2rem;
    color: rgb(211, 173, 129); 
  }
  .options {
    margin-right: 1.5rem;
  }
  .link-copied {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
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
