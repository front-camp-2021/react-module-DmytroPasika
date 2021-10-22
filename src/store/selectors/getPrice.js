export const getPrice = () => (state) => {
  const sortArrByPrice = [...state.data.products].sort((a, b) => a.price - b.price);
  return {
    min: sortArrByPrice[0].price,
    max: sortArrByPrice[sortArrByPrice.length - 1].price
  }
}