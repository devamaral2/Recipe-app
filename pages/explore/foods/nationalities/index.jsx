import React, { useContext } from 'react';
import Footer from '../../../../components/Footer/Footer';
import Header from '../../../../components/Header/Header';
import AppContext from '../../../../context/AppContext';
import RecipeCard from '../../../../components/RecipeCard/RecipeCard';
import * as g from '../../../../helpers/consts';
import Colors from '../../../../styled/colorsStyle/Colors';
import { fetchAreas, fetchData } from '../../../../helpers/services/api';

function ExploreFoodsNationalities({ areas, initialResults }) {
  const { setArea, mealsByNationality } = useContext(AppContext);
  const results = mealsByNationality.length === 0 ? initialResults : mealsByNationality;
  return (
    <Colors>
      <div className='body'>
        <Header
          pathname="explore"
          namePage="Explore Nationalities"
          viewIcon="true"
        />
        <section>
          <select
            className='form-select'
            onChange={(e) => setArea(e.target.value)}
          >
            {areas.length > 0
              && areas.map(({ strArea }) => (
                <option
                  key={strArea}
                  value={strArea}
                >
                  {strArea}
                </option>
              ))}
          </select>
        </section>
        <main>
          {
            results.map((recipe, index) => {
              if (index <= g.MAX_NUMBER_OF_RESULTS) {
                return (
                  <RecipeCard
                    key={index}
                    image={recipe.strMealThumb}
                    name={recipe.strMeal}
                    index={index}
                    id={recipe.idMeal}
                    filter={g.FILTER_FOODS}
                  />
                );
              }
              return null;
            })
          }
        </main>
      </div>
      <Footer pathname="explore" />
      <style jsx>{`
        section {
          margin: 10px;
        }
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: whitesmoke;
          margin-bottom: 60px;
          width: 100%;
        }
        section {
          display: flex;
          justify-content: center;
        }
        select {
          width: 70vw;
        }
      `}</style>
    </Colors>
  );
}

export async function getStaticProps() {
  const areasData = await fetchAreas();
  const areasArray = areasData.meals;
  const arrayWithAlloption = [...areasArray, { strArea: g.ALL }];
  const startingMeals = await fetchData(g.FILTER_FOODS, 'name', '');
  return {
    props: {
      areas: arrayWithAlloption,
      initialResults: startingMeals.meals,
    }
  }
}

export default ExploreFoodsNationalities;
