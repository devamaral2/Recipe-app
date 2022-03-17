import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { getFavoriteRecipes } from '../../helpers/localStorage';
import saveFavorite from '../../helpers/saveFavoriteRecipe';
import shareIcon from '../../public/shareIcon.svg';
import whiteHeartIcon from '../../public/whiteHeartIcon.svg';
import blackHeartIcon from '../../public/blackHeartIcon.svg';
import Container from './Styled';

const RecipeDetailsHeader = ({ type, url, recipe }) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);
  let id;
  let title;
  let image;
  let category;

  if (type === 'food') {
    const { idMeal, strMeal, strMealThumb, strCategory } = recipe;
    id = idMeal;
    title = strMeal;
    image = strMealThumb;
    category = strCategory;
  } else {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = recipe;
    id = idDrink;
    title = strDrink;
    image = strDrinkThumb;
    category = strAlcoholic;
  }

  useEffect(() => {
    const favorites = getFavoriteRecipes();
    if (favorites.length > 0) {
      const isFavorite = favorites.some((value) => value.id === id);
      setFavorite(isFavorite);
    } else setFavorite(false);
  }, [id]);

  const copyToClipboard = () => {
    copy(url);
    setLinkCopied(true);
  };

  return (
    <Container className="recipe-header">
      <img
        alt={ title }
        src={ image }
        data-testid="recipe-photo"
      />

      <div className="options">
        <button
          data-testid="share-btn"
          type="button"
          onClick={ copyToClipboard }
        >
          <img src={ shareIcon } alt="Share icon" />
        </button>

        {
          linkCopied && (
            <p>Link copied!</p>
          )
        }

        <button
          type="button"
          onClick={ () => saveFavorite(type, favorite, setFavorite, recipe) }
        >
          <img
            data-testid="favorite-btn"
            src={ !favorite ? whiteHeartIcon : blackHeartIcon }
            alt="favorite icon"
          />
        </button>
      </div>

      <h2 data-testid="recipe-title">
        { title }
      </h2>
      <h3 data-testid="recipe-category">
        { category }
      </h3>
    </Container>
  );
};

RecipeDetailsHeader.propTypes = {
  type: PropTypes.string,
  recipe: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string,
}.isRequired;

export default RecipeDetailsHeader;
