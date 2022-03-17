import React from 'react';
// import * as g from '../../helpers/consts';
// import Link from 'next/link';

const RecipeCard = ({ image, name, index, dataTestId, titleTestId, id, filter }) => (
  <div
    className="link"
  // to={ filter === g.FILTER_FOODS ? `/foods/${id}` : `/drinks/${id}` }
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
      .link {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 40px;
        position:relative;
        background-color: whitesmoke;
        width: 80%;
      }
      .card-img {
        border-radius: 50%;
        background-color: inherit;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        width: 150px;
      }
      .card-name {
        text-align: center;
        z-index: 1;
        margin-top: 15px;
        color: black;
      }

      .card {
        float: left;
        width: 100%;
        height: 180px;
        z-index: 0;
        position:absolute;
        bottom: 0;
        border-radius: 1.5rem;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        background-color: #f8f9fa;
      }
    `}</style>
  </div>
);

export default RecipeCard;
