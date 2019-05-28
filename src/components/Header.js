import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  openPopup(e) {
    this.props.openPopup()
  }
  
  render() {
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
                  <span onClick={(e) => this.openPopup(e)} className="menu__item__link menu__item__link--active">Sign In</span>
                </li>
            </ul>
        </nav>
      </header>
    )
  }
}
export default Header;