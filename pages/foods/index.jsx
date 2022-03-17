import React from 'react';
import * as g from '../../helpers/consts'
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


export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/allapis')
  const json = await res.json();
  return {
    props: {
      meals: json.all,
      categories: json.categories,
    }
  }
}


export default Foods;
