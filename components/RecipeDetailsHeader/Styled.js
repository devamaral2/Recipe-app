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
    margin-top: 1rem;
    padding-right: 1rem;
    width: 100vw;

    button {
      background-color: transparent;
      margin-right: 1rem;
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
`;

export default Container;
