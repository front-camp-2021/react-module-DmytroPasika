import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    FILTER_BY_SEARCH
} from '../../store/actions/filter.js'
import "./SearchBar.scss"
import useDebounce from '../../store/helpersFn/debouncer.js'
import {
    NavLink
} from "react-router-dom";

function SearchBar() {
    const dispatch = useDispatch();
    const counterProducts = useSelector(state => state.productsList.filterListLength)

    const onChange = useDebounce((e) => {
        dispatch({
            type: FILTER_BY_SEARCH,
            data: {
                value: e.target.value
            }
        })
    }, 250)

    return <div className="search-bar">
        <div className="search-bar__result">
            <span className="search-bar__text">
                {counterProducts > 0 && counterProducts < 99 ? `${counterProducts} results found` : ''}
            </span>
            <div className='search-bar__container-nav'>
                <NavLink to="/cart" >
                    <button className="search-bar__btn-cart button">
                        <img src="/img/cart4.svg" alt="cart logo" className="search-bar__cart-image" />
                    </button>
                </NavLink>
                <NavLink to="/favorites" >
                    <button className="search-bar__btn-favorite button">
                        <img src="/img/heartWhite.svg" alt="heart logo" className="search-bar__favorite-image" />
                    </button>
                </NavLink>
            </div>

        </div>
        <form className="search-bar__form">
            <div className="search-bar__container">
                <input className="search-bar__input" type="text" placeholder="Search"
                    onChange={(event) => {
                        onChange(event)
                    }}
                />
            </div>
        </form>
    </div>
}

export default SearchBar;