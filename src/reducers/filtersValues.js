import { SET_FILTER_VALUE } from '../actions/types';

const INITIAL_STATE = {
  make: '',
  model: '',
  color: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE: {
      const { name, value } = action.payload;
      const newState = {
        ...state,
        [name]: value,
      };
      if (name === 'make') {
        newState.model = INITIAL_STATE.model;
      }
      return newState;
    }
    default:
      return state;
  }
};
