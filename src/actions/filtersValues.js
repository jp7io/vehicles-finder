import { SET_FILTER_VALUE } from './types';

export const setFilterValue = (name, value) => (
  {
    type: SET_FILTER_VALUE,
    payload: {
      name,
      value,
    },
  }
);
