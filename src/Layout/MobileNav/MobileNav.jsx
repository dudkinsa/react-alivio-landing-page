import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobileNav.scss';
import logo from '../../assets/icons/logo.svg';

const MobileNav = ({ active, setActive }) => {
  const activelLink = 'mobile-nav__link mobile-nav__link--active';
  const normalLink = 'mobile-nav__link';

  const activeNav = 'mobile-nav__wrapper active';
  const normalNav = 'mobile-nav__wrapper';

  return (
    <div
      className={active ? activeNav : normalNav}
    >
      <img className="mobile-nav__logo" src={logo} alt="logo" />

      <nav className="mobile-nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? activelLink : normalLink
              }
              to="/"
              onClick={() => setActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? activelLink : normalLink
              }
              to="/why-alivio"
              onClick={() => setActive(false)}
            >
              Why Alivio
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? activelLink : normalLink
              }
              to="/solution"
            >
              Solution onClick={() => setActive(false)}
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? activelLink : normalLink
              }
              to="/community"
              onClick={() => setActive(false)}
            >
              Community
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? activelLink : normalLink
              }
              to="/pricing"
              onClick={() => setActive(false)}
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mobile-login">
        <NavLink className="mobile-login__auth" to="/authorization">
          Sign in
        </NavLink>
        <NavLink className="btn mobile-login__btn" to="/">
          Start Trial
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
