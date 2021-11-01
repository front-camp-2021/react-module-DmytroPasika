import "./FilterCheckbox.scss"
import {
    FILTER_BY_CHEXBOXES
} from '../../store/actions/filter.js'
import {
    useDispatch,
    // useSelector
} from "react-redux";
// import {
//     getCounterOfProducts
// } from '../../store/selectors/getCounterChexboxes.js'

function FilterCheckbox({ items, title }) {
    // const getCounterChexboxes = (item) =>  useSelector(state => getCounterOfProducts(state,item))


    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch({
            type: FILTER_BY_CHEXBOXES,
            data: {
                value: e.target.value.toLowerCase(),
                checked: e.target.checked,
                name: e.target.name
            }
        })
    }

    return <>
        <div className="filter-container__title">
            {title}
        </div>
        <ul className="filter-container__list">
            {items.map((item, index) => {
                // getCounterChexboxes(item)
               return (<li key={index}>
                    <div className="filter-container__container-checkbox">
                        <label className="filter-container__label">
                            <input name={title.toLowerCase()} type="checkbox" value={item} className="filter-container__checkbox"
                                onClick={(e) => onChange(e)}
                            />
                            <div className="filter-container__checkbox-custom"></div>
                            <span className="filter-container__value">{item}</span>
                        </label>
                        <div className="filter-container__item-counter">1920</div>
                    </div>
                </li>)
            }
            )}
        </ul>
    </>
}

export default FilterCheckbox;
