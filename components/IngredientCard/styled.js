import styled from 'styled-components';

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  width: 75vw;
  height: 6rem;
  margin: 2.5rem;
    position: relative;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    
  a {
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
  }
  p {
    position: absolute;
    right: 2rem;
    bottom: 1.2rem;
  }
  img {
    width: 120px;
    position: absolute;
    left: -1.5rem;
    bottom: 1rem;

  }
`;

export default Container;
