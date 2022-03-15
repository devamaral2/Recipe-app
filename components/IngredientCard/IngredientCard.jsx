import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from './styled';
import * as g from '../../helpers/consts';
import AppContext from '../../context/AppContext';
import { fetchData } from '../../helpers/services/api';

const IngredientCard = ({ name, filter, index }) => {
  const { setMeals, setDrinks } = useContext(AppContext);
  const url = filter === g.FILTER_FOODS
    ? (`https://www.themealdb.com/images/ingredients/${name}-Small.png`)
    : (`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`);
  return (
    <Link
      data-testid={ `${index}-ingredient-card` }
      to={ filter === g.FILTER_FOODS ? '/foods/' : '/drinks/' }
      onClick={ async () => {
        const data = await fetchData(filter, 'ingredient', name);
        if (filter === g.FILTER_FOODS) return setMeals(data.meals);
        setDrinks(data.drinks);
      } }
    >
      <Container>
        <img
          src={ url }
          alt={ name }
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>
          { name }
        </p>
      </Container>
    </Link>
  );
};
IngredientCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
}.isRequired;

export default IngredientCard;
