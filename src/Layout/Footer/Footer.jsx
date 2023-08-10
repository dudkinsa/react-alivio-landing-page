import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import footerLogo from '../../assets/icons/footer-logo.svg'

const Footer = () => {
  const activelLink = 'footer__link footer__link--active';
  const normalLink = 'footer__link';
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src={footerLogo} alt="Footer Logo" />
          
          </div>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/why-alivio"
                >
                  Why Alivio
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/solution"
                >
                  Solution
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelLink : normalLink
                  }
                  to="/community"
                >
                  Community
                </NavLink>
              </li>
              <li className="footer__item">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
