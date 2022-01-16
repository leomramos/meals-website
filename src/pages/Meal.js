import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
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

  #go-home {
    text-decoration: none;
    font-size: 0.8em;
    color: white;
    background-color: gray;
    padding: 5px 10px;
    border-radius: 15px;
  }
`

export const Meal = () => {
  const [mealInfo, setMealInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setMealInfo(response.data.meals[0]);
      }).catch(error => {
        console.error(error);
      });
  }, [id])

  return (
    <Container>
      <ShowMeal meal={mealInfo} />
      <Link to={"/"} id="go-home">
        Home
      </Link>
    </Container>
  )
}