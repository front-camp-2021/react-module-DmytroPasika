import {
  RESET_ALL_FILTERS,
  FILTER_BY_SEARCH,
  FILTER_BY_PRICE,
  FILTER_BY_CHEXBOXES
} from '../actions/filter.js'
import {
  searchFilter,
  priceFilter,
  chexboxFilter
} from '../selectors/filter.js'
import _ from 'lodash'

export const initialState = {
  activeFilters: { 
    brand: [],
    category: [],
    price: {
      min: 53,
      max: 85000
    },
    search: ''
  },
}



export default function filter(state = initialState, action) {
  const cloneState = _.cloneDeep(state)

  switch (action.type) {
    case FILTER_BY_SEARCH:
      return searchFilter(cloneState, action.data)

    case FILTER_BY_PRICE:
      return priceFilter(cloneState, action.data)

    case FILTER_BY_CHEXBOXES:
      return chexboxFilter(cloneState, action)

    case RESET_ALL_FILTERS:
      cloneState.activeFilters.brand = []
      cloneState.activeFilters.category = []
      cloneState.activeFilters.search = ''
      cloneState.activeFilters.price.min = 53
      cloneState.activeFilters.price.max = 85000
      return cloneState

    default:
      return state
  }
};


