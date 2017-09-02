import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import planetData from '../planetData';
import thunk from 'redux-thunk';

console.log(planetData);

const initialState = {};

export default configureStore => (
  createStore(
    initialState,
    rootReducer,
    applyMiddleware(
      thunk
    )
  )
);
