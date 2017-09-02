import { combineReducers } from 'redux';
import planetData from './planet_data.js';

const rootReducer = combineReducers({
  planets: planetData
});

export default rootReducer;
