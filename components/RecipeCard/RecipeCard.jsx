import React from 'react';
// import * as g from '../../helpers/consts';
import './recipeCard.module.css';
// import Link from 'next/link';

const RecipeCard = ({ image, name, index, dataTestId, titleTestId, id, filter }) => (
  <div
    className="link"
    // to={ filter === g.FILTER_FOODS ? `/foods/${id}` : `/drinks/${id}` }
  >
    <div className="card"> </div>
    <img
      src={ image }
      alt={ name }
      data-testid={ `${index}-card-img` }
      className="card-img"
    />
    <h3
      className="card-name"
      data-testid={ `${index}-${titleTestId}` }
    >
      { name }
    </h3>
  </div>
);

export default RecipeCard;
