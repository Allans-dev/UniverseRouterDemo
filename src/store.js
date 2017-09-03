import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { planetJsonData } from './planetData.js';

const initialState = {};

export default initialState => (
    createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware
        )
    )
);
