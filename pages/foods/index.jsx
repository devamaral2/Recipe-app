import React, { useContext } from 'react';
import AppContext from '../../helpers/context/AppContext';
// import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import * as g from '../../helpers/consts';
import Container from '../../styled/styledFoods';
import CategoryList from '../../components/CategoryList/CategoryList';

function Foods() {
  const { meals, mealsCategory } = useContext(AppContext);

  return (
    <Container>
      <Header viewIcon="true" namePage="Foods" />
      {/* <SearchBar currentPage={ g.FILTER_FOODS } /> */}
      <section className="categories">
        {
          mealsCategory?.map((category, index) => {
            if (index < g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={ index }
                  category={ category.strCategory }
                  filter={ g.FILTER_FOODS }
                />
              );
            } if (index === g.MAX_NUMBER_OF_CATEGORY) {
              return (
                <CategoryList
                  key={ index }
                  category={ g.ALL }
                  filter={ g.FILTER_FOODS }
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
      <Footer />
    </Container>
  );
}

export default Foods;
