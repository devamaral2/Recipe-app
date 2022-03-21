import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../context/AppContext';

function CategoryList({ category, filter, id }) {
  const { setMeals, setDrinks } = useContext(AppContext);
  const router = useRouter();
  const route = filter === 'foods' ? 'foods' : 'drinks';

  function changePage () {
    setMeals([]);
    setDrinks([]);
    if (category === id) {
      return router.push(`/${route}/All`)
    }
    router.push(`/${route}/${category}`)
  }

  return (
    <>
      <button
        onClick={changePage}
        className= { category === id ? 'bg-orange' : 'default-categ-btn '}
      >
        {category}
      </button>
      <style jsx>{`
        button {
          border: none;
          font-size: 90%;
          border-radius: 10rem;
          width: 8rem;
          margin: 5px;
          box-shadow: 
          rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, 
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, 
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          font-family: Arial, Helvetica, sans-serif;
          padding: 0.5rem;
        }
      `}
      </style>
    </>
      );
}

      export default CategoryList;
