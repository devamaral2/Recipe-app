import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import {
  fetchData,
  fetchIngredients,
  fetchAreas,
  fetchMealByNationality,
} from '../helpers/services/api';
import * as g from '../helpers/consts';

const Provider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] =useState([]);
  const [recipeFilter, setRecipeFilter] = useState(g.ALL);
  const [viewSearchBar, setViewSearchBar] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState(g.ALL);
  const [mealsByNationality, setMealsByNationality] = useState([]);
  const [theme, setTheme] = useState('white');
  const [blue, setBlue] = useState('blue')


  async function getMealsAndDrinks(selection) {
    if (selection === g.ALL || g.FILTER_DRINKS) {
      const startingDrinks = await fetchData(g.FILTER_DRINKS, 'name', '');
      setDrinks(startingDrinks.drinks);
    }
    if (selection === g.ALL || g.FILTER_FOODS) {
      const startingMeals = await fetchData(g.FILTER_FOODS, 'name', '');
      setMeals(startingMeals.meals);
    }
  }

  async function getMealsByNationality() {
    if (area === g.ALL) {
      const startingMeals = await fetchData(g.FILTER_FOODS, 'name', '');
      return setMealsByNationality(startingMeals.meals);
    }
    const mealsByNacionalityData = await fetchMealByNationality(area);
    setMealsByNationality(mealsByNacionalityData.meals);
  }

  useEffect(() => {
    getMealsByNationality();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area]);

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    mealsCategory,
    drinksCategory,
    viewSearchBar,
    setViewSearchBar,
    recipeFilter,
    setRecipeFilter,
    favoriteRecipes,
    setFavoriteRecipes,
    drinksIngredients,
    getMealsAndDrinks,
    areas,
    setArea,
    mealsByNationality,
    theme,
    setTheme,
    recipe,
    setRecipe,
    blue,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
