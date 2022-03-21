import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { fetchData } from '../../helpers/services/api';
import Container from './Styled';

// currentPage: foods ou drinks.
const SearchBar = ({ currentPage }) => {
  const [filter, setFilter] = useState('');
  const [id, setId] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { setMeals, setDrinks, viewSearchBar } = useContext(AppContext);
  const router = useRouter();
  const type = currentPage === 'foods' ? 'food' : 'drink';
  useEffect (() => {
    id !== '' && router.push(`/${type}/${id}`)
  },[id])
  
  useEffect(() => {
    if (searchValue.length > 1 && filter === 'firstLetter') {
      global.alert('Your search must have only 1 (one) character');
    }
  }, [searchValue, filter]);

  const handleInputRadio = ({ target }) => {
    if (target.checked) setFilter(target.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData(currentPage, filter, searchValue);
      if (data[Object.keys(data)[0]] === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else {
        const key = Object.keys(data)[0];
        if (currentPage === 'foods') {
          setMeals(data.meals);
        } else {
          setDrinks(data.drinks);
        }
        if (data[key].length === 1) {
          setId(Object.values(data[key][0])[0]); // pega o primeiro valor do objeto data
          // setRedirect(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    viewSearchBar && (
      <Container>
        {/* { redirect && <Redirect to={ `/${currentPage}/${id}` } /> } */}
        <input
          onChange={ (e) => setSearchValue(e.target.value) }
          type="text"
          value={ searchValue }
          placeholder="Search Recipe"
        />

        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            id="ingredient"
            name="searchFilter"
            onChange={ handleInputRadio }
            type="radio"
          />
          Ingredient
        </label>

        <label htmlFor="name">
          <input
            data-testid="name-search-radio"
            id="name"
            name="searchFilter"
            onChange={ handleInputRadio }
            type="radio"
          />
          Name
        </label>

        <label htmlFor="firstLetter">
          <input
            data-testid="first-letter-search-radio"
            id="firstLetter"
            name="searchFilter"
            onChange={ handleInputRadio }
            type="radio"
          />
          First Letter
        </label>

        <button
          data-testid="exec-search-btn"
          onClick={ handleSubmit }
          type="submit"
        >
          Search
        </button>
      </Container>
    )
  );
};


export default SearchBar;
