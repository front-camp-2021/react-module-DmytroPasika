import "./BigButton.scss"
import "../../styles/buttons.scss"


function BigButton(props) {
    return  <button className="filter-container__btn-reset button">
                <div className="filter-container__btn-label">CLEAR ALL FILTERS</div>
            </button>;
}

export default BigButton;