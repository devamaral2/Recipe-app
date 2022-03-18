import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  background-color: #f2f2f2;
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
    color: rgb(34, 34, 34);
  }
  
  button {
    border: none;
  }

  .orange {
    color: rgb(211, 173, 129);;
  }
  
`;

export default Container;
