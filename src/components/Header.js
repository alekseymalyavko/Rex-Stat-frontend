import React from 'react';

const header = () => {
  return (
    <header>
      <div className="logo">
          <a href="/"><img src={require('../assets/images/rex-logo.png')}  alt="logo"/></a>
      </div>
      <nav className="navigation">
          <ul className="navigation__menu">
              <li className="navigation__menu__item">
                  <a className="menu__item__link" href="/">Home</a>
              </li>
              <li className="navigation__menu__item">
                  <a className="menu__item__link menu__item__link--active" href="/">Sign In</a>
              </li>
          </ul>
      </nav>
    </header>
  )
}
export default header;