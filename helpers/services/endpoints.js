export const ENDPOINTS = {
  foods: {
    ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    getRecipe: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    random: 'https://www.themealdb.com/api/json/v1/1/random.php',
  },
  drinks: {
    ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    firstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    getRecipe: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  },
};

export const CATEGORY_ENDPOINT = {
  foods: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
};

export const CATEGORY_SEARCH_ENDPOINT = {
  foods: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
};

export const INGREDIENT_LISTS = {
  foods: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
};
