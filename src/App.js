import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import Styled from 'styled-components';

import {
  Home,
  Meal
} from './pages';

const Header = Styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  background-color: gray;
  color: white;
  font-size: 35px;
  font-weight: bold;
  flex-direction: column;

  #logo {
    height: 80px;
  }
`

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Link to={"/"}>
            <img src="meal.png" alt="logo" id="logo" />
          </Link>
          Find the perfect meal for you
        </Header>
      </div>
      <Routes>
        <Route path="/" exact element={<Home category={'asdad'} />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </Router>
  );
}

export default App;
