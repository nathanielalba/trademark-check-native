import axios from 'axios';

import {
  SET_SEARCH_TEXT,
  GET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS,
  API_USER,
  API_PASS
} from '../lib';

export const setSearchText = (payload) => {
  return {
    type: SET_SEARCH_TEXT,
    payload
  };
};

export const getSearchText = () => {
  return {
    type: GET_SEARCH_RESULTS
  };
};

export const setSearchResults = (payload) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload
  };
};


export function fetchData(searchTerm) {
  const API_URL = `http://www.markerapi.com/api/v1/trademark/search/${searchTerm}/username/${API_USER}/password/${API_PASS}`;
	return (dispatch) => {
		return axios.get(API_URL)
          .then(resp => console.log(resp.data))
          .catch(err => console.log(err))
          .done();
	};
}
