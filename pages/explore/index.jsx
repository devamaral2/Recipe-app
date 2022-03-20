// import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Colors from '../../styled/colorsStyle/Colors';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Explore() {
  const { theme } = useContext(AppContext);
  return (
    <Colors theme={theme}>
      <div className='body'>
        <Header
          pathname={'explore'}
          namePage="Explore"
          viewIcon="false"
        />
        <section>

          <button
            type="button"
            className='explore-foods-btn'
          >
            <a className="link-explore" href="/explore/foods">Explore Foods</a>
          </button>
          <button
            className='explore-drinks-btn'
            type="button"
          >
            <a className="link-explore" href="/explore/drinks">Explore Drinks</a>
          </button >
        </section>
        <Footer pathname={'explore'} />
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }
          div {
            width: 100vw;
            height: 100vh;
          }
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          button {
            font-size: 18px;
            height: 4rem;
            margin: 2rem;
            width: 15rem;
            border-radius: 10px;
            text-decoration: none;
          }
          .explore-foods-btn {
            margin-top: 6rem;
          }
          .link-explore {
            margin: 3rem;
            text-decoration: none;
            color: white;
           } 
          `}</style>
      </div>
    </Colors>
  );
}

export default Explore;