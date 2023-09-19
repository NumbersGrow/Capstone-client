import logo from "../../assets/logos/logo.jpg";

import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__link">
            <img className="header__img" src={logo} alt="our logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/" className="header__navlink">
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/farms" className="header__navlink">
                Farms
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/festivals" className="header__navlink">
                Festivals
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="hero">
          <p className="slogan">Ready to eat Healthy?</p>
          <input className="search" placeholder="Search" />
        </section>
      </div>
    </header>
  );
};

export default Header;
