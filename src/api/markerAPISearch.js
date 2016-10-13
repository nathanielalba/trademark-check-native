import axios from 'axios';

import { API_USER, API_PASS } from '../lib';

export default (searchTerm) => {
  const API_URL = `http://www.markerapi.com/api/v1/trademark/search/${searchTerm}/username/${API_USER}/password/${API_PASS}`;

  axios.get(API_URL)
    .then(results => {
      console.log(results);
    }).catch(err => {
      console.error(err);
    });
};
