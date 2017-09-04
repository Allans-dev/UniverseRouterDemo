import { createStore } from 'redux';
import rootReducer from './reducers';
import { planetJsonData } from './planetData.js';

const initialState = {};

export default initialState => (
    createStore(
        rootReducer
    )
);
