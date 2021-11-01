import "./FilterForm.scss"
import {
  FilterCheckbox,
  FilterSlider
} from '../index.js'
import {
  useSelector
} from "react-redux";




function FilterForm() {
  const categories = useSelector(state => state.chexkboxes.categories)
  const brand = useSelector(state => state.chexkboxes.brands)

  return <div className="filter-container__form-container">
    <form className="filter-container__form">
      <FilterSlider
        title="Range"
      />
      <hr className="filter-container__horizontal-line" />
      <FilterCheckbox items={categories} title="Category" />
      <hr className="filter-container__horizontal-line" />
      <FilterCheckbox items={brand} title="Brand" />
    </form>
  </div>

}

export default FilterForm;