export const getTotatalPagesCounter = (itemsPerPage) => (state) => {
    return Math.ceil(state.data.products.length / itemsPerPage)
 }
