import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from './styled';
import * as g from '../../helpers/consts';
import AppContext from '../../context/AppContext';
import { fetchData } from '../../helpers/services/api';
import Link from 'next/link';

const IngredientCard = ({ name, filter, index }) => {
  const { setMeals, setDrinks, meals } = useContext(AppContext);
  const url = filter === g.FILTER_FOODS
    ? (`https://www.themealdb.com/images/ingredients/${name}-Small.png`)
    : (`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`);
 
    return (
      

    <div className='card'>
      <Link
      href={ filter === g.FILTER_FOODS ? '/foods/All' : '/drinks/All' }
      >
      {/* <div className="card"> */}

      <a className='ingredient-card'
      onClick={ async () => {
        const data = await fetchData(filter, 'ingredient', name);
        if (filter === g.FILTER_FOODS) return setMeals(data.meals);
        setDrinks(data.drinks)
      } }
    >
        <img
          src={ url }
          alt={ name }
        />
        <p>
          { name }
        </p>
    </a>
    {/* </div> */}
    </Link>
    <style jsx>{`
      * {
    margin: 0;
    padding: 0;
  }
  .card{
  width: 75vw;
  height: 6rem;
  margin: 2.5rem;
    position: relative;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
    
  a {
    width: 100%;
    border-radius: 1.5rem;
    height: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
  }
  p {
    position: absolute;
    right: 2rem;
    bottom: 1.2rem;
  }
  img {
    width: 120px;
    position: absolute;
    left: -1.5rem;
    bottom: 1rem;

  }
    
    `}</style>
      </div>
   
  );
};
IngredientCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
}.isRequired;

export default IngredientCard;
