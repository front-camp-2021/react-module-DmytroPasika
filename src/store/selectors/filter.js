import _ from 'lodash'
// import {
//   RESET_ALL_FILTERS
// } from '../actions/filter.js'
export const FilterTypes = {
  Brand: 'brand',
  Category: 'category',
  Price: 'price',
  Search: 'search'
}

export const getPrice = () => (state) => {
  const sortArrByPrice = [...state.data.products].sort((a, b) => a.price - b.price);
  return {
    min: sortArrByPrice[0].price,
    max: sortArrByPrice[sortArrByPrice.length - 1].price
  }
}

export const searchFilter = (initialState, action, type, activeFilters) => {
  const cloneState = _.cloneDeep(initialState);

  switch (type) {
    // case RESET_ALL_FILTERS:
    //   cloneState.activeFilters.price.min = 53;
    //   cloneState.activeFilters.price.max = 85000;
    //   break
    case FilterTypes.Price:
      cloneState.activeFilters.price.min = action.data.min;
      cloneState.activeFilters.price.max = action.data.max;
      activeFilters.price.min = action.data.min;
      activeFilters.price.max = action.data.max;

      cloneState.products = cloneState.products.filter(item => {
        let counter = 0;
        for (const [key, value] of Object.entries(activeFilters)) {
          if (filter(item, key, value)) {
            counter++
          }
        }

        return counter === 3;
      })
      break;

    case FilterTypes.Search:
      cloneState.products = cloneState.products.filter(item => item.title.toLowerCase().includes(action.data.value.toLowerCase()))
      const counter = cloneState.products.length
      cloneState.counterProducts = counter;
      break;

    case FilterTypes.Brand:
      cloneState.activeFilters[FilterTypes.Brand] = activeFilters[FilterTypes.Brand]
      if (action.data.checked) {
        cloneState.activeFilters[FilterTypes.Brand].push(action.data.value.split('-').join(''))
      } else {
        cloneState.activeFilters[FilterTypes.Brand] = cloneState.activeFilters[FilterTypes.Brand].filter(i => i !== action.data.value)
      }

      cloneState.products = cloneState.products.filter(item => {
        let counter = 0;
        for (const [key, value] of Object.entries(activeFilters)) {
          if (filter(item, key, value)) {
            counter++
          }
        }
        return counter === 3;
      })
      break;

    case FilterTypes.Category:
      cloneState.activeFilters[FilterTypes.Category] = activeFilters[FilterTypes.Category]
      if (action.data.checked) {
        cloneState.activeFilters[FilterTypes.Category].push(action.data.value)
      } else {
        cloneState.activeFilters[FilterTypes.Category] = cloneState.activeFilters[FilterTypes.Category].filter(i => i !== action.data.value)
      }

      cloneState.products = cloneState.products.filter(item => {
        let counter = 0;
        for (const [key, value] of Object.entries(activeFilters)) {
          if (filter(item, key, value)) {
            counter++
          }
        }
        return counter === 3;
      })

      break;

    default:
      break;
  }
  return cloneState
}



export const filter = (item, filterType, filterValues) => {
  switch (filterType) {
    case FilterTypes.Brand:
      if (filterValues.length === 0) {
        return true
      } else {
        return filterValues.includes(item[FilterTypes.Brand].split('-').join(''))
      }

    case FilterTypes.Category:
      if (filterValues.length === 0) {
        return true
      } else {
        return filterValues.includes(item[FilterTypes.Category].split('_').join(' '))
      }

    case FilterTypes.Price:
      return item.price >= filterValues.min && item.price <= filterValues.max;
    default:
      break;
  }
}

export const resetFilter = () => {

}