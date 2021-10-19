import { combineReducers } from "redux";
// import ProductsReducer from './products.js';
import mainReducer from './mainReduser.js';

const allReducers = combineReducers({
    data: mainReducer
})

export default allReducers;