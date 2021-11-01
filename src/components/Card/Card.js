import { useEffect } from 'react';
import { useRef } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../../store/actions/card-lists.js'
import './Card.scss'


function Card({ props }) {
  const dispatch = useDispatch()
  const refFavorite = useRef()
  const refCart = useRef()
  const refCartImg = useRef()
  const favorites = useSelector(state => state.productsList.favorites.map(item => item.id))
  const includesFavorites = favorites.includes(props.id)
  const cart = useSelector(state => state.productsList.cart.map(item => item.id))
  const includesCart = cart.includes(props.id)

  useEffect(() => {
    if (includesFavorites) {
      refFavorite.current.style = 'display: none'
    }
    if (!includesFavorites) {
      refFavorite.current.style = 'display: block'
    }
    if (includesCart) {
      refCart.current.innerHTML = 'REMOVE FROM CART'
      refCartImg.current.style = 'display: none'
    }
    if (!includesCart) {
      refCart.current.innerHTML = 'ADD TO CART'
      refCart.current.style = 'display: block'
      refCartImg.current.style = 'display: block'
    }
  }, [includesFavorites, includesCart])
  

  const onClickFavorites = () => {
    if (includesFavorites) {
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        data: {
          id: props.id
        }
      })
    } else {
      dispatch({
        type: ADD_TO_FAVORITES,
        data: {
          id: props.id
        }
      })
    }
  }

  const onClickCart = () => {
    if (includesCart) {
      dispatch({
        type: REMOVE_FROM_CART,
        data: {
          id: props.id
        }
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        data: {
          id: props.id
        }
      })
    }
  }

  return <div className="card" id={props.id} data-element="body">
    <div className="card__content">
      <div className="card__image-container">
        <img className='card__image' src={props.images[0]} alt="Product" />
      </div>
      <div className="card__description">
        <div className='card__price-and-score'>
          <div className='card__score'>
            <button name='scoreButton' className="card__score-button button">
              <div className="card__container-btn">
                <span className="card__score-text">
                  {props.rating}
                </span>
                <img src="/img/star.svg" alt="score" className='card__score-image-btn' />
              </div>
            </button>
          </div>
          <div className="card__price">
            ₴{props.price}
          </div>
        </div>
        <div className='card__description-text'>
          <Link to={`item/${props.id}`} className='reference'>
            <span className="card__header">{props.title}</span>
          </Link>
          <span className='card__text'>{props.brand} - {props.category}</span>
        </div>
      </div>
    </div>

    <div className="card__actions">
      <button className='card__wishlist-btn button' name="wishlist"
        onClick={() => onClickFavorites()}>
        <div className="card__container-btn" >
          <img className="card__heart" src="/img/Path.svg" alt='Like' />
          <div className="card__text-btn" ref={refFavorite}>WISHLIST</div>
        </div>
      </button>
      <button className='card__add-btn button' name="addToCart"
      onClick={() => onClickCart()}>
        <div className="card__container-btn">
          <img className='card__add-to-cart' src="/img/shopping-bag.svg" alt="Shop" 
          ref={refCartImg} />
          <div className="card__text-btn" ref={refCart}>ADD TO CART</div>
        </div>
      </button>
    </div>
  </div>

}

export default Card;