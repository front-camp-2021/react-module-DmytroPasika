import "./FilterCheckbox.scss"

function FilterCheckbox(props) {
    return <>
        <div className="filter-container__title">
            {props.title}
        </div>
        <ul className="filter-container__list">
            {props.list.map((item, index) =>
              <li key={index}>
                  <div className="filter-container__container-checkbox">
                        <label className="filter-container__label">
                            <input name="category" type="checkbox" value={item} className="filter-container__checkbox" defaultChecked={item.checked}/>
                            <div className="filter-container__checkbox-custom"></div>
                            <span className="filter-container__value">{item}</span>
                        </label>
                        <div className="filter-container__item-counter">1920</div>
                    </div>
              </li>
                )}
        </ul>
    </>
}

export default FilterCheckbox;
