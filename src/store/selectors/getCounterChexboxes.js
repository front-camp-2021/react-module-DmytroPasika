export const getCounterOfProducts = (title) => (state) => {
    return [...state.productsList.products].filter(item => {
        if (item.title !== undefined) {
            console.log(item[title.toLowerCase()].split('-').join('').split('_').join(' '))
            return item[title.toLowerCase()].includes(item[title.toLowerCase()].split('-').join('').split('_').join(' ')) ? true : false
        } else {
            return false
        }
    })
}