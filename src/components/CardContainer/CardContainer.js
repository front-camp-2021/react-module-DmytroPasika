import './CardContainer.scss'
import {
  SearchBar,
  CardList
} from '../index.js'
import {
  MAIN
} from '../../store/actions/card-lists.js'


function CardContainer() {
  return <div className='card-container'>
    <SearchBar />
    <CardList type={MAIN} />
  </div>
}

export default CardContainer;