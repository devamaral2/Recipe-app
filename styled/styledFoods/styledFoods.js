import styled from 'styled-components';

const ContainerFoods = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  section {
    align-items: center;
    background-color: whitesmoke;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    padding-bottom: 60px;
  }
`;

export default ContainerFoods;
