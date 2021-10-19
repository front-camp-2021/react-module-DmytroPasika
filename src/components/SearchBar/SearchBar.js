import { 
    useDispatch,
    useSelector 
} from "react-redux";
import { FILTER_BY_SEARCH } from '../../store/actions/filter.js'
import "./SearchBar.scss"
import useDebounce from '../../store/helpersFn/debouncer.js'
import { Link } from "react-router-dom";


function SearchBar() {
    const dispatch = useDispatch();
    const counterProducts = useSelector(state => state.data.counterProducts)

    const onChange = useDebounce((e) => {
        dispatch({
            type: FILTER_BY_SEARCH,
            data: {
                value: e.target.value
            }
        })
    }, 300)


    return <div className="search-bar">
        <div className="search-bar__result">
            <span className="search-bar__text">
                {counterProducts > 0 ? `${counterProducts} results found` : ''} 
            </span>
            <Link to="/favorites" >
                <button className="search-bar__btn-favorite button">
                    <img src="/img/heartWhite.svg" alt="" className="search-bar__favorite-image" />
                </button>
            </Link>
        </div>
        <form className="search-bar__form">
            <div className="search-bar__container">
                <input className="search-bar__input" type="text" placeholder="Search" onChange={onChange}
                />
            </div>
        </form>
    </div>
}

export default SearchBar;