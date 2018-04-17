import staticData from '../data/vehicles';

const INITIAL_STATE = {
  all: [],
};

export default (state = INITIAL_STATE, action) => {
  return staticData.vehicles;
};
