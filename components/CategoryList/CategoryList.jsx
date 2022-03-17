import React from 'react';
import { useRouter } from 'next/router';

function CategoryList({ category, filter, id }) {
  const router = useRouter();

  function changePage () {
    if (category === id) {
      return router.push('/foods/all')
    }
    router.push(`/foods/${category}`)
  }

  return (
    <>
      <button
        type="button"
        onClick={changePage}
        className= { category === id ? 'orange' : 'white'}
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
