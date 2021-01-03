import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { movieContext } from './context/provider';
import ApiClient from './services/ApiClient';

import Home from './components/Home/Home';
import FilmInfo from './components/FilmInfo/FilmInfo';
import CharInfo from './components/CharInfo/CharInfo';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [films, setFilms] = useState([]);

  useEffect(() => {
    ApiClient.getFilms()
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="app">
      <movieContext.Provider value={films}>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmInfo/:id" component={FilmInfo} />
          <Route exact path="/charInfo/:id" component={CharInfo} />
        </Switch>

      </movieContext.Provider>
    </div>

  );
};

export default App;
