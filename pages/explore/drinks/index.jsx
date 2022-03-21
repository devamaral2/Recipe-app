import React, { useContext } from 'react';
import { fetchData } from '../../../helpers/services/api';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Colors from '../../../styled/colorsStyle/Colors';
import { useRouter } from 'next/router';
import AppContext from '../../../context/AppContext';

function ExploreDrinks() {
  const {theme} = useContext(AppContext);
  const router = useRouter();
  const randomRecipe = async () => {
    const data = await fetchData('drinks', 'random', '');
    const { drinks } = data;
    router.push(`/drink/${drinks[0].idDrink}`);
  };

  return (
    <Colors theme={theme}>
      <div className='body'>
        <Header
          pathname="explore"
          namePage="Explore Drinks"
          viewIcon="false"
        />
        <div className='body'>
          <button
            className='explore-foods-ops-btn first'
            type="button"
            onClick={() => router.push('/explore/drinks/ingredients')}
          >
            By Ingredient
          </button>

          <button
            className='explore-foods-ops-btn'
            type="button"
            onClick={randomRecipe}
          >
            Surprise me!
          </button>
        </div>
        <Footer
          pathname="explore"
        />
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
        .first {
          margin-top: 6rem;
        }
        .link-explore {
          margin: 30rem;
          text-decoration: none;
          color: white;
        }
        `}</style>
      </div>
    </Colors>
  );
}

export default ExploreDrinks;