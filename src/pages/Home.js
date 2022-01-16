import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Select from 'react-select';

import {
  RandomMeal,
  ListMeals
} from '../components';

export const Home = () => {
  const [randomMeal, setRandomMeal] = useState({});
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);

  const options = categoriesList.map(option => {
    return {
      label: option.strCategory,
      value: option.strCategory
    }
  })

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => {
        setRandomMeal(response.data.meals[0]);
      }).catch(error => {
        console.error(error);
      });

    axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response => {
        setCategoriesList(response.data.categories);
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
      <Select options={options} placeholder={"Category"} currentValue={category} onChange={value => setCategory(value.value)} />
      {category && (
        <ListMeals meals={meals} category={category} />
      )}
    </main>
  )
}