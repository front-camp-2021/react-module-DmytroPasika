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
        <BigButton />
    </div>
}

export default Filter;