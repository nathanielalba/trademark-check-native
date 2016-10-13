import { combineReducers } from 'redux';

import searchText from './searchTextReducer';
import searchResults from './searchResultsReducer';

export default combineReducers({
  searchText,
  searchResults,
});
