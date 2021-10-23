import _ from 'lodash'

export const getPageItems = ({
    currentPage,
    itemsPerPage,
    list
}) => {
    const last = currentPage * itemsPerPage;
    const first = last - itemsPerPage;
    return [...list.slice(first, last)]
}

export const addToFavorites = (id, state) => {
    const cloneState = _.cloneDeep(state);
    const item = state.products.find(i => i.id === id)
    cloneState.favorites.push(item)
    return cloneState
}

export const removeFromFavorites = (id, state) => {
    const cloneState = _.cloneDeep(state);
    cloneState.favorites =  state.favorites.filter(item => item.id !== id)
    return cloneState
}

export const addToCart = (id, state) => {
    const cloneState = _.cloneDeep(state);
    const item = state.products.find(i => i.id === id)
    cloneState.cart.push(item)
    return cloneState
}

export const removeFromCart = (id, state) => {
    const cloneState = _.cloneDeep(state);
    cloneState.cart =  state.cart.filter(item => item.id !== id)
    return cloneState
}
