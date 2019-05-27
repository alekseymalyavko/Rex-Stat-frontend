import React from 'react';
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header>
      <div className="logo">
        <Link to='/'><img src={require('../assets/images/rex-logo.png')}  alt="logo"/></Link>
      </div>
      <nav className="navigation">
          <ul className="navigation__menu">
              <li className="navigation__menu__item">
                  <Link to='/' className="menu__item__link">Home</Link>
              </li>
              <li className="navigation__menu__item">
                <Link to='/main' className="menu__item__link menu__item__link--active">Sign In</Link>
              </li>
          </ul>
      </nav>
    </header>
  )
}
export default header;