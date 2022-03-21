import {
  ENDPOINTS,
  CATEGORY_ENDPOINT,
  CATEGORY_SEARCH_ENDPOINT,
  INGREDIENT_LISTS,
} from './endpoints';

export const fetchData = async (type, filter, value) => {
  const response = await fetch(`${ENDPOINTS[type][filter]}${value}`);
  const data = await response.json();
  return data;
};

export const fetchCategory = async (type) => {
  const url = type === 'foods' ? CATEGORY_ENDPOINT.foods : CATEGORY_ENDPOINT.drinks;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchItensByCategory = async (filter, category) => {
  const type = category === "Others" ? "Other/Unknown" : category;
  const response = await fetch(`${CATEGORY_SEARCH_ENDPOINT[filter]}${type}`);
  const data = await response.json();
  return data;
};

export const fetchIngredients = async (filter) => {
  const response = await fetch(INGREDIENT_LISTS[filter]);
  const data = await response.json();
  return data;
};

export const fetchAreas = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const data = await response.json();
  return data;
};

export const fetchMealByNationality = async (area) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const data = await response.json();
  return data;
};

const fetchFoodOrDrink = async (pathname, id) => {
  const source = pathname.includes('/food') ? 'themealdb' : 'thecocktaildb';
  return fetch(`https://www.${source}.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.meals || data.drinks);
};

export default fetchFoodOrDrink;
