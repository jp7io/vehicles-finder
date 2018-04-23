import axios from 'axios';
import { FETCH_FILTERS } from './types';

export const fetchFilters = (params = {}) => (
  (dispatch) => {
    axios.get(`${process.env.REACT_APP_API}/vehicles/filters`, {
      params,
    }).then((response) => {
      dispatch({
        type: FETCH_FILTERS,
        payload: response.data,
      });
    });
  }
);
