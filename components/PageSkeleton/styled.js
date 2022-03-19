import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 5px;
  width: 100vw;

  span {
    margin-bottom: 20px;
  }

  .options {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 100%;

    span {
      margin: 0 0 0 16px;
    }
  }

  .ingredients {
    width: 100%;
  }
`;

export default Container;
