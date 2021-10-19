import './CardList.scss'
import { Card } from '../index.js'
import { useSelector } from 'react-redux';
import { getPageItems } from '../../store/selectors/cardList.js'
import { ITEMS_PER_PAGE } from '../../store/actions/pagination.js'
import {
    MAIN
} from '../../store/actions/card-lists.js'


function CardList({ type }) {
    const mainPageItems = useSelector(getPageItems({
        currentPage: useSelector(state => state.data.currentPage),
        itemsPerPage: ITEMS_PER_PAGE
    }))

    const favoritePageItems = useSelector(state => state.data.favorites)

    return <div className='cards__list'>
        {type === MAIN ? mainPageItems.map(item =>
            <Card key={item.id} props={item} />
        ) : favoritePageItems.map(item =>
            <Card key={item.id} props={item} />
        )}
    </div>
}

export default CardList;

// return <div className='cards__list'>
//         {type === MAIN ? mainPageItems.map(item =>
//             <Card key={item.id} props={item} />
//         ) : type === FAVORITE ? favoritePageItems.map(item =>{
//             console.log('12312')
//             return <Card key={item.id} props={item} /> }
//         ) : ''}