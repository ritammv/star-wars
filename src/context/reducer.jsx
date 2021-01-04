const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV_MOVIES':
      return {
        ...state,
        faveMovie: [action.payload, ...state.faveMovie],
      };
    case 'ADD_TO_FAVE_CHARACTERS':
      return {
        ...state,
        faveChar: [action.payload, ...state.faveChar],
      };

    default:
      return state;
  }
};

export default Reducer;
