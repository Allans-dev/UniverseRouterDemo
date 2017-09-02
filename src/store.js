import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

export default initialState => (
  createStore(
    initialState,
    rootReducer
  )
);
