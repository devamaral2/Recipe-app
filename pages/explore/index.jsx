import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Colors from '../../styled/colorsStyle/Colors';

function Explore() {

  return (
    <Colors>
    <div className="body">
      <Header 
        pathname={ 'explore' }
        namePage="Explore" 
        viewIcon="false" 
    />
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
      <Footer pathname={ 'explore' }/>
      <style jsx>{`
        .body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          align-items: center;
        }
        button {
          border-radius: 10px;
          color: white;
          font-size: 18px;
          height: 4rem;
          margin: 2rem;
          width: 15rem;
        }
        .explore-foods-btn {
          margin-top: 6rem;
        }
        .link-explore {
          margin: 30rem;
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div >
          </Colors>
  );
}

export default Explore;
