import React from 'react';
// import * as g from '../../helpers/consts';
import Link from 'next/link';

const RecipeCard = ({ image, name, index, dataTestId, titleTestId, id, filter }) => (
  <a
    className="link"
    href={`https://recipe-app-next-js-kappa.vercel.app/food/${id}`}
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
        color: rgb(34, 34, 34)
      }
       .link {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 40px;
        position:relative;
        background-color: #f2f2f2;
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
        color: rgb(60, 60, 60);
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
        background-color: rgba(248,248,248);
      } 
    `}</style>
  </a>
);

export default RecipeCard;
