import React, {useContext} from 'react';
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

function Drinks({ initialDrinks, categories, id }) {
  const { theme, drinks } = useContext(AppContext);
  const cardsContent = drinks.length === 0 ? initialDrinks : drinks
  const router = useRouter();
  return (
    <Colors theme= { theme } >
      <div className='body'>

      <Header 
        viewIcon="true" 
        namePage="Drinks" 
        pathname={ router.pathname }
      />
      <SearchBar currentPage={ g.FILTER_DRINKS } />
      <section className="categories">
        {
          categories.map((category, index) => {
            if (index < g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={index}
                  category={category.strCategory}
                  filter={g.FILTER_DRINKS}
                  id={id}
                />
              );
            } if (index === g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                key={index}
                category={'All'}
                  filter={g.FILTER_DRINKS}
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
                image={recipe.strDrinkThumb}
                name={recipe.strDrink}
                  index={index}
                  id={recipe.idDrink}
                  filter={g.FILTER_DRINKS}
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
  const categories = await fetchCategory('drinks');
  if (params.id === 'All') {
  const allDrinks = await fetchData('drinks', 'name', '');
  return {
    props: {
      initialDrinks: allDrinks.drinks,
      categories: categories.drinks,
      id: params.id
    }
  }
  }
  const allDrinks = await fetchItensByCategory('drinks', params.id);
  return {
    props: {
      initialDrinks: allDrinks.drinks,
      categories: categories.drinks,
      id: params.id
    }
  }
}
export async function getStaticPaths() {
  const categories = await fetchCategory('drinks');
    const sliced = categories.drinks.slice(0,5)
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


export default Drinks;
