import React from 'react';
import * as g from '../../helpers/consts'
import { fetchData, fetchCategory } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Foodslayout from '../../styled/styledFoods/Foodslayout';


function Foods({ meals,categories }) {

  return (
    <Foodslayout>
     {categories.map((category) => (<p key={category.strCategory}>{category.strCategory}</p>))}

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


export async function getStaticProps() {
  const foodsAll = await fetchData('foods', 'name', '');
  const categories = await fetchCategory('foods');
  return {
    props: {
      meals: foodsAll.meals,
      categories: categories.meals,
    }
  }
}


export default Foods;
