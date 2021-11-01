import "./Favorite.scss"
import {
    BigButton,
    CardList
} from '../index.js'
import {
    FAVORITE,
    REMOVE_ALL_FROM_FAVORITES
} from '../../store/actions/card-lists.js'
import { NavLink } from "react-router-dom";

function Favorite() {
    return <>
        <div className="buttons-container-nav">
            <NavLink to='/'>
                <button className='buttons-container-nav__btn-home button'>
                    <div className="buttons-container-nav__btn-label">
                        Go to main page
                    </div>
                </button>
            </NavLink>
            <div className="favorite__button-container">
                <BigButton title="CLEAR ALL FAVORITES" type={REMOVE_ALL_FROM_FAVORITES} />
            </div>
        </div>
        <CardList type={FAVORITE} />
    </>
}

export default Favorite;