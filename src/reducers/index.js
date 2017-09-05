import { combineReducers } from 'redux';
import planetData from './planet_data.js';
import displayData from './display_data.js';

const rootReducer = combineReducers({
  planets: planetData,
  displayData
});

export default rootReducer;
