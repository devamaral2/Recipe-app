import React, { useEffect } from 'react';
import * as g from '../../helpers/consts'
import { fetchData, fetchCategory, fetchItensByCategory } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Foodslayout from '../../styled/styledFoods/Foodslayout';
import CategoryList from '../../components/CategoryList/CategoryList';

function Foods({ meals, categories, id }) {
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
                  id={id}
                />
              );
            } if (index === g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={index}
                  category={g.ALL}
                  filter={g.FILTER_FOODS}
                  id={id}
                />
              );
            }
            return null;
          })
        }
      </section>
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


export async function getStaticProps({ params }) {
  const categories = await fetchCategory('foods');
  if (params.id === 'all') {
  const foodsAll = await fetchData('foods', 'name', '');
  return {
    props: {
      meals: foodsAll.meals,
      categories: categories.meals,
      id: params.id
    }
  }
  }
  const foodsAll = await fetchItensByCategory('foods', params.id);
  return {
    props: {
      meals: foodsAll.meals,
      categories: categories.meals,
      id: params.id
    }
  }
}
export async function getStaticPaths() {
  const categories = await fetchCategory('foods');
    const sliced = categories.meals.slice(0,5)
    const allPaths = sliced.map((category) => {
        return {
          params: {id: category.strCategory}
        }
    })

  return {
    paths: [ ...allPaths,
      { 
        params: {
          id: 'all'
        }
      }
    ],
    fallback: false,
  }

}


export default Foods;
