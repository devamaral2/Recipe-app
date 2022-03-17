import React from 'react';
import * as g from '../../helpers/consts'
import { fetchData } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function Foods({ meals }) {

  return (
      <main>
        {
          meals.length > 0 && meals.map((recipe, index) => {
            if (index <= g.MAX_NUMBER_OF_RESULTS) {
              return (
                <RecipeCard
                  key={ index }
                  dataTestId={ `${index}-recipe-card` }
                  image={ recipe.strMealThumb }
                  name={ recipe.strMeal }
                  index={ index }
                  id={ recipe.idMeal }
                  filter={ g.FILTER_FOODS }
                />
              );
            }
            return null;
          })
        }
      </main>
  )
}


export async function getStaticProps() {
  const foodsAll = await fetchData('foods', 'name', '');

  return {
    props: {
      meals: foodsAll.meals,
    }
  }
}


export default Foods;
