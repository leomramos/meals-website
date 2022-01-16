import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Meal = () => {
  const [mealInfo, setMealInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setMealInfo(response.data);
      }).catch(error => {
        console.error(error);
      });
  }, [id])

  return (
    <div>{id}</div>
  )
}