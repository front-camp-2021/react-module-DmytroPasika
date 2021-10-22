import "./Favorite.scss"
import {
    BigButton,
    CardList
} from '../index.js'
import {
    FAVORITE,
    REMOVE_ALL_FROM_FAVORITES
  } from '../../store/actions/card-lists.js'

function Favorite() {
    return <>
        <div className="favorite__button-container">
        <BigButton title="CLEAR ALL FAVORITES" type={REMOVE_ALL_FROM_FAVORITES}/>
        </div>
        <CardList type={FAVORITE} />
    </>
}

export default Favorite;