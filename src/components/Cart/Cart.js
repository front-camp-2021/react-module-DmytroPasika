import "./Cart.scss"
import {
    BigButton,
    CardList
} from '../index.js'
import {
    REMOVE_ALL_FROM_CART,
    CART
} from '../../store/actions/card-lists.js'
import { NavLink } from "react-router-dom";

function Cart() {
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
                <BigButton title="REMOVE ALL FROM CART" type={REMOVE_ALL_FROM_CART} />
            </div>
        </div>

        <CardList type={CART} />
    </>
}

export default Cart;