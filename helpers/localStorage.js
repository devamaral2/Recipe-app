const formatRecipeInProgress = (type, recipe) => {
  const ingredients = Object.keys(recipe).filter((key) => key.includes('Ingredient'))
    .map((key) => recipe[key]);
  if (type === 'food') {
    const { idMeal } = recipe;
    return {
      id: idMeal,
      ingredients: ingredients.toString(),
    };
  }

  const { idDrink } = recipe;
  return {
    id: idDrink,
    ingredients: ingredients.toString(),
  };
};

const formatFavoriteRecipe = (type, recipe) => {
  if (type === 'food' || type === 'foods') {
    return {
      id: recipe.idMeal,
      type: 'food',
      nationality: Object.keys(recipe).includes('strArea') ? recipe.strArea : '',
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };
  }

  return {
    id: recipe.idDrink,
    type: 'drink',
    nationality: Object.keys(recipe).includes('strArea') ? recipe.strArea : '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
  };
};

export function recipeInProgress(type, recipe) {
  const { id, ingredients } = formatRecipeInProgress(type, recipe);
  const savedData = localStorage.getItem('inProgressRecipes');
  if (savedData) {
    const data = JSON.parse(savedData);
    if (type === 'food') {
      data.meals[id] = ingredients;
    } else {
      data.cocktails[id] = ingredients;
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(data));
  } else {
    const data = {
      cocktails: {},
      meals: {},
    };
    if (type === 'food') {
      data.meals[id] = ingredients;
    } else {
      data.cocktails[id] = ingredients;
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(data));
  }
}

export function getInProgressRecipes() {
  const savedData = localStorage.getItem('inProgressRecipes');
  if (savedData) {
    return JSON.parse(savedData);
  }
  return {
    cocktails: {},
    meals: {},
  };
}

export function getFavoriteRecipes() {
  const data = localStorage.getItem('favoriteRecipes');
  if (data) return JSON.parse(data);
  return [];
}

export function saveFavoriteRecipe(type, recipe) {
  const savedFavorites = getFavoriteRecipes();
  const data = [...savedFavorites, formatFavoriteRecipe(type, recipe)];
  localStorage.setItem('favoriteRecipes', JSON.stringify(data));
}

export function removeFavoriteRecipe(recipe) {
  const data = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (data.length > 1) {
    const newData = data.filter((value) => value.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newData));
  } else {
    localStorage.setItem('favoriteRecipes', '[]');
  }
}

export const getDoneRecipes = () => {
  const savedRecipes = localStorage.getItem('doneRecipes');
  if (savedRecipes && savedRecipes.length > 1) {
    const data = JSON.parse(savedRecipes);
    return data;
  }
  return [];
};
