// import React, {
//   Children,
//   createContext, useEffect, useReducer,
// } from 'react';
// import Reducer from './reducer';

// const initialState = {
//   faveChar: localStorage.getItem('faveChar')
//     ? JSON.parse(localStorage.getItem('faveChar')) : [],
//   faveMovie: localStorage.getItem('faveMovie')
//     ? JSON.parse(localStorage.getItem('faveMovie')) : [],
// };

// const StoreContext = createContext(initialState);

// const StoreProvider = () => {
//   const [state, dispatch] = useReducer(Reducer, initialState);

//   useEffect(() => {
//     localStorage.setItem('faveChar', JSON.stringify(state.faveChar));
//     localStorage.setItem('faveMovie', JSON.stringify(state.faveMovie));
//   }, [state]);

//   const addMovie = (movie) => {
//     dispatch({ type: 'ADD_TO_FAV_MOVIES', payload: movie });
//   };

//   const addCharacter = (char) => {
//     dispatch({ type: 'ADD_TO_FAVE_CHARACTERS', payload: char });
//   };

//   return (
//     <StoreContext.Provider
//       value={{
//         faveMovie: state.faveMovie,
//         faveChar: state.faveChar,
//         addMovie,
//         addCharacter,
//       }}
//     >
//       {Children}
//     </StoreContext.Provider>
//   );
// };

// export default {
//   StoreProvider,
//   StoreContext,
// };
