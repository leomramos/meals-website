import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = ({ category }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        setMeals(response.data);
      }).catch(error => {
        console.error(error);
      });
  }, [category])

  return (
    <div>{category}</div>
  )
}