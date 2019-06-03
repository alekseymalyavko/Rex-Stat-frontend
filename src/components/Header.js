import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: ''
    }
  }

  componentDidMount() {
    const currentRoute = this.props.location.pathname
    this.setState({
      currentRoute
    })
  }

  componentDidUpdate(prevProps) {
    const currentRoute = this.props.location.pathname
    if (currentRoute !== prevProps.location.pathname) {
      this.setState({
        currentRoute
      })
    }
  }

  openPopup() {
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
                { this.state.currentRoute === '/' && (
                    <li className="navigation__menu__item">
                      <span onClick={(e) => this.openPopup(e)} className="menu__item__link menu__item__link--active">Sign In</span>
                    </li>
                  )
                }
                { this.state.currentRoute === '/main' && (
                    <li className="navigation__menu__item">
                        <Link to='/collection' className="menu__item__link">Collection</Link>
                    </li>
                  )
                }
                { this.state.currentRoute === '/collection' && (
                    <li className="navigation__menu__item">
                        <Link to='/main' className="menu__item__link">Main</Link>
                    </li>
                  )
                }
                
            </ul>
        </nav>
      </header>
    )
  }
}
export default withRouter(Header);