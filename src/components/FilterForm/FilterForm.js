import "./FilterForm.scss"
import { 
  FilterCheckbox,
  FilterSlider
} from '../index.js'
import categoryFilterConfig from '../../data/categories.js'
import brandFilterConfig from '../../data/brand.js'



function FilterForm(props) {
  // const onChange = () => {
  //   return ;
  // }
    return <div className="filter-container__form-container">
      <form className="filter-container__form">
            <FilterSlider
             title={'Range'}
             min={100} 
             max={200} 
             onChange={({ min, max }) => ''}
             />
        <hr className="filter-container__horizontal-line"/>
            <FilterCheckbox list={categoryFilterConfig} title="Categories"/>
        <hr className="filter-container__horizontal-line"/>
            <FilterCheckbox list={brandFilterConfig} title="Brand"/>
      </form>
    </div>

    }

export default FilterForm;