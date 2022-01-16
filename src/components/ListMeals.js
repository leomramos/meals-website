import React from 'react';
import Styled from 'styled-components';

import {
  MealCard
} from '../components';

const Container = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 50px;
  h1 {
    font-size: 2.5em;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
  }

  border-bottom: 3px solid gray;
`

const Wrapper = Styled.div`
  flex-direction: ${({ column }) => column ? 'column' : 'unset'};
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`

export const ListMeals = ({ meals, category }) => {
  return (
    <Container id="random-meal">
      <h1>Meals List - {category}</h1>
      <Wrapper>
        {meals && meals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </Wrapper>
    </Container >
  )
}