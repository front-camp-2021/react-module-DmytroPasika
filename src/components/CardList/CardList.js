import './CardList.scss'
import { Card } from '../index.js'
import { useSelector } from 'react-redux';
import { getPageItems } from '../../store/selectors/cardList.js'
import { ITEMS_PER_PAGE } from '../../store/actions/pagination.js'


function CardList() {
    const pageItems = useSelector(getPageItems({
        currentPage: useSelector(state => state.data.currentPage),
        itemsPerPage: ITEMS_PER_PAGE
    }))

    return <div className='cards__list'>
        {pageItems.map(item =>
            <Card key={item.id} props={item} />
        )}

    </div>
}

export default CardList;