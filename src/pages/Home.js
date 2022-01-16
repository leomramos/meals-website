import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  RandomMeal
} from '../components';

export const Home = () => {
  const [randomMeal, setRandomMeal] = useState({});
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState('');
  console.log(randomMeal)

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => {
        setRandomMeal(response.data.meals[0]);
      }).catch(error => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        setMeals(response.data.meals);
      }).catch(error => {
        console.error(error);
      });
  }, [category])

  return (
    <main>
      <RandomMeal meal={randomMeal} />
    </main>
  )
}