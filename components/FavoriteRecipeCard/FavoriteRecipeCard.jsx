import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import AppContext from '../../context/AppContext';
import { removeFavoriteRecipe } from '../../helpers/localStorage';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteRecipeCard = ({ index, recipe }) => {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);
  const [linkCopied, setLinkCopied] = useState(false);

  const { id, type, name, nationality, image } = recipe;
  const category = recipe.type === 'food' ? recipe.category : recipe.alcoholicOrNot;

  const copyToClipboard = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLinkCopied(true);
  };

  const removeFavorite = () => {
    setFavoriteRecipes([...favoriteRecipes, id]);
    removeFavoriteRecipe(recipe);
  };

  return (
    <div>
      <Link key={ index } to={ `/${recipe.type}s/${recipe.id}` }>
        <img
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          style={ { width: '100%' } }
        />

        <p data-testid={ `${index}-horizontal-top-text` }>
          { `${nationality} - ${category}` }
        </p>

        <h2 data-testid={ `${index}-horizontal-name` }>
          { name }
        </h2>
      </Link>

      <button
        type="button"
        onClick={ copyToClipboard }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share icon"
        />
      </button>

      {
        linkCopied && (
          <p>Link copied!</p>
        )
      }

      <button
        type="button"
        onClick={ removeFavorite }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="favorite icon"
        />
      </button>
    </div>
  );
};

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}.isRequired;

export default FavoriteRecipeCard;
