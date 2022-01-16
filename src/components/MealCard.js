import React from 'react';
import Styled from 'styled-components';

import {
  Link
} from 'react-router-dom';

const Card = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 150px;
  border-radius: 15px;
  outline: 2px solid black;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  *:not(img) {
    padding: 0 10px;
  }

  img.card-image {
    width: 150px;
    height: 150px;
  }
`

const SeeMore = Styled(Link)`
  background-color: green;
  color: white;
  text-decoration: none;
  width: 90px;
  border-radius: 10px;
  margin-bottom: 15px;
`

export const MealCard = ({ meal }) => {
  return (
    <Card>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-image" />
      <h4>{meal.strMeal}</h4>
      <SeeMore to={`/meal/${meal.idMeal}`}>
        See More
      </SeeMore>
    </Card>
  )
}