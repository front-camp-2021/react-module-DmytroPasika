import "./Filter.scss"
import {
    BigButton,
    FilterHeader,
    FilterForm
} from '../index.js'
import { RESET_ALL_FILTERS } from '../../store/actions/filter.js'

function Filter() {
    return <div className="filter-container">
        <FilterHeader />
        <FilterForm/>
        <BigButton title="CLEAR ALL FILTERS" type={RESET_ALL_FILTERS}/>
    </div>
}

export default Filter;