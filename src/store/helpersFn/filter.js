export const FilterTypes = {
  Brand: 'brand',
  Category: 'category',
  Price: 'price',
  Search: 'search'
}

export const searchFilter = (state, action) => {
  state.activeFilters[FilterTypes.Search] = action.value;
  return state
}

export const priceFilter = (state, action) => {
  state.activeFilters.price.min = action.min;
  state.activeFilters.price.max = action.max;
  return state
}

export const chexboxFilter = (state, action) => {
  if (action.data.checked) {
    state.activeFilters[action.data.name].push(action.data.value.split('-').join(''))
  } else {
    state.activeFilters[action.data.name] = state.activeFilters[action.data.name]
      .filter(i => i !== action.data.value)
  }
  return state
}

export const filterFn = (item, filterType, filterValues) => {
  switch (filterType) {
    case FilterTypes.Brand:
    case FilterTypes.Category:
      if (filterValues.length === 0) {
        return true
      } else {
        return filterValues.includes(item[filterType] ?
          item[filterType].split('-').join('').split('_').join(' ')  : false)
      }

    case FilterTypes.Price:
      return item.price >= filterValues.min && item.price <= filterValues.max;

    case FilterTypes.Search:
      if (filterValues.length === 0 || item.title === undefined) {
        return true
      } else {
        return item.title.toLowerCase().includes(filterValues)
      }

    default:
      break;
  }
}
