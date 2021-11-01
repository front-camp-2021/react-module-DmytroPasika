import axios from 'axios'
import {
    GET_DATA,
    GET_PRODUCTS_DATA
} from '../actions/getData.js'

export const getDataFromApi = () => {
    return dispatch => {
        axios.all([
            axios.get(`http://localhost:3001/products`),
            axios.get(`http://localhost:3001/categories`),
            axios.get(`http://localhost:3001/brands`)
        ])
            .then(data => {
                const [
                    products,
                    category,
                    brands
                ] = data
                dispatch({
                    type: GET_DATA,
                    data: {
                        products: products.data,
                        category: category.data,
                        brands: brands.data
                    }
                })
            })
    }
}

export const getProductsFromApi = () => {
    return dispatch => {
        axios.get(`http://localhost:3001/products`)
            .then(result => {
                dispatch({
                    type: GET_PRODUCTS_DATA,
                    data: result.data
                })
            })

    }
}
