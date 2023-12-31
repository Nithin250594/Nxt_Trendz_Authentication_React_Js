// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', invalidLogin: false, errorMessage: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value, invalidLogin: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, invalidLogin: false})
  }

  onSuccessfulSubmit = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailureSubmit = errorMsg => {
    this.setState({invalidLogin: true, errorMessage: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
  try{
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessfulSubmit()
    } else {
      this.onFailureSubmit(data.error_msg)
    }
  } catch(error){
    console.error(' Error during Login API Call:', error)
     this.onFailureSubmit(data.error_msg)
  }
  }

  render() {
    const {username, password, invalidLogin, errorMessage} = this.state

    return (
      <div className="login-form-route">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-mobile"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />

        <div className="login-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />

          <div className="input-form">
            <form onSubmit={this.onSubmitForm}>
              <label htmlFor="username" className="label-title">
                USERNAME
              </label>
              <input
                id="username"
                type="text"
                className="input-box"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />

              <label htmlFor="password" className="label-title">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="input-box"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>

          {invalidLogin && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
