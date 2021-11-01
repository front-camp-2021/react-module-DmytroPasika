import { NavLink } from "react-router-dom";
import {
  MAIN,
  FAVORITE,
  ITEM_PAGE,
  CART
} from '../../store/actions/card-lists.js'
import "./Header.scss"


function Header({ type }) {
  const templateMain = () => {
    return <>
      <span className="header-nav__span">
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
      </span>
      <span className="header-nav__text header-nav__text--checked">
        eCommerce
      </span>
      <span className="header-nav__span">
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
      </span>
      <span className="header-nav__text">
        Electronics
      </span>
    </>
  }

  const templateFavorite = () => {
    return <>
      <span className="header-nav__span">
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
      </span>
      <span className="header-nav__text">
        Favorites
      </span>
    </>
  }

  const templateCart = () => {
    return <>
      <span className="header-nav__span">
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
      </span>
      <span className="header-nav__text">
        Cart
      </span>
    </>
  }

  const templateItemPage = () => {
    return <>
      <span className="header-nav__span">
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
        <img src="/img/Pathnav.svg" alt="navigation element" className="header-nav__path-image" />
      </span>
      <span className="header-nav__text">
        Product page
      </span>
    </>
  }


  return <div className="header">
    <NavLink to='/' className='reference'>
      <div className="header__logo">
        <img src="/img/logo.png" alt="logo" className="header__image" />
        <span className="header__text">
          Online Store
        </span>
      </div>
    </NavLink>

    <div className="header__nav header-nav">
      <NavLink to='/'>
        <img src="../img/home.svg" alt="home button" className="header-nav__home-image" />
      </NavLink>
      {type === MAIN ? templateMain()
        : type === FAVORITE ? templateFavorite()
          : type === ITEM_PAGE ? templateItemPage()
            : type === CART ? templateCart() : ''}

    </div>
  </div>
}

export default Header;