export const initialState = {
  user: null,
  playing: false,
  playlists: [],
  item: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
