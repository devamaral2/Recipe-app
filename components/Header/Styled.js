import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100vw;

  img {
    height: 20px;
  }

  div {
    height: 20px;
    width: 20px;
    background-color: aqua;
  }

  span {
    font-size: 1.2rem;
  }

  .icons {
    font-size: 1.5rem;
  }
  
  .search-icon {
    font-size: 1.5rem;
  }

  button {
    border: none;
    background-color: transparent;
  }
  .hidden-div {
    background-color: transparent;
  }

`;

export default Container;
