import { saveFavoriteRecipe,
  removeFavoriteRecipe } from './localStorage';

const saveFavorite = (type, favorite, setFavorite, recipe) => {
  if (favorite) {
    removeFavoriteRecipe(recipe);
    setFavorite(false);
  } else {
    setFavorite(true);
    saveFavoriteRecipe(type, recipe);
  }
};

export default saveFavorite;
