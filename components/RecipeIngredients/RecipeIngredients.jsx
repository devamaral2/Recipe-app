import React from 'react';
import PropTypes from 'prop-types';
import Container from './Styled';

const RecipeIngredients = ({ object }) => {
  const ingredients = Object.keys(object).filter((key) => key.includes('Ingredient'));
  const measures = Object.keys(object).filter((key) => key.includes('Measure'));

  return (
    <Container className="ingredients">
      <h4>Ingredients</h4>
      <ol>
        {
          ingredients.map((ingredient, index) => {
            if (object[ingredient] && object[ingredient].length > 1) {
              return (
                <li
                  key={ index }
                  className="ingredients"
                >
                  { `${object[ingredient]} - ${object[measures[index]]}` }
                </li>
              );
            }
            return null;
          })
        }
      </ol>
    </Container>
  );
};

RecipeIngredients.propTypes = {
  object: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default RecipeIngredients;
