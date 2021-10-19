import "./BigButton.scss"
import "../../styles/buttons.scss"
import {
    RESET_ALL_FILTERS
} from '../../store/actions/filter.js'
import {
    useDispatch
} from "react-redux";

function BigButton({ title }) {
    const dispatch = useDispatch();

    return <button className="filter-container__btn-reset button"
        onClick={() => dispatch({
            type: RESET_ALL_FILTERS
        })}
    >
        <div className="filter-container__btn-label">{title}</div>
    </button>;
}

export default BigButton;