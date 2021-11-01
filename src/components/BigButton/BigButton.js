import "./BigButton.scss"
import "../../styles/buttons.scss"
import {
    useDispatch
} from "react-redux";
import {
    resetDataFromFilters
} from '../../store/helpersFn/resetData.js'
import { RESET_ALL_FILTERS } from '../../store/actions/filter.js'

function BigButton({ title, type }) {
    const dispatch = useDispatch();

    const onClick = () => {
        if (type === RESET_ALL_FILTERS) {
            resetDataFromFilters()
        }
            dispatch({
                type: type
            })
    }

    return <button className="filter-container__btn-reset button"
        onClick={() => onClick()}
    >
        <div className="filter-container__btn-label">{title}</div>
    </button>;
}

export default BigButton;