export const getPageItems = ({
    currentPage,
    itemsPerPage
}) => (state) => {
    const last = currentPage * itemsPerPage;
    const first = last - itemsPerPage;
    return [...state.data.products.slice(first, last)]
}
