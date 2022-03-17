import React from 'react';
import * as g from '../../helpers/consts'
import { fetchData } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Foodslayout from '../../styled/styledFoods/Foodslayout';


function Foods({ meals }) {

  return (
    <Foodslayout>

      <main>
        {
          meals.length > 0 && meals.map((recipe, index) => {
            if (index <= g.MAX_NUMBER_OF_RESULTS) {
              return (
                <RecipeCard
                  key={index}
                  dataTestId={`${index}-recipe-card`}
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
    </Foodslayout>
  )
}


export async function getServerSideProps() {
  // const foodsAll = await fetchData('foods', 'name', '');
  const res = await fetch('https://recipe-app-next-js-kappa.vercel.app/api/allapis')
  const json = res.json();
  return {
    props: {
      meals: json.all,
    }
  }
}


export default Foods;
