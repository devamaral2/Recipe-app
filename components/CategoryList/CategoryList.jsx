import React, { useContext } from 'react';
import Button from './styled';
import { fetchItensByCategory } from '../../helpers/services/api';
import AppContext from '../../context/AppContext';
// import './categoryList.module.css';
import * as g from '../../helpers/consts';
import { useRouter } from 'next/router';

function CategoryList({ category, filter }) {
  const router = useRouter();
  const {
    setMeals,
    setDrinks,
    getMealsAndDrinks,
    selectedCategoryColor,
    setSelectedCategoryColor,
    selectedDrinkCategoryColor,
    setSelectedDrinkCategoryColor,
  } = useContext(AppContext);

  // const foodCategory = async () => {
  //   if (selectedCategoryColor === category || category === g.ALL) {
  //     setSelectedCategoryColor(g.ALL);
  //     return getMealsAndDrinks(g.FILTER_FOODS);
  //   }
  //   const data = await fetchItensByCategory(filter, category);
  //   setSelectedCategoryColor(category);
  //   return setMeals(data.meals);
  // };

  // const drinksCategory = async () => {
  //   if (selectedDrinkCategoryColor === category || category === g.ALL) {
  //     setSelectedDrinkCategoryColor(g.ALL);
  //     return getMealsAndDrinks(g.FILTER_DRINKS);
  //   }
  //   const data = await fetchItensByCategory(filter, category);
  //   setSelectedDrinkCategoryColor(category);
  //   return setDrinks(data.drinks);
  // };

  // const searchByCategory = () => {
  //   if (filter === g.FILTER_FOODS) {
  //     foodCategory();
  //   }
  //   if (filter === g.FILTER_DRINKS) {
  //     drinksCategory();
  //   }
  // };
  function searchByCategory () {
    router.push(`/foods/${category}`)
  }

  return (
    <>
      <button
        type="button"
        onClick={searchByCategory}
        className= {((filter === g.FILTER_FOODS
          && selectedCategoryColor === category)
          || (filter === g.FILTER_DRINKS
            && selectedDrinkCategoryColor === category))
          ? 'orange' : 'white'}
      >
        {category}
      </button>
      <style jsx>{`
        button {
          border: none;
          padding: 10px;
          width: 150px;
          margin: 5px;
          border-radius: 10rem;
          box-shadow: 
          rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, 
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, 
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          font-family: Arial, Helvetica, sans-serif;
        }
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
