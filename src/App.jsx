import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import Home from './components/Home/Home';
import FilmInfo from './components/FilmInfo/FilmInfo';
import CharInfo from './components/CharInfo/CharInfo';

const App = () => (
  <Switch>
    <div className="app">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/filmInfo/:id" component={FilmInfo} />
      <Route exact path="/characterInfo/:id" component={CharInfo} />
    </div>
  </Switch>
);

export default App;
