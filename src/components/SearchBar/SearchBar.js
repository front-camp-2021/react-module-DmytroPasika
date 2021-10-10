import "./SearchBar.scss"



function SearchBar(props) {
    return <div className="search-bar">
        <div className="search-bar__result">
            <span className="search-bar__text">
                7,618 results found
            </span>
            <a href="./favorite.html" className="reference">
                <button className="search-bar__btn-favorite button">
                    <img src="/img/heartWhite.svg" alt="" className="search-bar__favorite-image" />
                </button>
            </a>
        </div>
        <form className="search-bar__form">
            <div className="search-bar__container">
                <input className="search-bar__input" type="text" placeholder="Search" />
            </div>
        </form>
    </div>
}

export default SearchBar;