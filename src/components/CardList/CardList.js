import './CardList.scss'
import { Card } from '../index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getPageItems } from '../../store/helpersFn/cardList.js'
import { ITEMS_PER_PAGE } from '../../store/actions/pagination.js'
import { filter } from '../../store/helpersFn/filter.js'
import { 
    MAIN,
    FAVORITE,
    CART
 } from '../../store/actions/card-lists.js'
import { SET_CURRENT_LENGTH_FILTER_LIST } from '../../store/actions/card-lists.js'
import { SET_CURRENT_PAGE } from '../../store/actions/pagination.js'
import { useEffect } from 'react';


function CardList({ type }) {
    const dispatch = useDispatch()
    const favoritePageItems = useSelector(state => state.productsList.favorites)
    const cardList = useSelector(state => state.productsList.products)
    const cartList = useSelector(state => state.productsList.cart)

    const filteredList = useSelector(state => {
        const counterFilters = Object.keys(state.filters.activeFilters).length
        return cardList.filter(item => {
            let counter = null
            for (const [key, value] of Object.entries(state.filters.activeFilters)) {
                if (filter(item, key, value)) {
                    counter++
                }
            }
            return counter === counterFilters
        })
    })

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
