import './CardList.scss'
import { Card } from '../index.js'
import list from '../../data/products.js'

function CardList(props) {

    return <div className='cards__list'>
        {list.slice(0, 9).map(i =>
            <Card key={i.id} props={i} />
        )}

    </div>
}

export default CardList;