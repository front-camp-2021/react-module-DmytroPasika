import "./FilterHeader.scss"
import "../../styles/buttons.scss"


function FilterHeader(props) {
    return <div className="filter-container__header">
    <span className="filter-container__text">
      Filters
    </span>
    <button className="filter-container__btn button">
      <img src="/img/pathReverse.svg" alt="button" className="filter-container__image-btn"/>
      <img src="/img/pathReverse.svg" alt="button" className="filter-container__image-btn"/>
    </button>
  </div>
}

export default FilterHeader;