import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieContext } from './context/movieContext';
import ApiClient from './services/ApiClient';
import StoreProvider from './context/globalState';
import './App.scss';

import Home from './components/Home/Home';
import FilmInfo from './components/FilmInfo/FilmInfo';
import CharInfo from './components/CharInfo/CharInfo';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [films, setFilms] = useState([]);

  useEffect(() => {
    ApiClient.getFilms()
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="app">
      <MovieContext.Provider value={films}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmInfo/:id" component={FilmInfo} />
          <Route exact path="/charInfo/:id" component={CharInfo} />
        </Switch>

      </MovieContext.Provider>
    </div>

  );
};

export default App;
