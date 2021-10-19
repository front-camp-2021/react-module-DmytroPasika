import { Link } from "react-router-dom";
import "./Header.scss"


function Header(props) {
  return <div className="header">
    <div className="header__logo">
      <img src="/img/logo.png" alt="logo" className="header__image" />
      <span className="header__text">
        Online Store
      </span>
    </div>
    <div className="header__nav header-nav">
      <Link to='/'>
        <img src="../img/home.svg" alt="home button" className="header-nav__home-image" />
      </Link>
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
    </div>
  </div>
}

export default Header;