import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { getItemPage } from '../../store/selectors/ItemPage.js'
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../../store/actions/card-lists.js'
import { getProductsFromApi } from '../../store/helpersFn/getData.js'
import './ItemPage.scss'



function ItemPage() {
    const { id } = useParams()
    const itemPage = useSelector(getItemPage(id))
    const dispatch = useDispatch()
    const refFavorite = useRef()
    const refCart = useRef()
    const refCartImg = useRef()
    const favorites = useSelector(state => state.productsList.favorites.map(item => item.id))
    const includesFavorites = favorites.includes(itemPage ? itemPage.id : undefined)
    const cart = useSelector(state => state.productsList.cart.map(item => item.id))
    const includesCart = cart.includes(itemPage ? itemPage.id : undefined)

    useEffect(() => {
        if (includesFavorites) {
          refFavorite.current.style = 'display: none'
        }
        if (includesFavorites === false && itemPage !== undefined) {
          refFavorite.current.style = 'display: block'
        }
        if (includesCart) {
          refCart.current.innerHTML = 'REMOVE FROM CART'
          refCartImg.current.style = 'display: none'
        }
        if (includesCart === false && itemPage !== undefined) {
          refCart.current.innerHTML = 'ADD TO CART'
          refCart.current.style = 'display: block'
          refCartImg.current.style = 'display: block'
        }
        if (itemPage === undefined) {
            dispatch(getProductsFromApi())
        }
      }, [includesFavorites,dispatch, includesCart])

    const onClickFavorites = () => {
        if (includesFavorites) {
          dispatch({
            type: REMOVE_FROM_FAVORITES,
            data: {
              id: itemPage.id
            }
          })
        } else {
          dispatch({
            type: ADD_TO_FAVORITES,
            data: {
              id: itemPage.id
            }
          })
        }
      }
    
      const onClickCart = () => {
        if (includesCart) {
          dispatch({
            type: REMOVE_FROM_CART,
            data: {
              id: itemPage.id
            }
          })
        } else {
          dispatch({
            type: ADD_TO_CART,
            data: {
              id: itemPage.id
            }
          })
        }
      }

    return itemPage ? <div className="item" id={itemPage.id} data-element="body">
        <div className="card__content">
            <div className='item__image-container-all'>
                <div className="card__image-container">
                    <img className='item__image' src={itemPage.images[0]} alt="Product" />
                </div>
                <div className="card__image-container">
                    <img className='item__image' src={itemPage.images[1]} alt="Product" />
                </div>
            </div>
            <div className="card__description">
                <div className='card__price-and-score'>
                    <div className='card__score'>
                        <button name='scoreButton' className="card__score-button button">
                            <div className="card__container-btn">
                                <span className="card__score-text">
                                    {itemPage.rating}
                                </span>
                                <img src="/img/star.svg" alt="score" className='card__score-image-btn' />
                            </div>
                        </button>
                    </div>
                    <div className="card__price">
                        ₴{itemPage.price}
                    </div>
                </div>
                <div className='card__description-text'>
                    <Link to={`/`} className='reference'>
                        <span className="item__header">{itemPage.title}</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="item__actions">
            <button className='item__wishlist-btn button' name="wishlist"
                onClick={() => onClickFavorites()}>
                <div className="card__container-btn" >
                    <img className="card__heart" src="/img/Path.svg" alt='Like' />
                    <div className="card__text-btn" ref={refFavorite}>WISHLIST</div>
                </div>
            </button>
            <button className='item__add-btn button button' name="addToCart"
                onClick={() => onClickCart()}>
                <div className="card__container-btn">
                    <img className='card__add-to-cart' src="/img/shopping-bag.svg" alt="Shop"
                        ref={refCartImg} />
                    <div className="card__text-btn" ref={refCart}>ADD TO CART</div>
                </div>
            </button>
            <NavLink to='/'>
                <button className='item__btn-home button'>
                    <div className="card__container-btn">
                        <img className='card__add-to-cart' src="../img/home.svg" alt="home page" />
                        <div className="card__text-btn">
                            GO TO MAIN PAGE
                        </div>
                    </div>
                </button>
            </NavLink>
        </div>
    </div>
        : <div className='not-found__main-container'>
            <h1>404 PAGE NOT FOUND</h1>
            <p>try one more time</p>
            <NavLink to='/'>
                <button className='filter-container__btn-reset button'>
                    <div className="filter-container__btn-label">
                        Go to main page
                    </div>
                </button>
            </NavLink>
        </div>
}

export default ItemPage;