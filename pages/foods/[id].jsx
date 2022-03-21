import React, {useContext, useEffect} from 'react';
import * as g from '../../helpers/consts'
import { fetchData, fetchCategory, fetchItensByCategory } from '../../helpers/services/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header'
import AppContext from '../../context/AppContext';
import Colors from '../../styled/colorsStyle/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';

function Foods({ foods, categories, id }) {
  const { theme, meals, setTheme } = useContext(AppContext);
  const cardsContent = meals.length === 0 ? foods : meals
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('theme') 
    data && setTheme(data)
  }, [])

  return (
    <Colors theme= { theme } >
      <div className='body'>

      <Header 
        viewIcon="true" 
        namePage="Foods" 
        pathname={ router.pathname }
      />
      <SearchBar currentPage={ g.FILTER_FOODS } />
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
          cardsContent.map((recipe, index) => {
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
      </div>
      <Footer pathname={ router.pathname }/>

      <style jsx>{`
        * {
          padding-bottom: 60px;
          margin: 0;
        }
        .body {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          align-items: center;
        }
        section {
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          align-items: center;
        }
        main {
          flex-direction: column;
          align-items: center;
          width: 100%;
          display: flex;
        }
      `}</style>

    </Colors>
  )
}


export async function getStaticProps({ params }) {
  const categories = await fetchCategory('foods');
  if (params.id === 'All') {
  const foodsAll = await fetchData('foods', 'name', '');
  return {
    props: {
      foods: foodsAll.meals,
      categories: categories.meals,
      id: params.id
    }
  }
  }
  const foodsAll = await fetchItensByCategory('foods', params.id);
  return {
    props: {
      foods: foodsAll.meals,
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
