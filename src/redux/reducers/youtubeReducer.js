export const INITIAL_STATE = {
  search: '',
  searchHistory: [],
  searchResults: [],
};

export default function youtubeReducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    'SEARCH': () => ({ ...state, search: payload, searchHistory: [...state.searchHistory, payload] }),
    'SEARCH_RESULTS': () => ({ ...state, searchResults: payload }),
  };
  return cases[type] ? cases[type]() : state;
}
