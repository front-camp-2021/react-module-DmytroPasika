import {
    createStore,
    applyMiddleware
 } from 'redux';
import allReducers from './reducers/index.js';
import thunk from 'redux-thunk';


const store = createStore(allReducers, applyMiddleware(thunk));

export default store;