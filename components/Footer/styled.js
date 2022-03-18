import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: rgba(248,248,248);
  bottom: 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
* {
  margin: 0;
  padding: 0;
}
a {
  pointer-events: none;
  /* width: 60px; */
  font-size: 1.5rem;
  margin: 3rem;
  color: rgb(34, 34, 34);
}

.orange {
  color: rgb(211, 173, 129);;
}

`;

// const Container = styled.div`
//   align-items: center;
//   background-color: rgb(20, 20, 20);
//   bottom: 0;
//   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
//   rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
//   display: flex;
//   height: 3rem;
//   justify-content: space-evenly;
//   position: fixed;
//   width: 100vw;
//   z-index: 1;
// object, img {
//   color: green;
//   fill: green;
//   pointer-events: none;
//   height: 30px;
//   filter: invert(80%);
// }
// h2 {
//   color: green;
// }
// `;

export default Container;
