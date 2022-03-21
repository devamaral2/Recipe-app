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
    <Container>
      <Link
      href={ filter === g.FILTER_FOODS ? '/foods/All' : '/drinks/All' }
    >
      <a
      className='ingredient-card'
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
    </Link>
      </Container>
  );
};
IngredientCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
}.isRequired;

export default IngredientCard;
