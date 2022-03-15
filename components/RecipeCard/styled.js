import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  background-color: white;
  margin-bottom: 2rem;
  
  img {
    width: 200px;
    border-radius: 50%;
  }
  h2 {
    text-align: center;
  }
`;

export default Container;
