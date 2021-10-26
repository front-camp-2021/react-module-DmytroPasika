import './CardList.scss'
import { Card } from '../index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getPageItems } from '../../store/helpersFn/cardList.js'
import { ITEMS_PER_PAGE } from '../../store/actions/pagination.js'
import {
    filterFn,
    FilterTypes
} from '../../store/helpersFn/filter.js'
import { 
    MAIN,
    FAVORITE,
    CART
 } from '../../store/actions/card-lists.js'
import { SET_CURRENT_LENGTH_FILTER_LIST } from '../../store/actions/card-lists.js'
import { SET_CURRENT_PAGE } from '../../store/actions/pagination.js'
import { useEffect } from 'react';

function hasValue (key, value) {
    switch (key) {
        case FilterTypes.Brand:
        case FilterTypes.Category:
            return value.length
        case FilterTypes.Price:
            return true
        default:
            return value.length
    }
}


function CardList({ type }) {
    const dispatch = useDispatch()
    const favoritePageItems = useSelector(state => state.productsList.favorites)
    const cardList = useSelector(state => state.productsList.products)
    const cartList = useSelector(state => state.productsList.cart)

    const filteredList = useSelector(state => 
        Object.entries(state.filters.activeFilters).reduce((filteredList, filter) => {
            const [ key, value ] = filter
            return hasValue(key, value) 
                ? filteredList.filter(item => filterFn(item, key, value))
                : filteredList
        }, cardList))

    const page = getPageItems({
        currentPage: useSelector(state => state.productsList.currentPage),
        itemsPerPage: ITEMS_PER_PAGE,
        list: filteredList
    })


    useEffect(() => {
        dispatch({
            type: SET_CURRENT_LENGTH_FILTER_LIST,
            data: filteredList.length
        })
        dispatch({
            type: SET_CURRENT_PAGE,
            data: {
                page: 1
            }
        })
    }, [filteredList.length, dispatch])

    return <div className='cards__list'>
        {type === MAIN ? page.map(item =>
            item.title ? <Card key={item.id} props={item} /> : undefined)
            : type === FAVORITE ? favoritePageItems.map(item =>
                item.title ? <Card key={item.id} props={item} /> : undefined)
                : type === CART ? cartList.map(item =>
                    item.title ? <Card key={item.id} props={item} /> : undefined)
                    : ''
        }
    </div>
}

export default CardList;
