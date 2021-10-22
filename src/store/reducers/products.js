import {
    RESET_ALL_FILTERS,
} from '../actions/filter.js'
import {
    SET_CURRENT_PAGE
  } from '../actions/pagination.js'
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    REMOVE_ALL_FROM_FAVORITES,
    SET_CURRENT_LENGTH_FILTER_LIST
} from '../actions/card-lists.js'
import {
    addToFavorites,
    removeFromFavorites
} from '../selectors/cardList.js'
import {
    GET_DATA,
    GET_PRODUCTS_DATA
} from '../actions/getData.js'
import _ from 'lodash'



export const initialState = {
    favorites: [],
    currentPage: 1,
    products: [],
    filterListLength: 100,
}



export default function products(state = initialState, action) {
    const cloneState = _.cloneDeep(state)

    switch (action.type) {
        case GET_DATA:
            cloneState.products = action.data.products
            return cloneState

        case GET_PRODUCTS_DATA:
            cloneState.products = action.data
            return cloneState

        case RESET_ALL_FILTERS:
            return cloneState

        case ADD_TO_FAVORITES:
            return addToFavorites(action.data.id, state)

        case REMOVE_FROM_FAVORITES:
            return removeFromFavorites(action.data.id, state)

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.data.page }

        case REMOVE_ALL_FROM_FAVORITES:
            cloneState.favorites = []
            return cloneState

        case SET_CURRENT_LENGTH_FILTER_LIST:
            cloneState.filterListLength = action.data

            return cloneState

        default:
            return cloneState
    }
};


