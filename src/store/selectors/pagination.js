export const getTotatalPagesCounter = (itemsPerPage) => (state) => {
    return Math.ceil(state.productsList.filterListLength / itemsPerPage)
 }
