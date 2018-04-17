import { FETCH_VEHICLES } from '../actions/types';

const INITIAL_STATE = {
  all: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};
