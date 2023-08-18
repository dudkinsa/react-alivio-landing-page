import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';



const Header = () => {
  const activelLink = 'header-nav__link header-nav__link--active';
  const normalLink = 'header-nav__link';

  

  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <NavLink to="/" className="header-logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="header-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/why-alivio"
                >
                  Why Alivio
                </NavLink>
              </li>
              <li className="header-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/solution"
                >
                  Solution
                </NavLink>
              </li>
              <li className="header-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/community"
                >
                  Community
                </NavLink>
              </li>
              <li className="header-nav__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-login">
            <NavLink className="header-login__auth" to="/authorization">
              Sign in
            </NavLink>
            <NavLink className="btn header-login__btn" to="/">
              Start Trial
            </NavLink>
          </div>
        </div>
      </div>  
    </header>
  );
};

export default Header;
