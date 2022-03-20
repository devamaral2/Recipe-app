import React from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../../../helpers/services/api';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Colors from '../../../styled/colorsStyle/Colors';
import { useRouter } from 'next/router';

function ExploreFoods() {
  const router = useRouter();
  const randomRecipe = async () => {
    const data = await fetchData('foods', 'random', '');
    const { meals } = data;
    router.push(`/food/${meals[0].idMeal}`);
  };

  return (
    <Colors>
      <div className='body'>
        <Header
          pathname="explore"
          namePage="Explore Foods"
          viewIcon="false"
        />
        <div className='body'>
          <button
            className='explore-foods-ops-btn first'
            type="button"
            onClick={() => router.push('/explore/foods/ingredients')}
          >
            By Ingredient
          </button>

          <button
            className='explore-foods-ops-btn'
            type="button"
            onClick={() => router.push('/explore/foods/nationalities')}
          >
            By Nationality
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

ExploreFoods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreFoods;