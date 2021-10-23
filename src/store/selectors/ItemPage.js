export const getItemPage = (id) => (state) => {
    return state.productsList.products.find(item => item.id === id)
}