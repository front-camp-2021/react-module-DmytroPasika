import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getTotatalPagesCounter
} from '../../store/selectors/pagination.js'
import { 
    ITEMS_PER_PAGE,
    SET_CURRENT_PAGE
 } from '../../store/actions/pagination.js'
import './Pagination.scss'

function Pagination() {
    const totalPages = useSelector(getTotatalPagesCounter(ITEMS_PER_PAGE)) // get count of total pages
    const currentPage = useSelector(state => state.productsList.currentPage)
    const dispatch = useDispatch();

    const getPages = (pages = 0) => {
        const arrPages = [];
        for (let index = 1; index <= pages; index++) {
            arrPages.push(
                <div key={index} className={`pagination__container ${currentPage === index ? 'pagination__active' : ''}`}>
                    <button onClick={() => {
                        dispatch({
                            type: SET_CURRENT_PAGE,
                            data: {
                                page: index
                            }
                        })
                    }}
                        id={`pagination__id-${index}`}
                        className={`pagination__reference reference button ${currentPage === index ? 'pagination__active' : ''}`
                        }>{index}</button>
                </div>)
        }

        if (currentPage - 5 > 1 && currentPage + 4 < totalPages) {
            return arrPages.slice(currentPage - 6, currentPage + 4);
        }
        if (currentPage - 5 <= 1) {
            return arrPages.slice(0, 10);
        }
        if (currentPage + 4 >= totalPages) {
            return arrPages.slice(totalPages - 10, totalPages)
        }

    }

    return <div className="pagination">
        <button onClick={() => {
            if (currentPage > 1) {
                dispatch({
                    type: SET_CURRENT_PAGE,
                    data: {
                        page: currentPage - 1
                    }
                })
            }
        }} className="pagination__reference-direction button">
            <img src="/img/PathNav2.svg" alt="navigation path"
                href="#123"
            />
        </button>


        <div className="pagination__pages reference">
            {getPages(totalPages)}
        </div>

        <button onClick={() => {
            if (currentPage < totalPages) {
                dispatch({
                    type: SET_CURRENT_PAGE,
                    data: {
                        page: currentPage + 1
                    }
                })
            }
        }} className="pagination__reference-direction button">
            <img src="/img/PathNav1.svg" alt="navigation path"
                href="#321"
            />
        </button>
    </div>
}

export default Pagination;