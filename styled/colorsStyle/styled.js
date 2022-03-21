import { CgDropInvert } from 'react-icons/cg';
import styled from 'styled-components';

const darkTheme = "rgba(248,248,248)";
const lightTheme = "rgb(40, 40, 40)";
const bgLightTheme = "#f2f2f2";
const bgDarkTheme = "#02040f";
const cardLight = "rgba(248,248,248)";
const cardDark = "#161a1d"


const Container = styled.div`
  .body, .link, main {
    /* background-color: black; */
    background-color: ${(props) => props.theme === 'light' ? bgLightTheme : bgDarkTheme}
  }

  span, label, p, h2, h4, .done-recipes-btn, .recommended-text, .default-links, .default-categ-btn, .card-name, .ingredients, .share-icon, .heart {
    color:  ${(props) => props.theme === 'light' ? lightTheme : darkTheme}
  }
  .footer, .card, .recommended-card, .ingredient-card, .done-recipes-btn, .favorite-content, .default-categ-btn {
    background-color: ${(props) => props.theme === 'light' ? cardLight : cardDark}
  }
  
  .search-icon {
    filter : ${(props) => props.theme === 'dark' && 'invert(100%)' }
  }
  
  
  
  input::placeholder {
    color: silver;
  }
  .bg-orange {
  background-color: rgb(211, 173, 129);
  }
  .explore-foods-btn, .explore-foods-ops-btn {
    background-color: #926c15;
  }
  .explore-drinks-btn, .explore-drinks-ops-btn {
    background-color: #893302;
  }
  .large-buttons {
    background-color: #495057;
  }
  .orange {
    color: rgb(211, 173, 129);
  }


  

  /* span {
    color: ${(props) => props.theme === 'white' ? 'orange' : 'black'}
  } */
`;

export default Container;
