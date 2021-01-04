import { createContext } from 'react';

// eslint-disable-next-line import/prefer-default-export

export const initialState = {
  faveChar: localStorage.getItem('faveChar')
    ? JSON.parse(localStorage.getItem('faveChar')) : [],
  faveMovie: localStorage.getItem('faveMovie')
    ? JSON.parse(localStorage.getItem('faveMovie')) : [],
};

export const MovieContext = createContext(null);
export const StoreContext = createContext(initialState);
