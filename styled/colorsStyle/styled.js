import styled from 'styled-components';

const Container = styled.div`
  .body, .link, main {
    /* background-color: black; */
    background-color: #f2f2f2;
  }
  /* input {
    color: black;
    background-color: #ffff;
  } */
  .login-inputs {
    color: white;
  }

  input::placeholder {
    color: silver;
  }
  span, label, p, h2, h4, .recommended-text, .default-links, .card-name, .ingredients {
    color: rgb(40, 40, 40);
  }
  .large-buttons {
    background-color: #495057;
  }
  .orange {
    color: rgb(211, 173, 129);
  }
  .footer, .card, .recommended-card, .ingredient-card, .done-recipes-btn {
    background-color: rgba(248,248,248);
  }
  .bg-orange {
    background-color: rgb(211, 173, 129);
  }
  .default-categ-btn {
    background-color: rgba(248,248,248);
    color: rgb(40, 40, 40)
  }

  .ingredients-checkbox {
    
  }

  .login-button {
    background-color: rgb(211, 173, 129);
    color:white;
  }
  .explore-foods-btn, .explore-foods-ops-btn {
    background-color: #926c15;
  }
  .explore-drinks-btn {
    background-color: #893302;
  }

  /* span {
    color: ${(props) => props.theme === 'white' ? 'orange' : 'black'}
  } */
`;

export default Container;
