import React, { useContext } from 'react';
import Button from './styled';
import { fetchItensByCategory } from '../../helpers/services/api';
import AppContext from '../../context/AppContext';
// import './categoryList.module.css';
import * as g from '../../helpers/consts';

function CategoryList({ category, filter }) {
  const {
    setMeals,
    setDrinks,
    getMealsAndDrinks,
    selectedCategoryColor,
    setSelectedCategoryColor,
    selectedDrinkCategoryColor,
    setSelectedDrinkCategoryColor,
  } = useContext(AppContext);

  const foodCategory = async () => {
    if (selectedCategoryColor === category || category === g.ALL) {
      setSelectedCategoryColor(g.ALL);
      return getMealsAndDrinks(g.FILTER_FOODS);
    }
    const data = await fetchItensByCategory(filter, category);
    setSelectedCategoryColor(category);
    return setMeals(data.meals);
  };

  const drinksCategory = async () => {
    if (selectedDrinkCategoryColor === category || category === g.ALL) {
      setSelectedDrinkCategoryColor(g.ALL);
      return getMealsAndDrinks(g.FILTER_DRINKS);
    }
    const data = await fetchItensByCategory(filter, category);
    setSelectedDrinkCategoryColor(category);
    return setDrinks(data.drinks);
  };

  const searchByCategory = () => {
    if (filter === g.FILTER_FOODS) {
      foodCategory();
    }
    if (filter === g.FILTER_DRINKS) {
      drinksCategory();
    }
  };
  return (
    <>
      <Button
        type="button"
        onClick={searchByCategory}
        className='orange'
        // {((filter === g.FILTER_FOODS
        //   && selectedCategoryColor === category)
        //   || (filter === g.FILTER_DRINKS
        //     && selectedDrinkCategoryColor === category))
        //   ? 'orange' : 'white'}
      >
        {category}
      </Button>
      <style jsx>{`
        .orange {
          background-color: rgb(211, 173, 129);
        }
        .white {
          background-color: white;
        }
      `}
      </style>
    </>
      );
}

      export default CategoryList;
