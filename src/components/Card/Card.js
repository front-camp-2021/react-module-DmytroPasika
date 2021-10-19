import { useEffect } from 'react';
import { useRef } from 'react';
import { 
  useDispatch,
  useSelector
} from 'react-redux';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from '../../store/actions/card-lists.js'
import './Card.scss'


function Card({ props }) {
  const dispatch = useDispatch()
  const ref = useRef()
  const favorites = useSelector( state => state.data.favorites.map(item => item.id))
  const includesFavorites = favorites.includes(props.id)
  
  useEffect(() => {
    if (includesFavorites) {
      ref.current.style = 'display: none'
    } 
    if (!includesFavorites) {
      ref.current.style = 'display: block'
    }
  }, [includesFavorites])

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
          <span className="card__header">{props.title}</span>
          <span className='card__text'>{props.brand} - {props.category}</span>
        </div>
      </div>
    </div>

    <div className="card__actions">
      <button className='card__wishlist-btn button' name="wishlist"
        onClick={() => {
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
         
        }}>
        <div className="card__container-btn" >
          <img className="card__heart" src="/img/Path.svg" alt='Like' />
          <div className="card__text-btn" ref={ref}>WISHLIST</div>
        </div>
      </button>
      <button className='card__add-btn button' name="addToCart">
        <div className="card__container-btn">
          <img className='card__add-to-cart' src="/img/shopping-bag.svg" alt="Shop" />
          <div className="card__text-btn">ADD TO CART</div>
        </div>
      </button>
    </div>
  </div>

}

export default Card;