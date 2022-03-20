import styled from 'styled-components';

const Container = styled.div`
    width: 80vw;
    margin: 2rem;
    border-radius: 1.5rem;
    background-color: aqua;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
  }
  img {
    width: 80px;
  }
`;

export default Container;
