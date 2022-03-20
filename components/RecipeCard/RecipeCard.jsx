import React from 'react';
import * as g from '../../helpers/consts';
import Link from 'next/link';

const RecipeCard = ({ image, name, index, titleTestId, id, filter }) => (
  <a
    className="link"
    href={filter === 'foods' ? `/food/${id}`: `/drink/${id}`}
    // href={`https://recipe-app-next-js-kappa.vercel.app/food/${id}`}
    // href={`http://localhost:3000/food/${id}`}
  >
    <div className="card"> </div>
    <img
      src={image}
      alt={name}
      data-testid={`${index}-card-img`}
      className="card-img"
    />
    <h3
      className="card-name"
      data-testid={`${index}-${titleTestId}`}
    >
      {name}
    </h3>
    <style jsx>{`
      * {
        text-decoration:none; 
        font-family: Arial, Helvetica, sans-serif;
      }
       .link {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 40px;
        position:relative;
        width: 70%;
        min-height: 16rem;
      }
      .card-img {
        border-radius: 50%;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 150px;
      }
      .card-name {
        text-align: center;
        text-decoration:none; 
        z-index: 1;
        margin-top: 30px;
        font-size: 1.6rem;
      }

      .card {
        float: left;
        width: 100%;
        min-height: 88%;
        z-index: 0;
        position:absolute;
        bottom: 0;
        border-radius: 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      } 
    `}</style>
  </a>
);

export default RecipeCard;
