import './Pagination.scss'

function Pagination(props) {
    let active = 2;
    const getPages = pages => {
        const arrPages = [];
        for (let index = 1; index <= 10; index++) {
            arrPages.push(
                <div key={index} className={`pagination__container ${active === index ? 'pagination__active' : ''}`}>
                    <a href="#1" id={`pagination__id-${index}`} className={`pagination__reference reference ${active === index ? 'pagination__active' : ''}`}>{index}</a>
                </div>)
        }
        return arrPages;
    }
    return <div className="pagination">
        <div>
            <a href="#12" className="pagination__reference-direction reference">
                <img src="/img/PathNav2.svg" alt="navigation path" />
            </a>
        </div>

        <div className="pagination__pages reference">
            {getPages()}
        </div>

        <a href="#11" className="pagination__reference-direction reference">
            <img src="/img/PathNav1.svg" alt="navigation path" />
        </a>
    </div>
}

export default Pagination;