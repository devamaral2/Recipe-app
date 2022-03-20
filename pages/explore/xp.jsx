import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Colors from '../../styled/colorsStyle/Colors';
import ExploreLayout from '../../styled/exploreStyle/ExploreLayout';

function Explore() {

  return (
    <Colors>
      <ExploreLayout>
        <div className='body'>

          <Header
            pathname={'explore'}
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
          <Footer pathname={'explore'} />
        </div>
      </ ExploreLayout>
    </Colors>
  );
}

export default Explore;