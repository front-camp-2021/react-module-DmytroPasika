import "./Filter.scss"
import {
    BigButton,
    FilterHeader,
    FilterForm
} from '../index.js'

function Filter() {
    return <div className="filter-container">
        <FilterHeader />
        <FilterForm/>
        <BigButton title="CLEAR ALL FILTERS"/>
    </div>
}

export default Filter;