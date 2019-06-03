import React from 'react';
import { withRouter } from 'react-router-dom'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: true,
      login: '',
      password: ''
    };
  }

  componentDidUpdate(prevProps) {
    const currentRoute = this.props.location.pathname
    if (currentRoute !== prevProps.location.pathname) {
      this.closePopup()
    }
  }

  closePopup(e) {
    this.props.closePopup()
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const login = this.state.login
    const password = this.state.password

    if (login === 'admin' && password === 'admin') {
      this.props.history.push('/main')
    } else {
      this.setState({
        isCorrect: false
      });
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if (!this.props.isPopupOpen) {
      return null
    }

    return (
      <div className="form-wrapper  form__logIn">
        <div className="form">
            <h2 className="form__header">Log In</h2>
            <span id="exit" onClick={(e) => this.closePopup(e)}>&times;</span>
            { this.state.isCorrect === false &&
              <p className="error_text">Check login and password</p>
            }
            <form name="go" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="login" name="login" 
                        value={this.state.login} 
                        onChange={(e) => this.handleChange(e)} 
                        placeholder="Login" required/>
                <input type="password" name="password" 
                        value={this.state.password} 
                        onChange={(e) => this.handleChange(e)} 
                        placeholder="Password" required/>
                <input type="submit" value="Submit"/>
            </form>
        </div> 
        </div>
    )
  }
}

export default withRouter(Popup);