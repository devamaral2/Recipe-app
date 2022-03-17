import React from 'react';
import * as g from '../../helpers/consts'
import { fetchData, fetchCategory } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Foodslayout from '../../styled/styledFoods/Foodslayout';
import CategoryList from '../../components/CategoryList/CategoryList';

function Foods({ meals, categories }) {
  return (
    <Foodslayout>
      <section className="categories">
        {
          categories.map((category, index) => {
            if (index < g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={index}
                  category={category.strCategory}
                  filter={g.FILTER_FOODS}
                />
              );
            } if (index === g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={index}
                  category={g.ALL}
                  filter={g.FILTER_FOODS}
                />
              );
            }
            return null;
          })
        }
      </section>
      <main>
        {
          meals?.length > 0 && meals.map((recipe, index) => {
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
