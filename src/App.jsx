import React, {
  useEffect, useState, useReducer,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieContext, StoreContext, initialState } from './context/movieContext';
import ApiClient from './services/ApiClient';
import Reducer from './context/reducer';
import './App.scss';
import Home from './components/Home/Home';
import FilmInfo from './components/FilmInfo/FilmInfo';
import CharInfo from './components/CharInfo/CharInfo';
import NavBar from './components/NavBar/NavBar';
import FaveMovie from './components/FaveMovie/FaveMovie';
import FaveChar from './components/FaveChar/FaveChar';

const App = () => {
  const [films, setFilms] = useState([]);
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    ApiClient.getFilms()
      .then((data) => setFilms(data.results));
  }, []);

  useEffect(() => {
    localStorage.setItem('faveChar', JSON.stringify(state.faveChar));
    localStorage.setItem('faveMovie', JSON.stringify(state.faveMovie));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: 'ADD_TO_FAV_MOVIES', payload: movie });
  };

  const addCharacter = (char) => {
    dispatch({ type: 'ADD_TO_FAVE_CHARACTERS', payload: char });
  };

  return (
    <div className="app">
      <StoreContext.Provider
        value={{
          faveMovie: state.faveMovie,
          faveChar: state.faveChar,
          addMovie,
          addCharacter,
        }}
      >

        <MovieContext.Provider value={films}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/filmInfo/:id" component={FilmInfo} />
            <Route exact path="/charInfo/:id" component={CharInfo} />
            <Route exact path="/faveMovie" component={FaveMovie} />
            <Route exact path="/faveChar" component={FaveChar} />

          </Switch>

        </MovieContext.Provider>
      </StoreContext.Provider>

    </div>

  );
};

export default App;
