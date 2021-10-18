import { combineReducers } from "redux";
// import ProductsReducer from './products.js';
import mainReduser from './mainReduser.js';

const allReducers = combineReducers({
    data: mainReduser
})

export default allReducers;