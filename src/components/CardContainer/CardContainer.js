import './CardContainer.scss'
import {
  SearchBar,
  CardList
} from '../index.js'


function CardContainer() {
  return <div className='card-container'>
    <SearchBar />
    <CardList />
  </div>
}

export default CardContainer;