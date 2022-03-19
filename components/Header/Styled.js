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
  }

  span {
    font-size: 1.2rem;
  }

  .icons {
    font-size: 1.5rem;
  }
  
  button {
    border: none;
  }
  
`;

export default Container;
