import { combineReducers } from "redux";
// import ProductsReducer from './products.js';
import filters from './filters.js';
import products from './products.js'
import chexkboxes from './filterChexboxes.js'
import price from './price.js'

const allReducers = combineReducers({
    filters: filters,
    productsList: products,
    chexkboxes: chexkboxes,
    price: price
})

export default allReducers;