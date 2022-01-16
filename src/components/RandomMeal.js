import React from 'react';
import Styled from 'styled-components';

import {
  ShowMeal
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

export const RandomMeal = ({ meal }) => {
  return (
    <Container id="random-meal">
      <ShowMeal meal={meal} />
    </Container >
  )
}