import { combineReducers } from 'redux';
import filters from './filters';
import filtersValues from './filtersValues';
import vehicles from './vehicles';

export default combineReducers({
  filters,
  filtersValues,
  vehicles,
});
