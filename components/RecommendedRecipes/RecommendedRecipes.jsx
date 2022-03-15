import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard/RecipeCard';
import * as g from '../../helpers/consts';
import Container from './styled';

const RecommendedRecipes = ({ type, recipes }) => (
  <Container>
    {
      recipes.map((recipe, index) => {
        if (index <= g.MAX_NUMBER_OF_RECOMMENDED_RECIPES) {
          return (
            <RecipeCard
              key={ `${index}-recomendation-card ` }
              index={ index }
              dataTestId={ `${index}-recomendation-card` }
              image={ type === 'drink' ? recipe.strMealThumb : recipe.strDrinkThumb }
              name={ type === 'drink' ? recipe.strMeal : recipe.strDrink }
              titleTestId="recomendation-title"
            />
          );
        }
        return null;
      })
    }
  </Container>
);

RecommendedRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecommendedRecipes;
