import "./BigButton.scss"
import "../../styles/buttons.scss"
import {
    useDispatch
} from "react-redux";
import {
    resetDataFromFilters
} from '../../store/helpersFn/resetData.js'
import {
    REMOVE_ALL_FROM_FAVORITES,
} from '../../store/actions/card-lists.js'
import { RESET_ALL_FILTERS } from '../../store/actions/filter.js'

function BigButton({ title, type }) {
    const dispatch = useDispatch();

    const onClick = () => {
        if (type === REMOVE_ALL_FROM_FAVORITES) {
            dispatch({
                type: REMOVE_ALL_FROM_FAVORITES
            })
        } else if(type === RESET_ALL_FILTERS) {
            resetDataFromFilters()
            dispatch({
                type: RESET_ALL_FILTERS
            })
        }
    }
   
    return <button className="filter-container__btn-reset button"
        onClick={() => onClick()}
    >
        <div className="filter-container__btn-label">{title}</div>
    </button>;
}

export default BigButton;