import React, { useEffect } from 'react';
import * as g from '../../helpers/consts'
import { fetchData, fetchCategory, fetchItensByCategory } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router';

function Foods({ meals, categories, id }) {
  // const router = useRouter();
  return (
    <div className='main'>
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
                  category={'All'}
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
          meals.map((recipe, index) => {
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
      <Footer />

    <style jsx>{`
    * {
      margin: 0;
      padding-bottom: 60px;

    }
    .main {
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
    }

    section {
      background-color: #f2f2f2;
      width: 100vw;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: center;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f2f2f2;
      width: 100%;
    }
    `}</style>

    </div>
  )
}


export async function getStaticProps({ params }) {
  const categories = await fetchCategory('foods');
  if (params.id === 'All') {
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
          id: 'All'
        }
      }
    ],
    fallback: false,
  }

}


export default Foods;
