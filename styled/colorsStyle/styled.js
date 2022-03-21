import styled from 'styled-components';

const darkTheme = "rgba(248,248,248)";
const lightTheme = "rgb(40, 40, 40)";
const bgLightTheme = "#f2f2f2";
const bgDarkTheme = "black";
const cardLight = "rgba(248,248,248)";


const Container = styled.div`
  .body, .link, main {
    /* background-color: black; */
    background-color: ${(props) => props.theme === 'light' ? bgLightTheme : bgDarkTheme}
  }
  .login-inputs {
    /* border-bottom: 2px solid rgba(255, 255, 255, 0.329); */
    border-bottom: 2px solid #495057;
  }

  input::placeholder {
    color: #495057;
    /* color: silver; */
    /* color: black; */
  }
  span, h1, .login-inputs, label, p, h2, h4, .recommended-text, .default-links, .card-name, .ingredients, .share-icon, .heart {
    color:  ${(props) => props.theme === 'light' ? lightTheme : darkTheme}
  }
  .large-buttons {
    background-color: #495057;
  }
  .orange {
    color: rgb(211, 173, 129);
  }
  .footer, .card, .recommended-card, .ingredient-card, .done-recipes-btn, .favorite-content {
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

  .explore-foods-btn, .explore-foods-ops-btn {
    background-color: #926c15;
  }
  .explore-drinks-btn, .explore-drinks-ops-btn {
    background-color: #893302;
  }


  

  /* span {
    color: ${(props) => props.theme === 'white' ? 'orange' : 'black'}
  } */
`;

export default Container;
