import React from 'react';
import Styled from 'styled-components';

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

const MealInfo = Styled.aside`
  pre {
    max-width: 700px;
    font-family: inherit;
    white-space: pre-wrap;
  }
`

const Wrapper = Styled.div`
  flex-direction: ${({ column }) => column ? 'column' : 'unset'};
  display: flex;
  gap: 20px;
`

const WatchVideo = Styled.a`
  background-color: green;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
`

export const RandomMeal = ({ meal }) => {
  console.log(meal)
  return (
    <Container id="random-meal">
      <h1>Random Meal</h1>
      <Wrapper>
        <Wrapper column>
          <img src={meal.strMealThumb} alt="random-meal-thumb" />
          <WatchVideo href={meal.strYoutube} target="__blank">
            Watch the video
          </WatchVideo>
        </Wrapper>
        <MealInfo>
          <h3>{meal.strMeal}</h3>
          <pre dangerouslySetInnerHTML={{ __html: meal.strInstructions }} />
        </MealInfo>
      </Wrapper>
    </Container >
  )
}