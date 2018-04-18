import { combineReducers } from 'redux';
import filters from './filters';
import vehicles from './vehicles';

export default combineReducers({
  filters,
  vehicles,
});
