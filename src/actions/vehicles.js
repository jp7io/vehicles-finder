import axios from 'axios';
import { FETCH_VEHICLES } from './types';

export const fetchVehicles = (params = {}) => (
  (dispatch) => {
    axios.get(`${process.env.REACT_APP_API}/public/cars/search`, {
      params: {
        ...params,
        brand: 'grupo-sinal',
      },
    }).then((response) => {
      dispatch({
        type: FETCH_VEHICLES,
        payload: response.data.cars,
      });
    });
  }
);
