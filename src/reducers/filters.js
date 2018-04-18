import { FETCH_FILTERS } from '../actions/types';

const INITIAL_STATE = {
  options: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILTERS:
      return {
        ...state,
        options: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
